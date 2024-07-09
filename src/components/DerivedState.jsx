const users = [
    {name: "Saikat", age: 21},
    {name: "Mahmud", age: 24},
    {name: "Eftakhar", age: 26},
    {name: "Abir", age: 19},
];

export const DerivedState = () => {
    return (
        <>
            <div className="main-div">
                <h1>User List</h1>
                <ul>
                    {users.map((currElem) => {
                        <p><span>{currElem.name}</span> - <span>{currElem.age}</span> years old.</p>
                    })};
                </ul>
            </div>
        </>
    );
}