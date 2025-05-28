
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const customerRegistrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const driverApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  city: z.string().min(1, "Please select a city"),
  vehicleType: z.string().min(1, "Please select a vehicle type"),
  vehicleModel: z.string().min(2, "Vehicle model is required"),
  licenseNumber: z.string().min(5, "License number is required"),
  experience: z.string().min(1, "Please select your driving experience"),
  why: z.string().min(20, "Please tell us why you want to join (minimum 20 characters)"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type CustomerRegistrationFormData = z.infer<typeof customerRegistrationSchema>;
export type DriverApplicationFormData = z.infer<typeof driverApplicationSchema>;
