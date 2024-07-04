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
      <>
      <div>
        <img src={seriesData[0].img_url} alt="Photo" width="250px" height="auto" />
      </div>
      <h1>Title: {seriesData[0].name}</h1>
      <h2>Rating: {seriesData[0].rating}</h2>
      <p>Summary: {seriesData[0].description}</p>
      <p>Genre: {seriesData[0].genre}</p>
      <p>Cast: {seriesData[0].cast}</p>
      <a href={seriesData[0].watch_url} target='_blank'>
        <button>Watch Now</button>
      </a>
    </>
    );
  };


  export default NetflixSeries;