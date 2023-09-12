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
                    <th className="noMobile">ID</th>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th className="noMobile">Categoria</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <td className="noMobile">{item.id}</td>
                        <td className="forMobile">{item.name}</td>
                        <td className="forMobile">{item.quantity} unid.</td>
                        <td className="noMobile">{item.category}</td>
                        <td className="forMobile buttonsMobile">
                            <Link to={`/items/${item.id}`} className="button buttonTable is-small">
                            Visualizar
                            </Link>
                            <Link to={`/items/${item.id}/update`} className="button buttonTable is-green is-small">
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