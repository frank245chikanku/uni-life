import { Router } from "express";
import { InternshipCollection } from "./collection";

const internshipRouter = Router()
const internshipCOllection = new InternshipCollection();

internshipRouter.post("/create",internshipCOllection.CreateInternship)
internshipRouter.get("/get-all",internshipCOllection.GetAllInternships)
internshipRouter.get("/get-one/:id",internshipCOllection.GetById)
internshipRouter.put("/update/:id",internshipCOllection.Update)
internshipRouter.delete("/delete/:id",internshipCOllection.Delete)

export default internshipRouter;