const jwt = require('jsonwebtoken')
const secret = 'capitalmind_secret_23990938'
const token = jwt.sign({ guest: true }, secret)
console.log(token)
