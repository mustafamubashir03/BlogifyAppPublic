import { updateUserInfoSchema } from "@itz____mmm/blog-common"
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { getPrisma } from ".";

export const user = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        SECRET: string;
      };
      Variables: {
        userId: string;
      };
  }>()

user.use("/", async (c, next) => {
  const jwt = c.req.header().authorization.split(" ")[1];
  const secretKey = c.env.SECRET;
  try {
    const verified = await verify(jwt, secretKey);
    if (!verified) {
      c.status(403);
      return c.json({ er: "User not authenticated" });
    }
    c.set("userId", verified.id as string);
    await next();
  } catch (error) {
    c.status(403);
    return c.json({ message: "Not authorized to the directed end-point" });
  }
});


user.put("/",async(c)=>{
    const newData = await c.req.json()
    const {success} = updateUserInfoSchema.safeParse(newData)
    if(!success){
      c.status(403)
      return c.json({message:"Invalid input format"})
    }
    const prisma = getPrisma(c.env.DATABASE_URL)
    const update = await prisma.user.update({
      where:{
        id: c.get("userId")
      },
      data:newData
    })
    return c.json(update)
  })

user.get("/",async(c)=>{

    const prisma = getPrisma(c.env.DATABASE_URL)
    const userFound = await prisma.user.findUnique({
        where:{
            id: c.get("userId")
        }
    })
    return c.json(userFound)
})