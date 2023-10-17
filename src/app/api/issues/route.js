import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { validationSchema } from "@/app/utils/validationSchema";


export async function POST(request) {
  const prisma = new PrismaClient();

  try {
    const body = await request.json();
    const validation = validationSchema.safeParse(body);

    if(!validation.success) 
    return NextResponse.json(validation.error.format(), {status: 400}) ;

    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description }
    });
   
    return NextResponse.json(newIssue, { status: 201});


  } catch (error) {
    // console.log(error);
    return NextResponse.json({ status: "Fail" });

  }
}
