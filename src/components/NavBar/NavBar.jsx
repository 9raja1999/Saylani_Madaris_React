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
                text='Home'
                link="/"
                type="internal"
                />
            <AnchorLink
                text='Contact'
                link="/contact"
                type="internal"
                />
            <AnchorLink
                text='About'
                link='/about'
                type="internal"
            />
            <AnchorLink
                text='facebook'
                link='https://www.facebook.com'
                type="external"
            />
        </nav>
    )
}

export default memo(NavBar)