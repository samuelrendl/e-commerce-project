import { Schema } from "mongoose";

import { IUser } from "@/mongodb";

// USER TYPES

export interface CreateUserParams {
  clerkId: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
}

export interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<IUser>;
  path: string;
}

export interface DeleteUserParams {
  clerkId: string;
}

// PRODUCT TYPES

export interface GetProductsParams {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  category?: string;
  filter?: string;
}

export interface GetProductByIdParams {
  productId: string;
}
