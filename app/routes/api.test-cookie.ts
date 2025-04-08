import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { userPrefs } from "~/cookies.server";

export async function loader({
  request,
  params,
}: ActionFunctionArgs){
  const cookieHeader = request.headers.get("Cookie");
  const cookie =
    (await userPrefs.parse(cookieHeader)) || {};
  console.log('cookie read', cookie);

  return {
    code: 200
  };
}