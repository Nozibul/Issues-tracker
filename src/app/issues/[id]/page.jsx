import { PrismaClient } from "@prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";


const IssueDetailsPage = async ({ params }) => {
  const prisma = new PrismaClient();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) return notFound();

  return (
    <Grid columns={{ initial: "1", md:"2" }} gap="4">
      <Box className="max-w-xl">
       <IssueDetails issues={issue} />
      </Box>
      <Box>
      <EditIssueButton issueId={issue.id} />
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
