export const SeriesCard = (props) => {
    return (
        <li>
          <div>
            <img src={props.data.img_url} alt={props.data.name} width="250px" height="auto" />
          </div>
          <h1>Title: {props.data.name}</h1>
          <h2>Rating: {props.data.rating}</h2>
          <p>Summary: {props.data.description}</p>
          <p>Genre: {props.data.genre}</p>
          <p>Cast: {props.data.cast}</p>
          <a href={props.data.watch_url} target='_blank'>
            <button>Watch Now</button>
          </a>
        </li>
    );
};