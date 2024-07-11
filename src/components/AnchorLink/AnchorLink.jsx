import {Link} from 'react-router-dom'

function AnchorLink(props) {

    if(props.type === 'external') {
        return (
            <a
                href={props.link}
                style={{
                    color: 'grey',
                    textDecoration: 'none'
                }}
            >
                {props.text}
            </a>
        )
    }else if(props.type === 'internal') {
        return (
            <Link to={props.link}>
                {props.text}
            </Link>
        )
    }else {
        return null
    }

}

export default AnchorLink