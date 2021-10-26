//Framework express para o servidor
const express = require(`express`);

const app = express();
app.set(`view engine`, `ejs`);
app.set("views", "./src/views");
app.use(express.json());

app.use("/", require("./routes/index"));
//require("./routes/index")(app);

//Subindo o servidor
app.listen(8080, () => {
  console.log(`Servidor Online !!`);
});

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
