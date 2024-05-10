require("dotenv").config();
import mongoose, { Document, Schema, Model } from "mongoose";

// interface IComment extends Document {
//   user: object;
//   comment: string;
// }

// interface IReview extends Document {
//   user: object;
//   rating: number;
//   comment: string;
//   commentReplies: IComment[];
// }

// interface ILink extends Document {
//   title: string;
//   url: string;
// }

// interface ICourseData extends Document {
//   title: string;
//   description: string;
//   image: object;
//   links: ILink;
//   price: number;
//   suggestion: string;
//   comment: IComment[];
// }

interface ICourse extends Document {
  name: string;
  description: string;
  image: object;
  price: number;

  category: string;
  seat: number;
  enrolled: number;
  adminFeedback?: string;
  status: string;
}

const courseSchema: Schema<ICourse> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    public_id: {
      required: true,
      type: String,
    },
    url: {
      required: true,
      type: String,
    },
  },
  price: {
    type: Number,
    required: true,
  },
  seat: {
    type: Number,
    required: true,
  },
  enrolled: {
    type: Number,
    required: true,
    default: 0,
  },
  adminFeedback: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "pending",
  },
});

const courseModel: Model<ICourse> = mongoose.model("Course", courseSchema);
export default courseModel;
