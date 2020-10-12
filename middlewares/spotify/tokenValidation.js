const { getToken } = require('../../services/accessToken.service'),
    { refreshToken } = require('../../_api/axios')

let expiresDate = 0

const tokenValidation = async (req, res, next) => {
    await createToken(next)
}

const createToken = async (next = undefined) => {
    if ((Date.now() < expiresDate) && (accessToken !== '')) return next()
    accessToken = `Bearer ${await getToken()}`
    const currentDate = new Date()
    expiresDate = currentDate.setMinutes(currentDate.getMinutes() + 59)
    refreshToken(accessToken)
    if(next !== undefined) next()
}
exports.tokenValidation = tokenValidation
exports.createToken = createToken