/* En komponent med 2 props samt en children props */
function FunctionalPropsChildren(props) {
    return (
        <div>
        <h2>
            Detta är också en komponent som hämtar props, i detta fallet 2st:
            {props.first}
            {props.last}
        </h2>
        <p>{props.children}</p>
        </div>
    )
}

export default FunctionalPropsChildren
