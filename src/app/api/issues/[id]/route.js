import { validationSchema } from "@/app/utils/validationSchema";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

// Edit the Issue
export async function PATCH(request, { params }) {
  // const session = await getServerSession(authOptions);
  // if (!session) return NextResponse.json({}, { status: 401 });

  try {
    //get edit data
    const body = await request.json();
    const validation = validationSchema.safeParse(body);

    // validate the issue data
    if (!validation.success)
      return NextResponse.json(validation.error.format(), { status: 400 });

    // find the unique id
    const issueId = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!issueId)
      return NextResponse.json({ error: "Invalid Issue" }, { status: 404 });

    // update the edit data from unique id
    const updatedIssue = await prisma.issue.update({
      where: { id: issueId.id },
      data: {
        title: body.title,
        description: body.description,
      },
    });
    return NextResponse.json(updatedIssue);
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ status: "Failed" });
  }
}

// Delete the Issue
export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  try {
    // find the unique id
    const issueId = await prisma.issue.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!issueId)
      return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

    await prisma.issue.delete({
      where: { id: issueId.id },
    });

    return NextResponse.json({}); // Response for a successful deletion
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "Fail" }, { status: 500 }); // Error response
  }
}
