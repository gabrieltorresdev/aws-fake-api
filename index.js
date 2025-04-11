import express from "express"
import axios from "axios"

//JSON-SERVER START
import jsonServer from "json-server"
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use(router)
//JSON-SERVER END


const app = express()

app.use(express.json())

app.get("/livros-com-relacionamentos", async (req, res) => {
  try {
      const response = await axios.get('http://localhost:3000/livros?_expand=autor&_expand=editora');
      return res.json(response.data);
  } catch (error) {
      console.error("Erro na consulta:", error);
      return res.status(500).json({ error: "Erro ao consultar livros" });
  }
});

app.get("/emprestimos-usuarios", async (req, res) => {
  try {
      const response = await axios.get('http://localhost:3000/emprestimos?_expand=livro&_expand=usuario');
      return res.json(response.data);
  } catch (error) {
      console.error("Erro na consulta:", error);
      return res.status(500).json({ error: "Erro ao consultar empréstimos" });
  }
});

server.listen(3000, () => {
    console.log('JSON Server is running! Port 3000')
  })

app.listen(8800, ()=>{
    console.log("Express is running!!! Port 8800")
    console.log("Backend complete, is running...")
});