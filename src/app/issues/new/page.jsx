"use client";

import { TextField,TextArea, Button } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";


const NewIssuePage = () => {
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  // handle form submission
  const onSubmit = async (data) => {
    try {
      console.log("Dataaaaaaaaaa", data);

      // await axios.post("/api/issues", data);
      // router.push("/issues");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <TextArea size="3" placeholder="Description…" {...register("description")} />
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
