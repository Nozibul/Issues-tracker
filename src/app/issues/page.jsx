import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import IssueStatus from "../components/IssueStatus";

const IssuesPage = async () => {
  const prisma = new PrismaClient();
  const issues = await prisma.issue.findMany();

  return (
    <>
      <div className="mb-8">
        <Button>
          <Link href="/issues/new">New Issue </Link>
        </Button>
      </div>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues?.length > 0
            ? issues.map((issue) => (
                <Table.Row key={issue.id}>
                  <Table.Cell>{issue.title}
                  <div className="block md:hidden"><IssueStatus status={issue.status}/></div>
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    <IssueStatus status={issue.status} />
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">{issue.createdAt.toDateString()}</Table.Cell>
                </Table.Row>
              ))
            : null}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default IssuesPage;
