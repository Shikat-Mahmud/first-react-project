export const SeriesCard = (props) => {
    return (
        <li>
          <div>
            <img src={props.currElem.img_url} alt={props.currElem.name} width="250px" height="auto" />
          </div>
          <h1>Title: {props.currElem.name}</h1>
          <h2>Rating: {props.currElem.rating}</h2>
          <p>Summary: {props.currElem.description}</p>
          <p>Genre: {props.currElem.genre}</p>
          <p>Cast: {props.currElem.cast}</p>
          <a href={props.currElem.watch_url} target='_blank'>
            <button>Watch Now</button>
          </a>
        </li>
    );
};