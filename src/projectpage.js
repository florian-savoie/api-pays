function ProjectPage(props) {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <ListGroup>
          {props.photos.map((photo) => (
            <ListGroup.Item key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
              <p>{photo.caption}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
export default ProjectPage;