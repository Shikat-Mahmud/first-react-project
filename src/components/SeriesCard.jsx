import "../css/Netflix.css"

// inline css with object 
const btn_style = {
  padding: "10px 15px",
  backgroundColor: "darkblue",
  color: "aliceblue",
  cursor: "pointer",
  border: "none",
  marginTop: "10px",
  marginBottom: "20px",
  borderRadius: "6px",
}

export const SeriesCard = (props) => {
  const { data } = props; // Destructuring Props
  // const { name, rating, description, genre, cast, watch_url, img_url} = props.data; // Deep Destructuring Props

  return (
    <li className="card-box">
      <div>
        <img className="card-box-img" src={data.img_url} alt={props.data.name} />
      </div>
      <div className="card-content">
        <h2>Name: {data.name}</h2>
        <h4>Rating: {data.rating}</h4>
        <p>Summary: {data.description}</p>
        <p>Genre: {data.genre}</p>
        <p>Cast: {data.cast}</p>
        <a href={data.watch_url} target='_blank'>
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};