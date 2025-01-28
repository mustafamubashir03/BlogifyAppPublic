import { Hono } from 'hono'
import { verify } from 'hono/jwt';
import { getPrisma } from '.';
import { blogPostSchema, blogUpdateSchema } from '@itz____mmm/blog-common';

export const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    SECRET:string,
  },
  Variables:{
    userId:string
  }
}>()


blog.use("/",async (c, next) =>{
    const jwt = c.req.header().authorization.split(" ")[1];
    const secretKey = c.env.SECRET
    try{
      const verified = await verify(jwt,secretKey)
      if(!verified){
        c.status(403)
        return c.json({er:"User not authenticated"})
      }
      c.set("userId", verified.id as string)
      await next()
    }catch(error){
      c.status(403)
      return c.json({message:"Not authorized to the directed end-point"})
    }
})
blog.post('/', async(c) => {
  const prisma = getPrisma(c.env.DATABASE_URL)
  const userId = c.get("userId")
  const blogData = await c.req.json()
  try{
    const {success} = blogPostSchema.safeParse(blogData)
    if(!success){
      c.status(411)
      return c.json({message:"Invalid input format"})
    }
    const newBlog = await prisma.post.create({
      data:{
        title: blogData.title,
        content:blogData.content,
        authorId: userId
      }
    })
    return c.json({newBlog})
  }catch(error){
    c.status(403)
    return c.json({message:"Couldn't create"})
  }
})
blog.put('/:id', async(c) =>{
  const prisma = getPrisma(c.env.DATABASE_URL)
  const userId = c.get("userId")
  const blogId = c.req.param("id")
  const blogData = await c.req.json()
  try{
    const {success} = blogUpdateSchema.safeParse(blogData)
    if(!success){
      c.status(411)
      return c.json({message:"Invalid input format"})
    }
    const updateBlog = await prisma.post.update({
      where:{
        authorId:userId,
        id:blogId
      },
      data:{
        title: blogData.title,
        content:blogData.content,
      }
    })
    return c.json({updateBlog})
  }catch(error){
    c.status(403)
    return c.json({message:"Couldn't update"})
  }
})
blog.get('/bulk', async(c) => {
  const prisma = getPrisma(c.env.DATABASE_URL)
  const limit = Number(c.req.query("limit"))
  try{
    const getBlogs = await prisma.post.findMany({
      take:limit,
      select:{
        title:true,
        content:true,
        id:true,
        author:{
          select:{
            name:true
          }
        }
      }
    })
    return c.json({getBlogs})
  }catch(error){
    c.status(403)
    return c.json({message:"Couldn't get Blogs"})
  }
})
blog.get('/:id', async(c) => {
  const prisma = getPrisma(c.env.DATABASE_URL)
  const blogId = c.req.param("id")
  try{
    const getBlog = await prisma.post.findUnique({
      where:{
        id:blogId
      },
      select:{
        id:true,
        title:true,
        content:true,
        author:{
          select:{
            name:true
          }
        }
      }
    })
    return c.json({getBlog})
  }catch(error){
    c.status(403)
    return c.json({message:"Couldn't get Blog"})
  }
})




