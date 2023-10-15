import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueActionBtn = () => {
  return (
    <div className="mb-8">
    <Button>
      <Link href="/issues/new">New Issue </Link>
    </Button>
  </div>
  )
}

export default IssueActionBtn ;