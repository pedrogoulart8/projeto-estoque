//Formulário para cadastro de itens

import { useRef, useState } from "react"
import PropTypes from "prop-types"
import StockItem, { CATEGORIES } from "../entities/StockItem"
import useStock from "../hooks/useStock"
import { useNavigate } from "react-router-dom"

//Validador que indica que a propriedade itemToUpdate deve se transformar em um objeto JavaScript.
ItemForm.propTypes = {
    itemToUpdate: PropTypes.object
}


export default function ItemForm({ itemToUpdate }) {

    const defaultItem = {
        name: "",
        description: "",
        quantity: 0,
        price: 0,
        category: ""
    }

    const navigate = useNavigate()

    //valor inicial de "item" passa por uma verificação: 
    //Caso exista "itemToUpdate", valor deve ser este, ou seja, caso você esteja atualizando um item e usando o "itemToUpdate" como propriedade. 
    //Porém, caso nao, o valor inicial deve corresponder ao "defaultItem" que é um formulário em branco.
    const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)

    //Chamando o hook useStock e obtendo dele as funções "addItem" e "updateItem" que estão dentro do contexto de StockContext.
    const { addItem } = useStock()
    const { updateItem } = useStock()

    // Utilizei useRef para acessar o DOM e inserir "focus" no input após o usuario adicionar um item
    const inputRef = useRef(null)

    //Função responsável por atualizar o estado atual de "item". Quando um valor do input for alterado, a funçao handleChange é acionada.
    //EX: O name do input de quantidade é "quantity", portanto o "quantity" do "defaultItem" recebe o value digitado pelo usuario.
    const handleChange = (ev) => {
        setItem(currentState => {
            return {
                ...currentState,
                [ev.target.name]: ev.target.value
            }
        })
    }


    //Função responsável por, após usuario enviar dados pelo submit, e inserir valor em setItem, adicionar e organizar esses valores dentro de uma classe (StockItem). 
    //Depois adicionar esta classe já organizada, com data, id, etc, dentro da função addItem. A função addItem é responável por alterar o state de items dentro de StockContext.
    const handleSubmit = (ev) => {
        ev.preventDefault()

        try {

            //Se for atualizar o item..
            if(itemToUpdate){

                //parametros: id do item que está sendo atualizado e objeto item, que terá suas propriedades sendo modificadas pelo usuario.
                updateItem(itemToUpdate.id, item)
                alert("Item atualizado!")
                navigate("/items")

            }else{
                const validItem = new StockItem(item)
                addItem(validItem)
                setItem(defaultItem)
                alert("Item Cadastrado com sucesso!")
                inputRef.current.focus()
            }
            
        } catch (err) {
            console.log("err.message")   
        }

    }
    

    //Formulário para inserir itens no estoque
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        ref={inputRef}
                        value={item.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="quantity">Quantidade</label>
                    <input
                        type="number"
                        name="quantity"
                        id="quantity"
                        required
                        min={0}
                        step={1}
                        value={item.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="price">Preço</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        required
                        min={0.00}
                        step={0.01}
                        value={item.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="category">Categoria</label>
                    <select
                        name="category"
                        id="category"
                        required
                        value={item.category}
                        onChange={handleChange}
                    >
                        <option disabled value="">Selecione uma categoria...</option>
                        {CATEGORIES.map((category) => (
                            <option
                                key={category}
                                value={category}
                                defaultChecked={item.category === category}
                            >
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="description">Descrição</label>
                <textarea
                    name="description"
                    id="description"
                    required
                    rows={6}
                    value={item.description}
                    onChange={handleChange}
                ></textarea>
            </div>
            <button className="button is-primary is-large">
                Salvar
            </button>
        </form>
    )
}



