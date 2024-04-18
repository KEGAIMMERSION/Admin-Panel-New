const { headers } = require("next/headers")


const allowedCors = [
    'https://practicum.yandex.ru',
    'https://students-projects.ru',
    'localhost:3000'
]




function cors(req, res, next){
    const { origin } = req.headers
    if(allowedCors.includes(origin)){
        res.headers('Access-Control-Allow-Origin', '*')
    }
    next()
}

module.exports = cors