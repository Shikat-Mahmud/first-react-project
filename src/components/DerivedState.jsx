import { useState } from "react";

// const users = [
//     { name: "Saikat", age: 21 },
//     { name: "Mahmud", age: 24 },
//     { name: "Eftakhar", age: 26 },
//     { name: "Abir", age: 19 }
// ];

export const DerivedState = () => {

    const [users, setUsers] = useState([
        { name: "Saikat", age: 21 },
        { name: "Mahmud", age: 24 },
        { name: "Eftakhar", age: 26 },
        { name: "Abir", age: 19 }
    ]);

    return (
        <>
            <div className="main-div">
                <h1>User List</h1>
                <ul>
                    {users.map((currElem, index) => {
                        return (
                            <li key={index}>
                                <p>{index + 1}. {currElem.name} - {currElem.age} years old.</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}