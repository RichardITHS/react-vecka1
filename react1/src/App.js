import './App.css'
//Importerar alla komponenter som ska visas nedan

//Functional Component med interpolering
import Functional from './component/Functional'
//Class component
import ClassComponent from './component/ClassComponent'
//Function component with single prop
import FunctionalProps from './component/FunctionalProps'
//Function component with 2 props
import FunctionalProps2 from './component/FunctionalProps2'
//Function component with 2 props and children
import FunctionalPropsChildren from './component/FunctionalPropsChildren'
//Class component with props
import ClassComponentProps from './component/ClassComponentProps'
//Class component with state
import StateCounterClass from './component/StateCounterClass'


function App() {
    return <div className="App">
        {/* Här skapade vi en functional component med interpolering */}
        <Functional/>
        {/* Detta är en class component */}
        <ClassComponent/>
        {/* Detta är en functional component med en props */}
        <FunctionalProps name="Ja!, det stämmer"/>
        {/* Detta är en functional component med 2 props */}
        <FunctionalProps2 first="Richard" last="Carlsson"/>
        {/* Functional component med 2 props OCH en child props */}
        <FunctionalPropsChildren first="Richard" last="Carlsson" children="Jag är ett barn"/>
        {/* Class component with props */}
        <ClassComponentProps text="är en props i en class component"/>
        {/* Class component with state */}
        <StateCounterClass/>



    </div>
}

export default App
