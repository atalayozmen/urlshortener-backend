import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
const port = 3000

app.get('/urls', async (req, res) => {
	console.log(req.query.url)
  const urls = await prisma.url.findMany()
  res.json(urls)
})

app.get('/url/', async (req, res) => {
  const { url } = req.query

  const profile = await prisma.url.create({
    data: {
     url: url as string
  }
  })

  res.json(profile)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
