import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueAction = () => {
  return (
    <div className="mb-8">
    <Button>
      <Link href="/issues/new">New Issue </Link>
    </Button>
  </div>
  )
}

export default IssueAction ;