//Framework express para o servidor
const express = require(`express`)
//JWT para autentição
const jwt = require(`jsonwebtoken`)
const bodyParser = require(`body-parser`)
const SECRET = `mysecret`
//Multer middleware para upload de arquivos
const multer = require(`multer`)
//Modulo para pegar extensao do arquivo
const path = require(`path`)

const app = express()
app.set(`view engine`, `ejs`)
app.use(bodyParser.json())

//Página de login que libera o token
app.post(`/login`, (req,res) => {
    if (req.body.user === `user` && req.body.password === `0000`) {
        const token = jwt.sign({usedID: 1}, SECRET, {expiresIn: 600})
        return res.json({Authentication: true, token})
    }
    res.status(401).end()
})

//Função de verificação do token
function verifyToken(req, res, next) {
    const token = req.query[`x-access-token`]
    jwt.verify(token, SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).end()
        }
        req.userID = decoded.userID
        next()
    })
}

//Configurando armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, `uploads/`)
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname + `(${Date.now()})` + path.extname(file.originalname))
    }
})
const upload = multer({storage})

//Página de upload de arquivos
app.get(`/uploadfile`, verifyToken,(req, res) => {
    res.render(`uploadFile`)
})

//Método para fazer o upload
app.post(`/uploads`, upload.single(`file`) , (req, res) => {
    res.send(`Arquivo Recebido`)
})

//Subindo o servidor
app.listen(8080, () => {
    console.log(`Servidor Online !!`)
})

/* 
    Deixando aqui nesse comentário como seria a função de upload para bucket S3
    
    require(`dotenv`).config
    const fs = require(`fs`)
    const s3 = require(`aws-sdk`)

    const bucketName = process.env.AWS_BUCKET_NAME
    const bucketRegion = process.env.AWS_BUCKET_REGION
    const accessKey = process.env.AWS_ACCESS_KEY
    const secretKey = process.env.AWS_SECRET_KEY
    const bucket = new s3({
        bucketRegion,
        accessKey,
        secretKey
    })

    function uploadBucket(file){
        const fileStream = fs.createdReadStream(file.path)

        const params = {
            Bucket: bucketName,
            Body: fileStream,
            Key: file.filename
        }

        return bucket.upload(params).promise()
    }
 */