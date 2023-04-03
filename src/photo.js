function Photo(props) {
    return (
      <div>
        <img src={props.src} alt={props.alt} />
        <p>{props.caption}</p>
      </div>
    );
  }
  export default Photo;