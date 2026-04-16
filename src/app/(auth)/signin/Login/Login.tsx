"use client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "../schema/schema.login";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const { reset, control, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: ``,
      password: ``,
    },
  });

  const router = useRouter();

  async function handleLogin(data: LoginSchemaType) {
    try {
      const isLoginSuccessful = await signIn(`credentials`, {
        redirect: false,
        ...data,
      });

      if (isLoginSuccessful?.ok) {
        toast.success(`Logged in successfully!`, {
          position: "top-center",
          style: { backgroundColor: "#16A34A", color: "#fff" },
        });
        router.push(`/`);
        reset();
      } else {
        toast.error(isLoginSuccessful?.error || `Failed to log in`, {
          position: "top-center",
          style: { backgroundColor: "#DC2626", color: "#fff" }
        });
      }
    } catch (error: any) {
      toast.error(`An error occurred while trying to log in`, {
        position: `top-center`,
      });
    }
  }

  return (
    <form className="w-1/3 mx-auto my-10" onSubmit={handleSubmit(handleLogin)}>
      <FieldGroup>
        {/* email input */}
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-email">Email</FieldLabel>
              <Input
                {...field}
                id="form-rhf-demo-email"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your Email"
                autoComplete="off"
                type="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        {/* password input */}
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-password">Password</FieldLabel>
              <Input
                {...field}
                id="form-rhf-demo-password"
                aria-invalid={fieldState.invalid}
                placeholder="Enter Your Password"
                autoComplete="off"
                type="password"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button type="submit" className={`my-5 cursor-pointer p-4 text-green-500`}>
        Sign In
      </Button>
      <Button type="submit" className={`my-5 cursor-pointer p-4 text-yellow-300`}>
        <Link href={"/signup"}>
        Sign up
      </Link>
      </Button>
      <Button type="submit" className={`my-5 cursor-pointer p-4 text-red-500`}>
        <Link href={"/forgetPassword"} >
        Forget Password
      </Link>
      </Button>
      
      
    </form>
  );
}
