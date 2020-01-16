Métodos HTTP: GET, POST, PUT, DELETE

Tipos de parâmetros:

Query Params: request.query (Filtros, ordenação, paginação, .. )
     console.log(request.query)
     app.get('/users', (request, response)) 
     http://localhost:3333/users?serach=Diego

Route Params: request.params (Identificar um recurso na alteração ou remoção)
     console.log(request.params)
     app.delete('/users/:id', (request, response)) 
     http://localhost:3333/users/id

Body: request.body (Dados para alteração ou criação de um registro)
     console.log(request.body)
     app.post('/users', (request, response)) 
     http://localhost:3333/users/


Ao usar crase no lugar de aspas no js, eu consigo adicionar váriaveis utilizando o conceito de templates literal

> axios.get(`https://api.github.com,/users/${github_username}`)

Normalmente um controller tem 5 funções

- index   - mostrar um lista de registro
- show    - mostrar um único registro
- store   - salvar algum registro
- update  - Atualizar
- destroy - deletar