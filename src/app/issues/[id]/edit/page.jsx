import { PrismaClient } from "@prisma/client";
import IssueForm from "../../components/IssueForm";
import { notFound } from "next/navigation";

const EditIssuePage = async ({ params }) => {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return notFound();

  return <div> <IssueForm issue={issue} /> </div>;
};

export default EditIssuePage;
