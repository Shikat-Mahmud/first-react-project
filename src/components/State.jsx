import { useState } from 'react';
import '../css/EV.css'

export const State = () => {
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(() => count + 1);
        console.log(count);
    }

    return (
        <>
        <section className="main-div">
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Increase</button>
        </section>
        </>
    );
}