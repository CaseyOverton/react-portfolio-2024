function TechStack(props) {
    return (
      <li>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <button>  
            <a href={props.url} target="_blank">Learn More</a>
          </button>
      </li>
    )
  }

export default TechStack