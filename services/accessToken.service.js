const { authorizationFetch } = require('../_api/axios'),
    url = require('url')

module.exports = {
    async getToken() {
        try {
            const params = new url.URLSearchParams({ grant_type: 'client_credentials' })
            const { data } = await authorizationFetch.post('/', params)
            return data.access_token
        } catch (err) {
            console.log(err);
        }
    }
}