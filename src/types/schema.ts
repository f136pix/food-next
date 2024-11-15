import {z} from "zod";

export const registerUserFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
});