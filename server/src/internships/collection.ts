import { Request, Response } from "express";
import { CreateDto, UpdateDto } from "./dto";
import { validate } from "class-validator";
import { StatusCodes } from "http-status-codes";
import { prisma } from "../config/prisma";

export class InternshipCollection {
    async CreateInternship(req: Request, res: Response): Promise<void> {
        try {
            const data = new CreateDto(req.body);

            const errors = await validate(data);

            if (errors.length > 0) {
                res.status(StatusCodes.CONFLICT).json(errors)
                return
            }

            const newInternship = await prisma.internship.create({
                data: {
                    contact: data.contact,
                    link: data.link,
                    title: data.title,
                    description: data.description,
                    address: data.address,
                }
            })

            res.status(StatusCodes.CREATED).json({ newInternship })
        } catch (error: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "something went wrong",
                error: error || error.message
            })
        }
    }

    async GetAllInternships(_req: Request, res: Response): Promise<void> {
        try {
            const internships = await prisma.internship.findMany();

            res.status(StatusCodes.OK).json(internships)
        } catch (error: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "something went wrong",
                error: error || error.message
            })
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const id = req.params.id
            const internship = await prisma.internship.findUnique({
                where: {
                    id
                }
            })

            res.status(StatusCodes.OK).json(internship)
        } catch (error: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "something went wrong",
                error: error || error.message
            })
        }
    }

    async Delete(req: Request, res: Response) {
        try {
            const id = req.params.id
            await prisma.internship.delete({
                where: {
                    id
                }
            })

            res.status(StatusCodes.OK).json({ message: 'deleted successfully' })
        } catch (error: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "something went wrong",
                error: error || error.message
            })
        }
    }

    async Update(req: Request, res: Response) {
        try {
            const id = req.params.id

            const data = new UpdateDto(req.body);

            const errors = await validate(data);

            if (errors.length > 0) {
                res.status(StatusCodes.CONFLICT).json(errors)
                return
            }

            const internship = await prisma.internship.update({
                where: {
                    id
                },
                data: {
                    contact: data.contact,
                    link: data.link,
                    title: data.title,
                    description: data.description,
                    address: data.address
                }
            })

            res.status(StatusCodes.OK).json(internship)
        } catch (error: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "something went wrong",
                error: error || error.message
            })
        }
    }
}