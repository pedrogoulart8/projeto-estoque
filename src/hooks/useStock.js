import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

//Função com objetivo de acessar o contexto de StockContext
export default function useStock() {
  return useContext(StockContext)
}