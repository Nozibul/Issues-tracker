"use client";

import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

const NewIssuePage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control
    // formState: { errors },
  } = useForm();

  // handle form submission
  const onSubmit = async(data) => {
    await axios.post("/api/issues", data);
    router.push("/issues");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-2">
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <Controller
        name="description" 
        control={control}
        render={({ field }) => (
          <SimpleMDE
            placeholder="Description..."
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
        <Button>Submit New Issue</Button>
      </form>
    </>
  );
};

export default NewIssuePage;
