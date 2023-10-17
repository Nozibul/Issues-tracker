import { validationSchema } from "@/app/utils/validationSchema";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
    const prisma = new PrismaClient();
  
    try {
      //get edit data
      const body = await request.json();
      console.log(body)
      const validation = validationSchema.safeParse(body);
  
      // validate the issue data
      if(!validation.success) 
      return NextResponse.json(validation.error.format(), {status: 400}) ;
  
      // find the unique id 
      const issueId = await prisma.issue.findUnique({
        where: { id: parseInt(params.id) }
      });
      console.log("Id",issueId.id)
    //   if(!issue) return NextResponse.json({ error: "Invalid Issue"}, { status: 404 })


      // update the edit data from unique id
      const updatedIssue = await prisma.issue.update({
        where: { id: issueId.id },
        data: {
            title: body.title,
            description: body.description
        }
      })
      console.log(issueId.id)
      console.log("Update Issue",updatedIssue);
      return NextResponse.json(updatedIssue);
  
  
    } catch (error) {
      console.log(error);
      return NextResponse.json({ status: "Fail" });
  
    }
  }
  