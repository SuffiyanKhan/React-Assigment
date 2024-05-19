import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import DetailPage from "./Pages/DetailPage"

function App() {
  const router=createBrowserRouter([
    {
      path :'/',
      element:<Home/>
    },
    {
      path :'/d/:id',
      element:<DetailPage/>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
      
    </>
  )
}

export default App