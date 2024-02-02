import { useRoutes } from "react-router-dom";
import { Home, Ingredients, Recipes, Details, Planner, Contact, About, Breakfast, Dinner, Lunch } from "../components/"



const Router:React.FC = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home />
    }, 
    {
      path: "ingredienti",
      element: <Ingredients/>
    },
    {
      path: "ricettario",
      element: <Recipes/>
    },
    {
      path: "/ricettario/dettaglio/:id",
      element: <Details />
    },
    {
      path: "ricettario/colazione",
      element: <Breakfast/>
    },
    {
      path: "ricettario/pranzo",
      element: <Lunch/>
    },
    {
      path: "ricettario/cena",
      element: <Dinner/>
    },
    {
      path: "pianifica",
      element: <Planner/>
    },
    {
      path: "contattaci",
      element: <Contact/>
    },
    {
      path: "about",
      element: <About/>
    },
    {
      path: "*",
      element: <h1>ERRORE ROUTE NON IMPOSTATA -  DA CREARE 404!</h1>,
    },
  ])
}

export default Router