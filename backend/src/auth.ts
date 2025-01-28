import { Hono } from 'hono'
import { getPrisma } from '.';
import { sign } from 'hono/jwt'
import {signInSchema,signUpSchema, updateUserInfoSchema} from "@itz____mmm/blog-common"
export const auth = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    SECRET:string
  }
}>()


auth.post('/signup', async(c) => {
  const prisma = getPrisma(c.env.DATABASE_URL)
  const secret = c.env.SECRET
  const userSignupData = await c.req.json();
  try{
    const {success} = signUpSchema.safeParse(userSignupData)
    if(!success){
      c.status(411)
      return c.json({message:"Invalid input format"})
    }
    const signedUser = await prisma.user.create({
      data:{
        name:userSignupData.name,
        email:userSignupData.email,
        password:userSignupData.password
      }
    }   
    )
    const payload = {
      id:signedUser.id,
      exp: Math.floor(Date.now() / 1000) + 60 * 10, // Token expires in 5 minutes
    }
    const token = await sign(payload, secret )
    return c.json({jwt:token})
  }catch(err){
    c.status(403)
    return c.json({message:"Not authorized"})
  }
})

auth.post('/signin', async(c) => {
  const prisma = getPrisma(c.env.DATABASE_URL)
  const secret = c.env.SECRET
  const userSigninData = await c.req.json();
  try{
    const {success} = signInSchema.safeParse(userSigninData)
    if(!success){
      c.status(411)
      return c.json({message:"Invalid input format"})
    }
    const signinUser = await prisma.user.findUnique({
      where:{
        email:userSigninData.email,
        password:userSigninData.password
      }
    })
  if(!signinUser){
    return 
  }
  const payload = {
    id:signinUser.id,
    // exp: Math.floor(Date.now() / 1000) + 60 * 10, // Token expires in 5 minutes
  }
  const token = await sign(payload, secret )
    return c.json({jwt:token})
  }catch(err){
    c.status(403)
    return c.json({message:"Not authorized"})
  }
})



