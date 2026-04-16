import * as z from 'zod';

export const resetSchema = z.object({
    newPassword: z.string().min(8,
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
                  confirmPassword: z.string().min(1, `Please confirm your password`).min(8).max(30),
}).refine((data) => data.newPassword === data.confirmPassword, {
    error: `Passwords don't match`,
    path: [`confirmPassword`],
})

export type ResetSchemaType = z.infer<typeof resetSchema>;
