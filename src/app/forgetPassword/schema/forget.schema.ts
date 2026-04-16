import * as z from 'zod';

export const forgetSchema = z.object({
    email: z.string().min(1, `Email is required`).email(`Invalid email address`),
});

export type ForgetSchema = z.infer<typeof forgetSchema>;
