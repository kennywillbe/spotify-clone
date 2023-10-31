import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body.email;
    const password = body.password;
    const FullName = body.name;

    const response = await axios.post(`${process.env.REGISTER_POST}`, {
      email,
      password,
      FullName,
    });
    return NextResponse.json(response.data);
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
