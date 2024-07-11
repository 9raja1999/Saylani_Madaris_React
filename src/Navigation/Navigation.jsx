import {
    createBrowserRouter, // function
    RouterProvider,  // Component
} from 'react-router-dom'
import Home from '../Home';
import ContactUs from '../Pages/ContactUs';
import Layout from '../Layouts/Layout';
import About from '../Pages/About';


const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout> 
            <Home />
        </Layout>
    },
    {
        path : '/contact',
        element : <Layout>
            <ContactUs />
        </Layout>
    },
    {
        path : '/about',
        element : <Layout>
            <About />
        </Layout>
    },
])

function Navigation() {
    return (
        <RouterProvider
            router={router}
        />
    )
}

export default Navigation;