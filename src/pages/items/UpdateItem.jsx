import ItemForm from "../../components/ItemForm";
import { useParams } from "react-router-dom"
import useStock from "../../hooks/useStock"

export default function UpdateItem() {

    const { getItem } = useStock()

    //Devolve os parametros da URL. "id" que foi mencionado como rota no router de ShowItem
    const { id } = useParams()

    //"getItem" que foi buscado do contexto de StockContext e "id" do item que está na URL
    const item = getItem(id)

    //Retornei ItemForm para esta tela, porém, com os campos do item já preenchidos e prontos para serem atualizados. 

    // Utilizei a props itemToUpdate usando "item" como parametro
    
    //const item =  busquei o item em "getItem" e inseri dentro do parametro dele o ID do navegador.

    return(

        <>
        <h1>Atualizar os itens</h1>
        <ItemForm itemToUpdate={item}/>
        </>
        

    )
}