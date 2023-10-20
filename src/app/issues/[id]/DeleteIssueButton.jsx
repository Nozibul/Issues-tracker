"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

const DeleteIssueButton = ({ issueId }) => {
  const router = useRouter();

  // delete single the list of Issue
  const deleteIssue = async () => {
    try {
      await axios.delete("/api/issues/" + issueId);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

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
            <Button variant="surface" color="red"
             onClick={deleteIssue}>
              Delete Issue
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
