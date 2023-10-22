import { NextResponse } from "next/server";
import { validationSchema } from "@/app/utils/validationSchema";
import prisma from "../../../../prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";


export async function POST(request) {

  const session = await getServerSession(authOptions);
  if(!session) return NextResponse.json({}, {status: 401})

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
    return NextResponse.json({ status: "Fail" });

  }
}
