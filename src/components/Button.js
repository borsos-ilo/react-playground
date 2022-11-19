import React, { useState } from "react";

function Button() {
    const [inputText, setInputText] = useState("Default text"); // first one is variable, second is actually a function that changes the value of the first one 
    // and initially I can provide some first-time value to it 
    function handleChange(inputContent) {
        setInputText(inputContent.target.value) // where does .target.value come from?
        // The target event property returns the element that triggered the event.
        // how does this function know what "e" is, if it's called without a parameter?
        // The above code displays a single input field which, when typed in, passes its 
        // current value to the handleChange function. As mentioned before, JavaScript’s native 
        // onchange syntax is written in all lowercase, however we use camel-case for our event 
        // handler names in React.
    };

    return (
        <>
            <input value={inputText} onChange={handleChange}/> 
            {/*Why not handleChange(inputText)??? Because when called in onChange, the current value of the input*/}
            {/*Is passed to handleChange by default, by design of this function*/}
            <p>You typed: {inputText}</p>
            <button onClick={() => setInputText("You did a reset!")}>Reset</button> 
        </>
    )
}

export default Button;