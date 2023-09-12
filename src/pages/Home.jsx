import { Link } from "react-router-dom"
import useStock from "../hooks/useStock"

export default function Home() {
    const { items } = useStock()

    //Total de itens diversificados no estoque
    const diversity = items.length
    //Total geral da quantidade de itens somados
    const inventoryTotal = items.reduce((sum, item) => +sum + +item.quantity, 0)

    //Itens adicionados nos ultimos 10 dias e quantidade de itens adicionados nos ultimos 10 dias
    const today = new Date()
    const limitDate = new Date()
    limitDate.setDate(limitDate.getDate() - 10)
    const recentItems = items.filter((item) => item.createdAt >= limitDate && item.createdAt <= today)
    const recentTotal = recentItems.length

    //Filtro de itens com menos de 10 peças em estoque e quantidade de itens nessa situação
    const lowQuantityItems = items.filter((item) => item.quantity < 10)
    const lowQuantityTotal = lowQuantityItems.length

    return (
        <main>
            <h1 className="home-h1">Visão Geral do Estoque</h1>
            <div className="row">
                <div className="dashboard-card">
                    Produtos
                    <span>{diversity}</span>
                </div>
                <div className="dashboard-card">
                    Unidades em estoque
                    <span>{inventoryTotal}</span>
                </div>
                <div className="dashboard-card">
                    Adicionados recentemente
                    <span>{recentTotal}</span>
                </div>
                <div className="dashboard-card warm">
                    Itens acabando
                    <span>{lowQuantityTotal}</span>
                </div>
            </div>
            <div className="row">
                <div className="recent">
                    <table>
                        <thead>
                            <tr><th>Itens Recentes</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td><Link to={`/items/${item.id}`} className="button is-primary  is-small">Visualizar</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="low">
                    <table>
                        <thead>
                            <tr>
                                <th>Itens acabando</th>
                                <th>Qtd.</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lowQuantityItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td><Link to={`/items/${item.id}`} className="button is-primary is-small">Visualizar</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}