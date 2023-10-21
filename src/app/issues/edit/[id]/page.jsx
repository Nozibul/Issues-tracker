
import dynamic from "next/dynamic";
import prisma from "../../../../../prisma/client";
import { notFound } from "next/navigation";
import IssueFormLoading from "./loading";

const IssueForm = dynamic(
  ()=> import('@/app/issues/components/IssueForm'),
  {
    ssr: false,
    loading: ()=> <IssueFormLoading />
  }
)

const EditIssuePage = async ({ params }) => {
  
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return notFound();

  return <div> <IssueForm issue={issue} /> </div>;
};

export default EditIssuePage;
