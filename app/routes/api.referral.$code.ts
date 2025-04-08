import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { userPrefs } from "~/cookies.server";

export async function loader({
  request,
  params,
}: ActionFunctionArgs){
  const cookieHeader = request.headers.get("Cookie");
  const cookie =
    (await userPrefs.parse(cookieHeader)) || {};
  const code = params?.code;
  if(code) {
    cookie.code = code + (new Date()).getTime();
  };
  console.log('cookie', cookie);

  console.log('await userPrefs.serialize(cookie)',await userPrefs.serialize(code))
  return redirect("https://apps.shopify.com/facebook-multiple-pixel", {
    headers: {
      "Set-Cookie": await userPrefs.serialize(code),
    },
  });
}