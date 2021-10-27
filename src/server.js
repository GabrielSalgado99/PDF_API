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
