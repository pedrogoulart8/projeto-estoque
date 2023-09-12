import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import ListItems from "./pages/items/ListItems";
import CreateItem from "./pages/items/CreateItem";
import ShowItem from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";
import ItemsLayout from "./pages/items/Layout";




//Configurando as rotas do aplicativo:
const router = createBrowserRouter ([{

    //Rota raiz:
    path: "/",
    element: <RootLayout/>,
    //Rotas secundarias:
    children: [
        //Faz parte do index? sim, ou seja irá renderizar Home na mesma rota que RootLayout 
        //"/"
        {index: true, element: <Home />},
        {
            //Quando a url muda para /items será renderizado ItemsLayout, lembrando que /items está configurado como Link dentro do component RootLayout
            path: "items",
            element: <ItemsLayout />,
            children: [
                //ListItem será renderizado na raiz de ItemsLayout"
                //rotas direcionadas por Links dentro de ItemsLayout
                {index: true, element: <ListItems />},
                {path: "new", element: <CreateItem />},
                {path: ":id", element: <ShowItem />},
                {path: ":id/update", element: <UpdateItem />},
            ]
        }
    ]
}])

export default router