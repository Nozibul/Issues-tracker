"use client";

import { TextField, TextArea, Button, Callout, Text } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/app/utils/validationSchema";

const NewIssuePage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });
  const [error, setError] = useState("");

  // handle form submission
  const onSubmit = async (data) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setError("An unexpected error occurred");
      setTimeout(() => {
        setError("");
      }, 3000);
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
        {errors.title && <Text color="red" as="p">{errors.title.message}</Text>}
        <TextArea
          size="3"
          placeholder="Description…"
          {...register("description")}
        />
        {errors.description && (
          <Text color="red" as="p">{errors.description.message}</Text>
        )} 

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
