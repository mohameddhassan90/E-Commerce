"use client";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { registerSchema, RegisterSchemaType } from "../schema/schema.register";
import { signUp } from "@/apis/register.api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Rigester() {
  const {reset, control, handleSubmit } = useForm<RegisterSchemaType>({
    resolver:zodResolver(registerSchema),
    defaultValues: {
      name: ``,
      email: ``,
      password: ``,
      rePassword: ``,
      phone: ``,
    },
  });

  const router =useRouter();

  async function handleRegister(data: RegisterSchemaType) {
        
    try {

      const signUpResponse = await signUp(data);
      if (signUpResponse) {
        toast.success(`Registered successfully! Please log in.`,{ position: "top-center",
          style: { backgroundColor: "#16A34A", color: "#fff" } });
        router.push(`/signin`);
      } else {
        toast.error(`Failed to register. Please try again.`,{ position: "top-center",
          style: { backgroundColor: "#DC2626", color: "#fff" } });
      }
      
      // reset();
    } catch (error:any) {
      toast.error(error?.message,{ position: "top-center",
          style: { backgroundColor: "#DC2626", color: "#fff" } })
    }
  }
  
  return (
    <form className="w-1/3 mx-auto my-10" onSubmit={handleSubmit(handleRegister)}>
      <FieldGroup>
        {/* name input */}
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-name">
                    Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter Your Name"
                    autoComplete="off"
                    type="text"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* email input */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-email">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your Email"
                    autoComplete="off"
                    type="email"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* password input */}
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-password">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter Your Password"
                    autoComplete="off"
                    type="password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* repassword input */}
            <Controller
              name="rePassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-repassword">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-repassword"
                    aria-invalid={fieldState.invalid}
                    placeholder="Confirm Password"
                    autoComplete="off"
                    type="password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* phone input */}
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-phone">
                    Phone
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter Your Phone"
                    autoComplete="off"
                    type="tel"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            
          </FieldGroup>
          <Button type="submit" className={`my-5 cursor-pointer p-4`}>Sign Up</Button>
    </form>
  );
}
