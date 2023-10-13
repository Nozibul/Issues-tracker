"use client";
import { Text } from "@radix-ui/themes";

const ErrorMessage = ({children}) => {
    if(!children) return null ;
  return (
    <Text color="red" as="p">{children}</Text>
  )
}

export default ErrorMessage;