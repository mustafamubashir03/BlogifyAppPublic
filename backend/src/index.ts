import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { blog } from "./blog";
import { auth } from "./auth";
import { cors } from "hono/cors";
import { user } from "./user";

export const getPrisma = (database_url: string) => {
  const prisma = new PrismaClient({
    datasourceUrl: database_url,
  }).$extends(withAccelerate());
  return prisma;
};

const main = new Hono().basePath("/api/v1");

main.use("/*", cors());
main.get("/", (c) => {
  return c.text("Hello Hono!");
});

main.route("/auth", auth);
main.route("/blog", blog);
main.route("/user", user);

export default main;
