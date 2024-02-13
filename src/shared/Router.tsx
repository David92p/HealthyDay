import { useRoutes } from "react-router-dom";
import { Home, Ingredients, IngredientDetails, Recipes, RecipeDetails, Planner, Contact, About } from "../components/"



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
      path: "/ingredienti/dettaglio/:id",
      element: <IngredientDetails />
    },
    {
      path: "ricettario",
      element: <Recipes/>
    },
    {
      path: "/ricettario/dettaglio/:id",
      element: <RecipeDetails />
    },
    {
      path: "ricettario/ingredienti",
      element: <Ingredients/>
    },
    {
      path: "ricettario/pianifica",
      element: <Planner />
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