"use server";

import Product from "@/database/product.model";

import { connectToDatabase } from "../mongoose";
import { GetProductsParams, GetProductByIdParams } from "./shared.types";

export async function getAllProducts(params: GetProductsParams) {
  try {
    await connectToDatabase();

    const products = await Product.find({});

    return products;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProductById(params: GetProductByIdParams) {
  try {
    await connectToDatabase();

    const { productId } = params;

    const product = await Product.findById(productId);

    return product;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProductByCategory(params: GetProductsParams) {
  try {
    await connectToDatabase();

    const { category } = params;

    const products = await Product.find({ category });

    return products;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
