import { useState } from "react";

function Button() {
    const [inputText, setInputText] = useState("Default text"); // first one is variable, second is actually a function that changes the value of the first one 
    // and initially I can provide some first-time value to it 
    function handleChange(e) {
        setInputText(e.target.value) // where does .target.value come from?
        // The target event property returns the element that triggered the event.

    };

    return (
        <>
            <input value={inputText} onChange={handleChange}/> 
            {/*Why not handleChange(inputText)???*/}
            <p>You typed: {inputText}</p>
            <button onClick={() => setInputText("You did a reset!")}>Reset</button> 
        </>
    )
}

export default Button;