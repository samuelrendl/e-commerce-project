"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";

export async function getUserById(params: any) {
  try {
    await connectToDatabase();

    const { userId } = params;

    const user = await User.findById({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    await connectToDatabase();

    // Check if the user already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const newUser = await User.create(userData);
    await newUser.save();

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(userData: UpdateUserParams) {
  try {
    await connectToDatabase();

    const { clerkId, updateData, path } = userData;

    // Update user based on the clerkId and pass the updateData / third parameter: we want to create a new instane of the user in the db
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(userData: DeleteUserParams) {
  try {
    await connectToDatabase();

    const { clerkId } = userData;

    const user = await User.findById({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // Delete user from the database
    // TODO: All the orders, wishlist items and reviews associated with the user will be deleted as well

    const deletedUser = await User.findByIdAndDelete(user._id);

    return {
      message: "User and associated data deleted successfully",
      deletedUser,
    };
  } catch (error) {
    console.log("Error deleting user:", error);
    throw error;
  }
}

// export async function createUser(userData: CreateUserParams) {
//     try {

//       connectToDatabase();

//     } catch (error) {
//       console.log(error);
//       throw error;
//     }
//   }
