function AnchorLink(props) {

    return (
        <a
            href={props.link}
            target="_blank"
            style={{
                color: 'grey',
                textDecoration: 'none'
            }}
        >
            {props.text}
        </a>
    )
}

export default AnchorLink