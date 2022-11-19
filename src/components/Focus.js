import { useRef, useState } from "react";

function Focus() {
    const inputRef = useRef(null)
    const [city, setCity] = useState('Budapest')
    const focusOnButtonClick = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <label>Where do you live?</label>
            <input ref={inputRef} onChange={
                (e) => setCity(e.target.value)
            }></input>
            <p>You live in: {city}</p>
            <button onClick={focusOnButtonClick}>Click me!</button>
        </div>
    )
}

export default Focus;