import { NextResponse } from "next/server";

import axios from "axios";

export async function POST(request: Request) {
  const user = await axios
    .get(`${process.env.LOGIN_WITH_GOOGLE_GET}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  return NextResponse.json(user);
}
