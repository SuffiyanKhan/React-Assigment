import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import DetailPage from "./Pages/DetailPage"
import PageNotFound from "./Components/PageNotFound/PageNotFound"
import OrderPage from "./Pages/OrderPage"

function App() {
  const router=createBrowserRouter([
    {
      path :'*',
      element:<PageNotFound/>
    },
    {
      path :'/',
      element:<Home/>
    },
    {
      path :'/d/:id',
      element:<DetailPage/>
    },{
      path :'/o',
      element:<OrderPage/>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
      
    </>
  )
}

export default App