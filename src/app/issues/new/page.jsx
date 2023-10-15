"use client";

import { TextField, TextArea, Button, Callout } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/app/utils/validationSchema";
import ErrorMessage from "@/app/components/ErrorMessage";
import LoadingSpinner from "@/app/components/LoadingSpinner";


const NewIssuePage = () => {
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
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>{" "}
        <TextArea size="3" placeholder="Description…" {...register("description")} />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          Submit New Issue {isSubmitting && <LoadingSpinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
