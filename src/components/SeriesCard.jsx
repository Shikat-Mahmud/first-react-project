// import "../css/Netflix.css"
import style from "../css/Netflix.module.css"

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

    /*  hyphen is not allowed in module css. for that we need to use [] instead of "."  */
    <li className={style["card-box"]}> 
      <div>
        <img className={style["card-box-img"]} src={data.img_url} alt={props.data.name} />
      </div>
      <div className={style["card-content"]}>
        <h2>{data.name}</h2>
        <h4 style={{fontSize: "16px"}}>Rating:  
          <span className={data.rating >= 8.5 ? style["super-hit"] : style.average }>{data.rating}</span>
        </h4>
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