import { EventHandling } from "./components/EventHandling";
import { EventPropagation } from "./components/EventPropagation";
import { EventProps } from "./components/EventProps";
import NetflixSeries from "./components/NetflixSeries";
import { State } from "./components/State";
import "./css/Netflix.css"

export const App = () => {
  return (
    <section className="container">
      <h1 className="card-heading text-5xl font-bold">List of Best Netflix Series</h1>
      {/* <NetflixSeries /> */}
      {/* <EventHandling/> */}
      {/* <EventProps/> */}
      {/* <EventPropagation/> */}
      <State/>
    </section>
  );
};
