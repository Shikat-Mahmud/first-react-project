import "../css/Netflix.css"

export const SeriesCard = (props) => {
    const {data} = props; // Destructuring Props
    // const { name, rating, description, genre, cast, watch_url, img_url} = props.data; // Deep Destructuring Props

    return (
        <li className="card-box">
          <div>
            <img className="card-box-img" src={data.img_url} alt={props.data.name}/>
          </div>
          <h1>Name: {data.name}</h1>
          <h2>Rating: {data.rating}</h2>
          <p>Summary: {data.description}</p>
          <p>Genre: {data.genre}</p>
          <p>Cast: {data.cast}</p>
          <a href={data.watch_url} target='_blank'>
            <button>Watch Now</button>
          </a>
        </li>
    );
};