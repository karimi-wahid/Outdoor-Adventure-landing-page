import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/service',
          element: <Services />
        },
        {
          path: '/project',
          element: <Projects />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
