import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { API_ENDPOINT } from "@/components/constants";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // the name to display on the signin form
      name: "Sign in",
      id: "local",
      type: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "johndoe@example.com",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials, request) {
        const { email, password } = credentials;

        const authBody = {
          identity: email,
          password,
        };

        const record = await fetch(
          `${API_ENDPOINT}/api/collections/users/auth-with-password`,
          {
            method: "POST",
            body: JSON.stringify(authBody),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const response = await record?.json();
        console.log(response, "next-auth");

        if (response) {
          return response;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    newUser: "/dashboard",
    signOut: "/",
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, user, account }) {
      //* Persist the OAuth access_token to the token right after signin

      if (account?.provider == "local" || "production") {
        token.jwt = user?.tokens?.access_token;
        token.user = user;
        token.refreshToken = user?.tokens?.refresh_token;
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      // session.jwt = token?.jwt;
      session.user = token;
      return session;
    },
  },
});
