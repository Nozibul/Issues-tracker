import IssueStatus from "@/app/components/IssueStatus";
import { PrismaClient } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";

const IssueDetailsPage = async ({ params }) => {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return notFound();

  // delay the component render manually
  await delay(1000);
  

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="3">
        <IssueStatus status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="mt-4 ">
        <p>{issue.description}</p>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
