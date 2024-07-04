import NetflixSeries, {Footer} from "./components/NexflixSeries";

export const App = () => {
  const age = 19;

  return (
  <>
  <p>{age>=18 ? "Adult" : "Minor"}</p>

    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    <Footer/>
  </>
  );
};
