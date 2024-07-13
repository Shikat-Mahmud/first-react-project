import { useState } from "react";
import "../css/EV.css"

export const LiftingStateUp = () => {
    // Lifted up the variable
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <InputComponet inputValue = {inputValue} setInputValue = {setInputValue}/>
            <DisplayComponent inputVal = {inputValue}/>
        </>
    );
};

const InputComponet = (props) => {
    // const [inputValue, setInputValue] = useState("");

    const {inputValue, setInputValue} =  props;

    return (
        <>
            <input type="text" 
            placeholder="Enter you name: " 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}/>
        </>
    );
};

const DisplayComponent = (props) => {
    return (
        <>
            <p>Displaying the value: {props.inputVal}</p>
        </>
    );
}