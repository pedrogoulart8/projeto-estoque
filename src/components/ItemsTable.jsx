//Component responsável por organizar itens cadastrados em uma tabela

import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";


export default function ItemsTable() {

    //useStock é um hook que foi criado para acessar o contexto que foi criado dentro de StockContext {useContext}. Neste caso ele está buscando, dentro deste contexto, o state "items", onde ficam os dados do estoque.

    //buscando a propriedade "items" dentro do objeto e inserindo o mesmo nome para uma variavel dentro desse escopo
    const { items } = useStock();

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity} unid.</td>
                        <td>{item.category}</td>
                        <td>
                            <Link to={`/items/${item.id}`} className="button is-small">
                            Visualizar
                            </Link>
                            <Link to={`/items/${item.id}/update`} className="button is-green is-small">
                                Atualizar
                            </Link>
                            <DeleteButton itemName={item.name} itemId={item.id}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}