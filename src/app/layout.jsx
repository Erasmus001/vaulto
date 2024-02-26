import "./globals.css";
import "@mantine/core/styles.css";

import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vaulto | School File Management",
  description: "Store and backup your school files securely on Vaulto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
