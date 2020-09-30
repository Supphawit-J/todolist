import React, { useEffect, useState } from "react";
import Button from "./.components/Button";
import Calculator from "./.components/Calculator";
import ContainerLayout from "./.components/ContainerLayout";



import "./styles.css";

function App() {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue,setSecondValue] = useState("")
  const [operatorValue, setOperatorValue] =useState("")
  const [display,setDisplayValue]=useState(0)

  const handleNum = (event) =>{
     setDisplayValue(0)
     operatorValue.length === 0 ? setFirstValue(firstValue+event.target.value) : setSecondValue(secondValue+event.target.value)

      
  }

  const handleOperator = (event) => {
    setOperatorValue(event.target.value)
  }

  const handleCalculator =()=>{
      setDisplayValue(
        operatorValue==="+" ? parseInt(firstValue)+parseInt(secondValue) : 
        operatorValue==="-" ? parseInt(firstValue)-(secondValue) :
        operatorValue==="*" ? parseInt(firstValue)*(secondValue):
        operatorValue==="/" ? secondValue===0 ? "Error : divide by zero" : 
        firstValue===0? "Infinity" : parseInt(firstValue)/parseInt(secondValue):"undefinded operator"
        )
      setFirstValue("")
      setSecondValue("")
      setOperatorValue("")
  }

  const handleDisplay = display === 0 ? secondValue.length ===0? firstValue.length===0? display : firstValue :secondValue : display;
 
  
  
                          

  return (
    <div className="App">
      <ContainerLayout>
        <Calculator> 
          
          <h1 children={handleDisplay}/>
          <Button onClick={handleNum} >1</Button>
          <Button onClick={handleNum} >2</Button>
          <Button onClick={handleNum} >3</Button>
          <br/>
          <Button onClick={handleNum} >4</Button>
          <Button onClick={handleNum} >5</Button>
          <Button onClick={handleNum} >6</Button>
          <br/>
          <Button onClick={handleNum} >7</Button>
          <Button onClick={handleNum} >8</Button>
          <Button onClick={handleNum} >9</Button>
          <Button onClick={handleNum} >0</Button>
          <br/>
          <Button onClick={handleOperator} >+</Button>
          <Button onClick={handleOperator} >-</Button>
          <Button onClick={handleOperator} >*</Button>
          <Button onClick={handleOperator} >/</Button>
          <br/>
          <Button onClick={handleCalculator} >=</Button>
        </Calculator>
      </ContainerLayout>
   
    </div>
  );
}

export default App;
