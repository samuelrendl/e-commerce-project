"use server";

import Product from "@/database/product.model";

import { connectToDatabase } from "../mongoose";
import { GetProductsParams } from "./shared.types";

export async function getAllProducts(params: GetProductsParams) {
    try {
        connectToDatabase();

        const products = await Product.find({});

        return products;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
