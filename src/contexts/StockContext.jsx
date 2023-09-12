import { createContext, useState } from "react";
import PropTypes, { string } from "prop-types";

//Contexto personalizado criado para compartilhar dados e estados entre componentes. Criado com objeto vazio
export const StockContext = createContext({})


//validador que permite que qualquer elemento React seja passado como filho para o StockContextProvider. Nesse caso estou dizendo que StockContextProvider irá receber uma propriedade chamada children
StockContextProvider.propTypes = {
    children: PropTypes.node
}


//Estrutura de items dentro do localStorage: {name, description, quantity, price, category, createdAt, updatedAt}


export function StockContextProvider ({ children }) {

    //useState definido como uma função, que tem como objetivo sempre buscar, dentro do localStorage, se já tem valores definidos dentro de "abc-react-stock"
    const [items, setItems] = useState (() => {

        const storedItems = localStorage.getItem('abc-react-stock')

        //Caso não tenha nada dentro de "abc-react-stock", retornar o estado de items como vazio
        if(!storedItems) return []

        //Caso tenha dados dentro do localStoraged ("abc-react-stock"), retorna-los
        //JSON.parse é responsável por converter os dados do localStoraged, que estão como strings, para objetos JS
        const items = JSON.parse(storedItems)

        //Inserir data de armazenamento de cada item (forEach responsavel por converter a data que está em formato string, em um objeto de data JS (data de criaçao e de atualizaçao))
        items.forEach((item) => {
            item.createdAt = new Date(item.createdAt)
            item.updatedAt = new Date(item.updatedAt)
        })
        return items

    })
    

    //Funçao responsavel por adicionar novos items ao estado atual e ao localStoraged
    const addItem = (item) => {

        //O estado atual de Items recebe o novo item + os itens ja armazenados anteriormente
        setItems(currentState => {
            const updatedItems = [item, ...currentState]

            //Armazena no localStoraged os novos itens adicionados e transforma os mesmos em string, pois o localStorage só recebe string.
            localStorage.setItem('abc-react-stock', JSON.stringify(updatedItems))

            //Retorna o novo valor de updateItems
            return updatedItems

        })
    }


    const getItem = (itemId) => {
        //Busca dentro de items o item com ID solicitado no parametro
        return items.find (item => item.id === +itemId)
    }


    //Busca o index do array e atualiza suas propriedades e data de atualizaçao
    //Primeiro busquei o index do item utilizado como parametro (itemId). Depois usei este index para buscar o item dentro do array de produtos e passei novos atributos pra ele, que foram passados no parametro "newAttributes". Além de também atualizar a data de atualizaçãoe atualizar o localStorage.
    const updateItem = (itemId, newAttributes) => {
        setItems(currentState => {
            const itemIndex = currentState.findIndex(item => item.id === +itemId)
            const updatedItems = [...currentState]
            Object.assign(updatedItems[itemIndex], newAttributes, { updatedAt: new Date() })
            localStorage.setItem('abc-react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }


    const deleteItem = (itemId) => {
        setItems(currentState => {

            //Dentro de currentState, filtrei todos os item.id que são diferentes do itemId passado como parametro e retorna todo o array, menos o item que tem ID igual ao do parametro.
            const updatedItems = currentState.filter(item => item.id !== itemId)
            localStorage.setItem('abc-react-stock', JSON.stringify(updatedItems))
            return updatedItems

        })
    }


    const stock = {
        items,
        addItem,
        getItem,
        updateItem,
        deleteItem
    }


    return(

        //Provider permite que os componentes filhos(children) acessem o contexto do StockContext. No caso o component filho serão as rotas do projeto que se encontra dentro de app.jsx
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>

    )

}