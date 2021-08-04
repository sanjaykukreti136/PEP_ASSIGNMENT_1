import "./Number.css"

let Numbers = (props) => {
    return (
        <div className="numbers" >
            <button onClick={() => {
                props.setnumber("1");

            }} >1</button>
            <button onClick={() => {
                props.setnumber("2");
            }} >2</button>
            <button onClick={() => {
                props.setnumber("3");
            }} >3</button>
            <button onClick={() => {
                props.setnumber("4");
            }} >4</button>
            <button onClick={() => {
                props.setnumber("5");
            }} >5</button>
            <button onClick={() => {
                props.setnumber("6");
            }} >6</button>
            <button onClick={() => {
                props.setnumber("7");
            }} >7</button>
            <button onClick={() => {
                props.setnumber("8");
            }} >8</button>
            <button onClick={() => {
                props.setnumber("9");
            }} >9</button>
            <button onClick={() => {
                props.setnumber("0");
            }} >0</button>
            <button onClick={() => {
                props.setclear();
            }} >C</button>
            <button onClick={() => {
                props.solve();
            }} >=</button>
        </div>
    )
}
export default Numbers;