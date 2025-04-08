import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const userPrefs = createCookie("user-prefs", {
  maxAge: 300, // one week
  path: "/",
  httpOnly: false, // Để có thể truy cập từ JavaScript
  sameSite: "lax",
});
