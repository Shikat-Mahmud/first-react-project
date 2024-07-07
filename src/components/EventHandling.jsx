export const EventHandling = () => {
    
    const btn_style = {
        padding: "10px 15px",
        backgroundColor: "darkblue",
        color: "aliceblue",
        cursor: "pointer",
        border: "none",
        marginTop: "10px",
        marginBottom: "20px",
        borderRadius: "6px",
        fontSize: "16px"
      }

    // function handleButtonClick() {
    //     alert("Hey i am onClick");
    // }

    // instead of function we can use component in react 
    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("Hey i am onClick");
    }

    const handleWelcomeUser = (user) => {
        console.log(`hey ${user}, welcome`);
    }

    return (
        <>
            <button style={btn_style} onClick={handleButtonClick} >Click Me</button>
            <br />
            <button style={btn_style} onClick={() => handleWelcomeUser("Saikat")} >Click Me</button>
        </>
    );
}