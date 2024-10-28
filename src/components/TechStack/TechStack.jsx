import Example from '../Modal/Modal.jsx'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';




function TechStack({title, description}) {
  const [modalShow, setModalShow] = useState(false);
    return (
      <li>
          <h3>{title}</h3>
          <p>{description}</p>
          <Button variant="primary" onClick={() => setModalShow(true)}>
        Learn More!
      </Button>

      <Example
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </li>
    )
  }

export default TechStack
