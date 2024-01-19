import { useRoutes } from "react-router-dom";
import { Home, Contact, Recipes } from "../components/"

const Router:React.FC = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home />
    }, 
    {
        path: "/ricettario",
        element: <Recipes/>
    },
    {
        path: "/contattaci",
        element: <Contact/>
    },
    {
        path: "*",
        element: <h1>ERRORE ROUTE NON IMPOSTATA -  DA CREARE 404!</h1>,
      },
  ])
}

export default Router