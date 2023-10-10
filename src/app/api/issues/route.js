import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";


// create issue schema
const issueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

export async function POST(request) {
  const prisma = new PrismaClient();

  try {
    const body = await request.json();
    const validation = issueSchema.safeParse(body);

    if(!validation.success) 
    return NextResponse.json(validation.error.errors, {status: 400}) ;

    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description }
    });
     console.log(newIssue);
    return NextResponse.json(newIssue, { status: 201});


  } catch (error) {
    // console.log(error);
    return NextResponse.json({ status: "Fail" });

  }
}
