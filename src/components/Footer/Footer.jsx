import Button from "../Button/Button"

function Footer() {
    return (
        <footer
            style={{
                marginTop: '10px',
                borderTop: '1px solid grey',
                padding: '10px 0'
            }}
        >
            <Button
                text="facebook"
                color="white"
                bgColor="#646cff"
            />
        </footer>
    )
}
export default Footer