import { Box, Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailsPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="3">
        <Skeleton width="6rem" />
        <Skeleton width="9rem" />
      </Flex>
      <Card className="mt-4 ">
        <Skeleton count={2}/>
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailsPage;
