import { Request, Response } from "express";
import { LoginDto, RegisterDto } from "./dto";
import { validate } from "class-validator";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/prisma";
import { hash, compare } from "bcrypt";

export class AuthCollection {
  async Register(req: Request, res: Response): Promise<void> {
    try {

      req.body.email = req.body.email?.trim().toLowerCase();
      req.body.password = req.body.password?.trim();
      req.body.username = req.body.username?.trim();

      const data = new RegisterDto(req.body);
      const errors = await validate(data);

      if (errors.length > 0) {
        res.status(StatusCodes.CONFLICT).json(errors);
        return;
      }

      const user = await prisma.user.findUnique({
        where: { email: data.email }
      });

      if (user) {
        res.status(StatusCodes.BAD_REQUEST).json({
          message: "User already exists"
        });
        return;
      }

      const hashPassword = await hash(data.password, 10);

      await prisma.user.create({
        data: {
          username: data.username,
          email: data.email,
          password: hashPassword
        }
      });

      res.status(StatusCodes.CREATED).json({
        message: "User created successfully"
      });
    } catch (error: any) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: error.message || "Server error"
      });
    }
  }

  async Login(req: Request, res: Response): Promise<void> {
    try {

      req.body.email = req.body.email?.trim().toLowerCase();
      req.body.password = req.body.password?.trim();

      const data = new LoginDto(req.body);
      const errors = await validate(data);

      if (errors.length > 0) {
        res.status(StatusCodes.CONFLICT).json(errors);
        return;
      }

      const user = await prisma.user.findUnique({
        where: { email: data.email }
      });

      if (!user) {
        res.status(StatusCodes.BAD_REQUEST).json({
          message: "User doesn't exist"
        });
        return;
      }


      const isMatch = await compare(data.password, user.password);
      if (!isMatch) {
        res.status(StatusCodes.BAD_REQUEST).json({
          message: "Incorrect password"
        });
        return;
      }

      const payload = {
        id: user.id,
        email: user.email,
        username: user.username
      };

      res.status(StatusCodes.OK).json(payload);
    } catch (error: any) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: error.message || "Server error"
      });
    }
  }
}
