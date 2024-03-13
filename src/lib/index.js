import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


// const usedUsernames = [];

export function generateUniqueUsername() {

  let username = '';

  // Generate a random username
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  for(let i = 0; i < 8; i++) {
    username += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Check if username is already used
  // if(usedUsernames.includes(username)) {
  //   return generateUniqueUsername();
  // }

  // // Add username to used list
  // usedUsernames.push(username);

  return username;
}
