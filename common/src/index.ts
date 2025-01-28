import z from "zod"

export const signUpSchema = z.object({
    name:z.string().optional(),
    email:z.string().email(),
    password:z.string().min(3)
})

export const signInSchema = z.object({
    email:z.string().email(),
    password:z.string().min(3)
})

export const updateUserInfoSchema = z.object({
    email:z.string().optional(),
    name:z.string().optional(),
    password:z.string().min(3).optional()
})

export const blogPostSchema = z.object({
    title:z.string(),
    content:z.string(),
})
export const blogUpdateSchema = z.object({
    title:z.string().optional(),
    content:z.string().optional(),
})

export type SignUpType = z.infer<typeof signUpSchema>
export type SignInType = z.infer<typeof signInSchema>
export type BlogPostType = z.infer<typeof blogPostSchema>
export type BlogUpdateType = z.infer<typeof blogUpdateSchema>
export type updateUserInfoType = z.infer<typeof updateUserInfoSchema>