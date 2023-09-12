import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
    return(
        <>
        <header>
            <Link to="/" className="Logo">GOULART STOCK</Link>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/items">Items</Link>
            </nav>
        </header>

        {/*Responsável por renderizar as childrens de RootLayout = Home e ItemsLayout*/}
        <div className="divRootLayout">
            <Outlet/>
        </div>

        <br />
        <hr />

        <footer className="footer-text">
            Criado com React Router - Pedro Goulart
        </footer>
        </>
    )
}