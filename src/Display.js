import "./Display.css"

let Display = (props) => {
    return (

        <div className="display" >
            <p className="divp1">{props.predata}</p>
            <p className="divp" >
                {props.data}
            </p>
        </div>
    )
}
export default Display;
