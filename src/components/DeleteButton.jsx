//Função responsável por deletar itens cadastrados

import PropTypes from "prop-types"
import useStock from "../hooks/useStock"
import { useNavigate } from "react-router-dom"

DeleteButton.propTypes = {
    itemName: PropTypes.string,
    itemId: PropTypes.number
}

//Props criadas para poderem ser usadas como children dentro da tabela de ItemsTable
export default function DeleteButton ({ itemName, itemId }) {

    const { deleteItem } = useStock()

    //Função responsável por navegar para outra tela. Usarei para voltar a tabela de items, para, caso este item esteja sendo deletado na propria pagina do item, a pagina com :id não fique com erro após id deletado
    const navigate = useNavigate()
   
    const handleDelete = () => {

        if (confirm(`Tem certeza que deseja escluir ${itemName}?`)){
            deleteItem(itemId)
            navigate("/items")
        }
    }

    return(
        <button className="button is-danger is-small" onClick={handleDelete}> Excluir</button>   
    )

}