// Express
import express from 'express'

const appUrl = process.env.APP_URL
const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  const response = {
    message: 'Hello from the server!!!'
  }
  return res.status(200).json(response)
})

app.listen(port, () => {
  console.log(`Server is up on port ${appUrl}:${port}`)
})
