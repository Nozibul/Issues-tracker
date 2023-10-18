"use client";
import { Button, AlertDialog, Flex } from "@radix-ui/themes";
// import Link from "next/link";
import { MdDelete } from "react-icons/md";

const DeleteIssueButton = ({ issueId }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button className="border-2" variant="surface" color="red">
          <MdDelete />
          Delete users
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this issue? This action cannot be
          undone.
        </AlertDialog.Description>
        <Flex gap="3" mt="4">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="surface" color="red">
              Delete Issue
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
