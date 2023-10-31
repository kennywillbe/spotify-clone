import { NextResponse } from "next/server";

import axios from "axios";

export async function POST(request: Request) {
  const clientCookies = request.headers.get("cookie") || "";

  let user;
  let cookies;

  try {
    const response = await axios.post(
      `${process.env.LOGOUT_POST}`,
      {},
      {
        withCredentials: true,
        headers: {
          Cookie: clientCookies,
        },
      }
    );
    user = response.data;
    cookies = response.headers["set-cookie"];
  } catch (error: any) {
    const statusCode = error.response ? error.response.status : 500;
    const errorMessage = error.response
      ? error.response.data.message
      : "Internal Server Error";

    return new NextResponse(errorMessage, {
      status: statusCode,
    });
  }
  const nextResponse = NextResponse.json(user);
  // set the cookies on response headers
  if (cookies) {
    cookies.forEach((cookie) => {
      nextResponse.headers.append("Set-Cookie", cookie);
    });
  }

  return nextResponse;
}
