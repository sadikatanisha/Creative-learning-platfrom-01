require("dotenv").config();
import { Request, Response, NextFunction } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import cloudinary from "cloudinary";
import { createCourse } from "../services/course.service";
import courseModel from "../models/Course";

//Upload course
export const uploadCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const image = data.image;
      if (image) {
        const myCloud = await cloudinary.v2.uploader.upload(image, {
          folder: "courses",
        });
        data.image = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }
      createCourse(data, res, next);
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//Edit Course
export const editCourse = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const image = data.image;
      if (image) {
        await cloudinary.v2.uploader.destroy(image.public_id);
        const myCloud = await cloudinary.v2.uploader.upload(image, {
          folder: "courses",
        });
        data.image = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };
      }

      const courseId = req.params.id;
      const course = await courseModel.findByIdAndUpdate(
        courseId,
        { $set: data },
        { new: true }
      );
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);
