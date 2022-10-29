const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.APP_PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})