import { useState } from "react";

function Button() {
    const [inputText, setInputText] = useState("Default text");
    function handleChange(e) {
        setInputText(e.target.value)
    };

    return (
        <>
            <input value={inputText} onChange={handleChange}/>
            <p>You typed: {inputText}</p>
            <button onClick={() => setInputText("Default text")}>Reset</button>
        </>
    )
}

export default Button;