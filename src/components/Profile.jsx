export const Profile = () => {
    return (
        <>
            <ProfileCard 
            name = "Saikat"
            age = {24} 
            greeting = {
                <div>
                    <strong>Hello Saikat, keep up the greate work!</strong>
                </div>
            }>
                <p>Hobbies: Travelling, Photography.</p>
                <button>Contact</button>
            </ProfileCard>
        </>
    );
};

function ProfileCard(props) {
    return (
        <>
            <h1>Name: {props.name}</h1>
            <h3>Age: {props.age}</h3>
            <strong>{props.greeting}</strong>
            <div>{props.children}</div>
        </>
    );
}