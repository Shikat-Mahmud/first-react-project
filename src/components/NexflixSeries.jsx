import seriesData from '../api/series.json'

const NetflixSeries = () => {
  // const movie_name = "Unlocked";
  // const movie_rating = 9.2;
  // const summary = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt amet in, harum dolor necessitatibus tenetur reiciendis itaque placeat similique adipisci eaque nemo cum maxime ullam iste ipsam dicta dolores! Ea!";
  // let age = 13;

  // let canWatch = "Not Available";
  // if(age >= 18) {
  //   canWatch = "Watch Now";
  // }

  return (
    <ul>
      {seriesData.map((currElem) => {
        return (
        <li key={currElem.id}>
          <div>
            <img src={currElem.img_url} alt={currElem.name} width="250px" height="auto" />
          </div>
          <h1>Title: {currElem.name}</h1>
          <h2>Rating: {currElem.rating}</h2>
          <p>Summary: {currElem.description}</p>
          <p>Genre: {currElem.genre}</p>
          <p>Cast: {currElem.cast}</p>
          <a href={currElem.watch_url} target='_blank'>
            <button>Watch Now</button>
          </a>
        </li>
        );
      })}
    </ul>
  );
};


export default NetflixSeries;