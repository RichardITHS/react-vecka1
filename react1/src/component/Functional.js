/* Detta är en functional component
Skrivs som vilken ES5 function somhelst.
Här använder vi sedan return för att kunna skriva JSX (Javascript XML) */

const hello = 'FEU22'

const displayMessage = () => {
    return 'Vad kul det ska bli'
}

function Functional() {
    return (
        <>
            <h1 className="title">{hello + ' ' + displayMessage()}</h1>
        </>
    )
}

export default Functional
