// import Example from '../Modal/Modal.jsx'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Modal/modal.css'

function TechStack({title, description, modal, modalLink}) {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState('');

  function handleClick() {
    setModalShow(true);
    setModalContent({title});
      console.log({modalLink})
  }

  function modalContents () {
    return (
      <div id="modal-content">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>{title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>{modal}</h3>
          <a href={modalLink}>Destructuring Props Demonstration</a>
        </Modal.Body>
      </div>
    )
  }
   
  
  function BS_Modal(props){
    return (
      <Modal
      {...props}
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     {modalContents()}
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
        <BS_Modal
          show={modalShow}
          onHide={() => setModalShow(false)}/>
      </li>
    )
  }

export default TechStack
