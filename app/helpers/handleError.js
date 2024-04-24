const httpError = (res, err) => {
  console.log(err)
  res.status(500)
  console.log('Hay un error')
}
module.exports = { httpError }
