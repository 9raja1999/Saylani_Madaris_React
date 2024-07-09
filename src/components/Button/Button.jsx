import { memo } from "react";

function Button(props) {
    //Props will always be in form of object {key : value}
    console.log("Btn rerender", props.text)
    return (
        <button
            style={{
                // key : value
                // PropertyName: PropertyValue
                // border-radius
                // backgroud-color
                padding: '0 20px',
                borderRadius: '20px',
                border: 'none',
                minHeight: '29px',
                backgroundColor: props.bgColor,
                color: props.color
            }}
            onClick={props.action}
        >

            {!props.icon ? null : props.icon}
            {" "}
            {props.text}
        </button>
    )
}

export default memo(Button);