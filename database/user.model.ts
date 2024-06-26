import { Document, Schema, model, models } from "mongoose";
import mongoose from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  picture: string;
  address?: {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  orders?: Schema.Types.ObjectId[];
  favorites?: Schema.Types.ObjectId[];
  joinedAt: Date;
  lastLogin?: Date;
}


const UserSchema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      postalCode: { type: String },
    },
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    favorites: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    joinedAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
