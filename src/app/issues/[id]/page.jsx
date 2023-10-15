import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const IssueDetailsPage = async ({ params }) => {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return notFound();

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailsPage;
