import * as z from "zod";
export const registerSchema = z.object({
    name: z.string().min(3, `Name is required`).max(20),
    email: z.string().min(1, `Email is required`).email(`Invalid email address`),
    password: z.string().min(8,
          `Has minimum 8 characters in length.
          Adjust it by modifying {8,}At least one uppercase English letter.
          You can remove this condition by removing (?=.*?[A-Z])At least one lowercase English letter.
          You can remove this condition by removing (?=.*?[a-z])At least one digit.
          You can remove this condition by removing (?=.*?[0-9])At least one special character,
          You can remove this condition by removing (?=.*?[#?!@$%^&*-])`)
          .max(30).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          `Has minimum 8 characters in length.
          Adjust it by modifying {8,}At least one uppercase English letter.
          You can remove this condition by removing (?=.*?[A-Z])At least one lowercase English letter.
          You can remove this condition by removing (?=.*?[a-z])At least one digit.
          You can remove this condition by removing (?=.*?[0-9])At least one special character,
          You can remove this condition by removing (?=.*?[#?!@$%^&*-])`),
    rePassword: z.string().min(1, `Please confirm your password`).min(8).max(30),
    phone: z.string().min(1, `Phone number is required`).min(11).max(11).regex(/^01[0125][0-9]{8}$/, `Invalid Egyptian phone number`),
}).refine((data) => data.password === data.rePassword, {
    error: `Passwords don't match`,
    path: [`rePassword`],
})
export type RegisterSchemaType = z.infer<typeof registerSchema>;