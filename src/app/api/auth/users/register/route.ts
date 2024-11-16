import {NextRequest, NextResponse} from "next/server";
import {validateCreateUserRequest} from "@/types/prisma/user";
import {db} from "@/server/db";

export async function POST(request: NextRequest) {
    const body: unknown = await request.json();

    let validRequestBody;

    try {
        validRequestBody = validateCreateUserRequest(body);
    } catch (error: any) {
        return NextResponse.json({error: error.toString()}, {status: 400})
    }

    try {
        const userExists = await db.user.findUnique({
            where: {
                email: validRequestBody.email
            }
        })

        if (userExists) return NextResponse.json({error: "User with provided email already exists"}, {status: 422})

        const user = await db.user.create({
            data: validRequestBody
        });

        return NextResponse.json({user}, {status: 200});
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {error: `Failed to create user: ${error instanceof Error ? error : "Unknown error"}`},
            {status: 500},
        );
    }
}

