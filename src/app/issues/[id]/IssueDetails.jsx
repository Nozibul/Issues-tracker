import { IssueStatus } from "@/app/components";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";

const IssueDetails = ({issues}) => {
    const { title, description, status, createdAt } = issues || {} ;
  return (
    <>
      <Heading>{title}</Heading>
      <Flex gap="3">
        <IssueStatus status={status} />
        <Text>{createdAt.toDateString()}</Text>
      </Flex>
      <Card className="mt-4 ">
        <p>{description}</p>
      </Card>
    </>
  );
};

export default IssueDetails;
