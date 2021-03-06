# Armazenador de PDF
API para receber e armazenar PDFs

 #### TECNOLOGIAS UTILIZADAS
  - [NodeJS](https://nodejs.org/en/) para a aplicação

  - [JWT](https://jwt.io/) para a autenticação
       
  - [BucketS3](https://aws.amazon.com/pt/s3/) para armazenamento

 #### 🚧API FUNCIONAL, MAS PROPENSA A MELHORIAS🚧

## Clonando o repositório
$ git clone https://github.com/GabrielSalgado99/PDF_API.git


## Pré-Requisitos
Instalar algumas dependências que serão utilizadas pela API, acesse a pasta do projeto no terminal e execute os comandos a seguir

PS: A seguir será apresentada uma forma temporária de instalar as dependências, para instalar de forma definitiva basta adicionar --save no final de cada comando

```
Criação de uma pasta dentro da pasta do projeto(PDF_API) como nome uploads para os armazenar os arquivos

Criação de um arquivo .env que terá as informações do bucket onde será realizado o upload:
S3_BUCKET_NAME="nome-do-seu-bucket"
AWS_BUCKET_REGION="regiao-do-seu-bucket"
AWS_ACCESS_KEY_ID="sua-access-key"
AWS_SECRET_ACCESS_KEY="sua-secret-key"

Instalar o SDK da AWS:
$ npm install aws-sdk

Instalar o dotenv para as variaveis de ambiente:
$ npm install dotenv

Instalar o express para execução da aplicação:
$ npm install express

Instalar o multer para upload dos arquivos:
$ npm install multer

Instalar o JWT para autenticação:
$ npm install jsonwebtoken

Instalar o EJS:
$ npm install ejs

(Opcional) Instalar o nodemon para melhor controle da aplicação:
$ npm install nodemon

```
## Execução
  ### Inicialização do servidor
  ```
  Caso você tenha instalado o nodemon, abra a pasta do projeto no terminal(PDF_API) e insira o seguinte comando:
  
  $ npm run start
  
  Caso não tenha o nodemon, abra a pasta src do projeto no terminal e insira o seguinte comando:
  
  $ node server.js
  ```
  Após isso, você receberá uma confirmação de que o servidor está online, para utilizá-lo basta acessar através do localhost:8080
  
  ### Login
  Para utilizar a função de upload de arquivo, você primeiro precisará fazer um post request para o link abaixo passando o user e o password no body
  ```
  link 
  localhost:8080/auth/login
  
  Header
  Key: Content-type
  Value: application/json
  
  Dados
  user: "user"
  password: "0000"
  ```
  Feito corretamente, você receberá como resposta um token que utilizará para acessar o próximo passo
  
  PS: O token expira após 10 minutos
  
  ### Upload de Arquivos
  Para acessar o upload de arquivos, basta fazer um get request com as seguintes informações:
  ```
  link 
  localhost:8080/storage/uploadfile
  
  Params
  Key: x-access-token
  Value: token que você recebeu anteriormente
  ```
  Feito corretamente, você conseguirá acesso a página para upload de arquivos
  
  ### Encerrando Aplicação
  De volta no terminal, aperte as seguintes teclas
  ```
  CTRL+C no Windows ou Linux
  ou
  Command+C no macOS
  ```
