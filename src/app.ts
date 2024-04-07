import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
import { sha256 } from 'js-sha256'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

//Return the original url from the shortened url
app.get('/:hash', async (req, res) => {
  const { hash } = req.params
  const url = await prisma.url.findFirst({
    where: {
      shortenedUrl: `${process.env.BACKEND_URL}/${hash}`
    }
  })

  if (url)
    res.json(url.url)
  else
    res.status(404).send('Not found')
}
)

//Return all urls
app.get('/urls', async (req, res) => {
  const urls = await prisma.url.findMany()
  res.json(urls)
})

//shorten the url
app.post('/shortenUrl', async (req, res) => {
  const { url } = req.body
  console.log(url)
  const shortenedUrl = `${process.env.BACKEND_URL}/` + sha256(url).substring(0, 6)
  console.log(shortenedUrl)
  const response = await prisma.url.create({
    data: {
     url: url as string,
     shortenedUrl: shortenedUrl as string
  }
  })

  res.json(response.shortenedUrl)
})

module.exports = app;


