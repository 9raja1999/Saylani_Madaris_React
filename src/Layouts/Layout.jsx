import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"

function Layout({children}) {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}
export default Layout