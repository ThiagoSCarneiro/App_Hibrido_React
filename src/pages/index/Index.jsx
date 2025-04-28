import Movie from "../../components/Movie/movie";
import { useState, useEffect } from "react";
import AppBar from "../../components/appBar/appBar"
import styles from "./index.module.css"

export default function Index() {
    const [produtos, setProdutos] = useState([])

    async function getProdutoData() {
      const response = await fetch("http://localhost:3001/produtos")
      const data = await response.json()
      setProdutos(data)
    }

  

  useEffect(() => getProdutoData, [])

  return (
    <>
    <AppBar></AppBar>
      <div >
        {produtos.map(produtos => {
          return(
            <div key={produtos.id}>
              <h2>{produtos.nome}</h2>
              <p>{produtos.descricao}</p>
              <span>{produtos.preco}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}
