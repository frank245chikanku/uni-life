import {
  NextFunction,
  Request,
  Response,
} from "express";

import jwt, {
  JwtPayload,
} from "jsonwebtoken";

import prisma from "../lib/prisma";

interface AdminTokenPayload
  extends JwtPayload {
  adminId: string;
  username: string;
  role: "admin";
}

export const requireAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authorization =
      req.headers.authorization;

    if (
      !authorization ||
      !authorization.startsWith("Bearer ")
    ) {
      res.status(401).json({
        success: false,
        message:
          "Administrator authentication is required.",
      });

      return;
    }

    const token = authorization
      .slice(7)
      .trim();

    if (!token) {
      res.status(401).json({
        success: false,
        message:
          "Administrator authentication is required.",
      });

      return;
    }

    const jwtSecret =
      process.env.JWT_SECRET;

    if (!jwtSecret) {
      console.error(
        "JWT_SECRET is not configured."
      );

      res.status(500).json({
        success: false,
        message:
          "Server authentication is not configured correctly.",
      });

      return;
    }

    const decoded =
      jwt.verify(
        token,
        jwtSecret
      ) as AdminTokenPayload;

    if (
      decoded.role !== "admin" ||
      !decoded.adminId ||
      !decoded.username
    ) {
      res.status(401).json({
        success: false,
        message:
          "Invalid administrator token.",
      });

      return;
    }

    const admin =
      await prisma.admin.findUnique({
        where: {
          id: decoded.adminId,
        },

        select: {
          id: true,
          username: true,
        },
      });

    if (!admin) {
      res.status(401).json({
        success: false,
        message:
          "Administrator account no longer exists.",
      });

      return;
    }

    req.admin = admin;

    next();
  } catch (error) {
    console.error(
      "Admin authentication error:",
      error
    );

    res.status(401).json({
      success: false,
      message:
        "Your administrator session is invalid or has expired.",
    });
  }
};