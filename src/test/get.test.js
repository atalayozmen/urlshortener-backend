const request = require("supertest");
const app = require("../app");
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB


beforeAll(async () => {
  // create product categories
  console.log('prisma', prisma) 
  await prisma.url.createMany({
    data: [{ url: 'testurl.com' }, { url: 'testurl2.com' }],
  })

  console.log('✨ 2 urls successfully created!')
})

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/urls");
    console.log(response.body)
    expect(response.statusCode).toBe(200);
  });
});

afterAll(async () => {
  await prisma.url.deleteMany()
  await prisma.$disconnect()
})
