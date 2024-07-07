export const EventProps = () => {
    const handleClick = (user) => {
        alert(`Hey ${user}, Welcome.`);
    };

    const handleOnHover = () => {
        alert(`Thanks for hovering me.`);
    };

    return (
        <>
            <WelcomeUser onClick={() => handleClick("Saikat")} onMouseEnter={handleOnHover} />
        </>
    );
};

const WelcomeUser = (props) => {
    const handleGreeting = () => {
        console.log(`Hey user, Welcome.`);
    };

    return (
        <>
            <button className="bg-blue-500 p-3 m-1 text-white" onClick={props.onClick}>Click</button>
            <button className="bg-blue-500 p-3 m-1 text-white" onMouseEnter={props.onMouseEnter}>Hover</button>
            <button className="bg-blue-500 p-3 m-1 text-white" onClick={handleGreeting}>Greeting</button>
        </>
    );
};