import * as z from 'zod'

export const UpdateUserDataSchema = z.object({
    name: z.string().min(3, `Name is required`).max(20),
    email: z.string().min(1, `Email is required`).email(`Invalid email address`),
    phone: z.string().min(1, `Phone number is required`).min(11).max(11).regex(/^01[0125][0-9]{8}$/, `Invalid Egyptian phone number`),
})
export type UpdateUserDataSchemaType = z.infer<typeof UpdateUserDataSchema>;
