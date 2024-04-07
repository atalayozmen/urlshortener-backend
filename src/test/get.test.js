const request = require("supertest");
const app = require("../app");
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

beforeAll(async () => {
  // create urls in the database
  console.log('prisma', prisma) 
  await prisma.url.createMany({
    data: [{ url: 'testurl.com' }, { url: 'testurl2.com' }],
  })

  console.log('✨ 2 urls successfully created!')
})

describe("Test the root path", () => {
  test("Get urls path is working", async () => {
    const response = await request(app).get("/urls");
    console.log(response.body)
    expect(response.statusCode).toBe(200);
  });
});

afterAll(async () => {
  await prisma.url.deleteMany()
  await prisma.$disconnect()
})
