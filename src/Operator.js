import "./Operator.css"

let Operator = (props) => {
    return (
        <div className="operator" >
            <button className="plus" onClick={() => {
                props.setoperator("+");

            }} >+</button>
            <button className="minus" onClick={() => {
                props.setoperator("-");
            }} >-</button>
            <button className="mul" onClick={() => {
                props.setoperator("*");
            }} >*</button>
            <button className="divide" onClick={() => {
                props.setoperator("/");
            }} >/</button>
        </div>
    )
}

export default Operator;