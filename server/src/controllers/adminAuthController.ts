import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";

export const adminLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username, password } = req.body as {
      username?: string;
      password?: string;
    };

    if (!username?.trim() || !password) {
      res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });
      return;
    }

    const admin = await prisma.admin.findUnique({
      where: {
        username: username.trim(),
      },
    });

    if (!admin) {
      res.status(401).json({
        success: false,
        message: "Invalid administrator credentials.",
      });
      return;
    }

    const passwordMatches = await bcrypt.compare(
      password,
      admin.passwordHash
    );

    if (!passwordMatches) {
      res.status(401).json({
        success: false,
        message: "Invalid administrator credentials.",
      });
      return;
    }

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      console.error("JWT_SECRET is missing.");

      res.status(500).json({
        success: false,
        message: "Server authentication is not configured correctly.",
      });

      return;
    }

    const token = jwt.sign(
      {
        adminId: admin.id,
        username: admin.username,
        role: "admin",
      },
      jwtSecret,
      {
        expiresIn:
          (process.env.JWT_EXPIRES_IN ||
            "8h") as jwt.SignOptions["expiresIn"],
      }
    );

    res.status(200).json({
      success: true,
      message: "Administrator signed in successfully.",
      token,
      admin: {
        id: admin.id,
        username: admin.username,
      },
    });
  } catch (error) {
    console.error("Admin login error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to sign in at the moment.",
    });
  }
};