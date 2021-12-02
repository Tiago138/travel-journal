function Cards(props: {
  title: string;
  location: string;
  googleMapsUrl: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
}) {
  console.log(props);
  return (
    <>
      <article className="card">
        <img
          className="card--image"
          src={require(`../images/${props.imageUrl}.png`).default}
          alt={props.title}
        />

        <div className="card--content">
          <div className="card--content--location">
            <img src={require("../images/marker.png").default} alt="marker" />
            <span>{props.location}</span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h2 className="card--content--title">{props.title}</h2>
          <h3 className="card--content--date">
            {props.startDate} - {props.endDate}
          </h3>
          <p className="card--content--text">{props.description}</p>
        </div>
      </article>
      <hr />
    </>
  );
}

export default Cards;
