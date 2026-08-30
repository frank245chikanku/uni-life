import { Router, Request, Response } from "express";

import { adminLogin } from "../controllers/adminAuthController";
import { requireAdmin } from "../middleware/adminAuth";

const router = Router();



router.post("/login", adminLogin);



router.get(
  "/me",
  requireAdmin,
  (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      admin: req.admin,
    });
  }
);

export default router;