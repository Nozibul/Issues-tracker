"use client";

import { ErrorMessage, LoadingSpinner } from "@/app/components";
import { validationSchema } from "@/app/utils/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextArea, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";



const IssueForm = ({issue}) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
 


  const { register, handleSubmit,formState: { errors } } = useForm({
    resolver: zodResolver(validationSchema),
  });


  // handle form submission
  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      await axios.post("/api/issues", data);
      router.push("/issues");

    } catch (error) {
      setIsSubmitting(false);
      setError("An unexpected error occurred");
    }
  };


  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-4">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 ">
        <TextField.Root>
          <TextField.Input defaultValue={issue?.title} placeholder="Title" {...register("title")} />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>{" "}
        <TextArea size="3" defaultValue={issue?.description} placeholder="Description…" {...register("description")} />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          Submit New Issue {isSubmitting && <LoadingSpinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
