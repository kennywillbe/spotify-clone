import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const headers = req.headers.get("cookie");

    let user;
    let cookies;

    const response = await axios.get(`${process.env.CURRENT_USER_GET}`, {
      headers: {
        cookie: headers,
      },
    });
    user = response.data;
    cookies = response.headers["set-cookie"];

    const nextResponse = NextResponse.json(user);
    if (cookies) {
      cookies.forEach((cookie) => {
        nextResponse.headers.append("Set-Cookie", cookie);
      });
    }

    return nextResponse;
  } catch (error: any) {
    const statusCode = error.response ? error.response.status : 500;
    const errorMessage = error.response
      ? error.response.data.message
      : "Internal Server Error";

    return new NextResponse(errorMessage, {
      status: statusCode,
    });
  }
}
