import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";


const IssueFormLoading = () => {
  return (
    <>
      <Box className="max-w-xl">
        <Skeleton height="2rem"/>
        <Skeleton height="15rem" />
      </Box>
    </>
  );
};

export default IssueFormLoading;
