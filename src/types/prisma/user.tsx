import {type Prisma} from "@prisma/client";
import {z} from "zod";
import {fromError} from "zod-validation-error";

type createUserModel = Prisma.UserUncheckedCreateInput

const baseUserSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    password: z.string(),
    city: z.string().optional(),
    country: z.string().optional(),
    firstName: z.string(),
    lastName: z.string(),
    createdAt: z.date(),
});

const createUserSchema = baseUserSchema.omit({id: true});

export const validateCreateUserRequest = (value: unknown): createUserModel => {
    try {
        return createUserSchema.parse(value)
    } catch (error) {
        throw fromError(error);
    }
}