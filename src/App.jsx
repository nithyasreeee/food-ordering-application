import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import NavBar from './components/NavBar.jsx';
import Body from './components/body.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

function  App()

{
    function AppLayout(){
        return (
            <div>
                <NavBar/>
                <Outlet/>

              
            </div>
        )
    }
   let a = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
    
      children : [
            {  path: "/",
      element: <Body />
    },

    {path: "/about",
      element:<About/> 
    },
    {path: "/contact",
      element: <Contact/>
    }
   
    ]
}
   ])

    return <div>
        <RouterProvider router={a}></RouterProvider>
        
    </div>
}

export default App;

