import { Link, Outlet, useLocation } from "react-router-dom"

export default function ItemsLayout() {

    const { pathname } = useLocation()

    return(

        <main>
            <h1 className="home-h1">Itens em estoque</h1>

            <div>

            {/*Link para o component ListItem*/}
            <Link 
            to="/items" className={`tab ${pathname === "/items" ? "active" : ""}`}>Todos os itens
            </Link>

            {/*Link para o component CreateItem*/}
            <Link 
            to="/items/new" className={`tab ${pathname === "/items/new" ? "active" : ""}`}>Novo item
            </Link>

            </div>

            {/*Responsável por renderizar as childrens de ItemsLayout*/}
            <Outlet />

        </main>

    )
}