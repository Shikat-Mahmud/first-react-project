import NetflixSeries from "./components/NetflixSeries";
import "./css/Netflix.css"

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading text-5xl font-bold">List of Best Netflix Series</h1>
      <NetflixSeries />
    </section>
  );
};
