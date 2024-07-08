// pages/api/auth/login.ts
import { connect } from "../../../../../dbConfig/db";
import UserModel from "../../../../../model/UserModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Check user role
    if (user.role !== "admin" && user.role !== "user") {
      return NextResponse.json({ error: "Invalid role" }, { status: 401 });
    }

    const tokendata = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    // Create JWT token
    const token = await jwt.sign(tokendata, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    return NextResponse.json(
      {
        message: "Login successful",
        token,
        user: { email: user.email, role: user.role },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
