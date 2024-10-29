// import Example from '../Modal/Modal.jsx'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Modal/modal.css'
function TechStack({title, description, props}) {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState('');

  function handleClick() {
    setModalShow(true);
    setModalContent({title});
    console.log({title})
  }

  function Example(props){
    return (
      <Modal
      {...props}
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4> </h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
  }

    return (
      <li>
          <h3>{title}</h3>
          <p>{description}</p>
      <Button variant="primary" onClick={handleClick}>
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
