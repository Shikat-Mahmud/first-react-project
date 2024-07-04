import seriesData from '../api/series.json'
import { SeriesCard } from './SeriesCard';

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
      {seriesData.map((currElem) => 
          <SeriesCard key={currElem.id} data={currElem} />
      )}
    </ul>
  );
};


export default NetflixSeries;