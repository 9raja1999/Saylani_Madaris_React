import { memo } from "react"
import AnchorLink from "../AnchorLink/AnchorLink"

function NavBar() {
    console.log("nav render")
    return (
        <nav
            style={{
                borderBottom: '1px solid grey',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px'
            }}
        >
            <AnchorLink
                text='Vite'
                link="https://vitejs.dev/"
            />
            <AnchorLink
                text='Strapi'
                link="https://strapi.io/"
            />
            <AnchorLink
                text='October cms'
                link='https://octobercms.com/'
            />
        </nav>
    )
}

export default memo(NavBar)