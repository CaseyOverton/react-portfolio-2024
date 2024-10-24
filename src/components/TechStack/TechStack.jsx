function TechStack({title, description, url}) {
    return (
      <li>
          <h3>{title}</h3>
          <p>{description}</p>
          <button>  
            <a href={url} target="_blank">Learn More</a>
          </button>
      </li>
    )
  }

export default TechStack