
export const App = () => {
  const age = 19;

  return (
  <>
  <p>{age>=18 ? "Adult" : "Minor"}</p>

    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
  </>
  );
};

const NetflixSeries = () => {
  const movie_name = "Unlocked";
  const movie_rating = 9.2;
  const summary = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt amet in, harum dolor necessitatibus tenetur reiciendis itaque placeat similique adipisci eaque nemo cum maxime ullam iste ipsam dicta dolores! Ea!";
  let age = 13;

  let canWatch = "Not Available";
  if(age >= 18) {
    canWatch = "Watch Now";
  }

  return (
    <>
    <div>
      <img src="img/my-img.jpg" alt="Photo" width="250px" height="auto" />
    </div>
    <h1>Title: {movie_name}</h1>
    <h2>Rating: {movie_rating}</h2>
    <p>Summary: {summary}</p>
    <button>{canWatch}</button>
  </>
  );
};