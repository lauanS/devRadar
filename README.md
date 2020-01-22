
# devRadar
Repositório do projeto desenvolvido durante a 10º semana OmniStack

Uma aplicação para ajudar a encontrar desenvolvedores perto de você que trabalham com determinada tecnologia.

### Aplicação Web

Através da aplicação web é possível cadastrar desenvolvedores, utilizando o nome de usuário do Github, suas tecnologias e a localização (latitude e longitude).

### Aplicação Mobile

Pelo aplicativo o usuário consegue localizar os desenvolvedores próximos, filtrando por suas tecnologias.

## Getting started

É necessário ter o [node](https://nodejs.org/en/) instalado na sua máquina.

Baixe o repositório e abra a pasta dele no terminal

### Backend

Para instalar as dependências do backend, execute: 

``` bash
 cd caminho-para-o-repositório/devRadar/backend
 npm install # ou yarn install
``` 

Também será necessário configurar um cluster no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) e colocar a sua string de conexão no arquivo `backend/src/utils/connectionString.js`.

Para iniciar o servidor execute:

```bash
npm dev # ou yarn dev
```


### Aplicação Web

``` bash
 cd caminho-para-o-repositório/devRadar/web
 npm install # ou yarn install
``` 

### Aplicação Mobile

``` bash
 cd caminho-para-o-repositório/devRadar/mobile
 npm install # ou yarn install
``` 

A parte mobile do projeto foi desenvolvida utilizando a ferramenta [Expo](https://expo.io/), que ajuda no desenvolvimento da aplicação, fornecendo fácil acesso às APIs nativas do celular sem precisar instalar outras dependências

Para instalar Expo execute:
``` bash
npm install expo-cli --global
``` 
ou pelo yarn:
``` bash
yarn global add install expo-cli
``` 

Para visualizar o projeto no seu celular coloque o IP do seu servidor backend no arquivo `src/services/api.js`, depois execute:

``` bash
npm start # ou yarn start
``` 


e escaneie o QR code que irá aparecer com o aplicativo Expo (disponível na playstore para Android e na appStore iOS).


