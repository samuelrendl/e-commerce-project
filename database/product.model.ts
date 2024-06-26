import { Document, Schema, model, models } from "mongoose";

// export interface IReview {
//   userId: Schema.Types.ObjectId;
//   comment: string;
//   rating: number;
//   createdAt: Date;
// }

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrls: string[];
  rating: number;
  //   reviews: IReview[];
}

// const ReviewSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
//   comment: { type: String, required: true },
//   rating: { type: Number, required: true, min: 1, max: 5 },
//   createdAt: { type: Date, default: Date.now },
// });

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 0 },
  imageUrls: [{ type: String }],
  rating: { type: Number, default: 0 },
  // reviews: [ReviewSchema],
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
