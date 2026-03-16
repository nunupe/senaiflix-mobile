# API Escola - Node.Js + Express
API REST simples para gerenciar alunos e professores
 
## Pré-Requisitos
- Node.js instalado
 
## Como rodar
```bash
npm i 
```
 
### Iniciar o servidor
```bash
node index.js
```
 
### Acessar
Abra o navegador em: `http://localhost:3000`
 
## Endpoints
 
### Alunos
 
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/alunos` |Lista todos os alunos |
| GET | `/alunos/:id` | Buscar um aluno específico |
| POST | `/alunos/` | Cria um novo aluno |
| POST | `/alunos/:id` | Atualiza um aluno |
| DELETE | `/alunos/:id` |Remove um aluno |
 
### Professores
| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/professores` |Lista todos os professores |
| GET | `/professores/:id` | Buscar um professor específico |
| POST | `/professores/` | Cria um novo professor |
| POST | `/alunos/:id` | Atualiza um professor |
| DELETE | `/alunos/:id` |Remove um professor |
 
## Tecnologias
- Node.js
- Express
 
  ## Notas
  - Os dados são armazenados em memória (reiniciar o servidor apaga tudo)
