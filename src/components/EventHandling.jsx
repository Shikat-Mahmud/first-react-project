export const EventHandling = () => {
    
    // function handleButtonClick() {
    //     alert("Hey i am onClick");
    // }

    // instead of function we can use component in react 
    const handleButtonClick = () => {
        alert("Hey i am onClick");
    }

    return (
        <>
            <button onClick={handleButtonClick} >Click Me</button>
        </>
    );
}