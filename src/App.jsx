import { RouterProvider } from "react-router-dom"
import router from "./router"
import { StockContextProvider } from "./contexts/StockContext"

export default function App() {
  return (

    //Todo contexto criado dentro de StockContext já está interligado com o App
    <StockContextProvider>
      {/*fornece um contexto de roteamento para os componentes*/}
      <RouterProvider router={router} />
    </StockContextProvider>


  )
}
