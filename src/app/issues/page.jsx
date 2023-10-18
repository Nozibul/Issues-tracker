import { Table } from "@radix-ui/themes";
import { IssueStatus, Link,  } from "@/app/components";
import IssueActionBtn from "./IssueActionBtn";
import prisma from "../../../prisma/client";




const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
 
  return (
    <>
      <IssueActionBtn />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues?.length > 0
            ? issues.map((issue) => (
                <Table.Row key={issue.id}>
                  <Table.Cell>
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    <div className="block md:hidden">
                      <IssueStatus status={issue.status} />
                    </div>
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    <IssueStatus status={issue.status} />
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    {issue.createdAt.toDateString()}
                  </Table.Cell>
                </Table.Row>
              ))
            : null}
        </Table.Body>
      </Table.Root>
    </>
  );
};

// export const revalidate = 60;
export const dynamic = "force-dynamic";

export default IssuesPage;
