import { z } from "zod";

export const signUpSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .min(3, "Name must be between 2 and 50 characters")
        .max(45, "Name must be between 2 and 50 characters"),
    email: z
        .string({ required_error: "Email is required" })
        .email("Invalid email address"),
    password: z
        .string({ required_error: "Password is required" })
        .min(6, "Password must be at least 6 characters"),
      role: z.string({ required_error: "Role is required" })
});