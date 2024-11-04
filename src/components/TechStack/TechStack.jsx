import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Modal/modal.css'

function TechStack({title, description, modal, modalLink1, modalLink1Title, modalLink2, modalLink2Title}) {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState('');

  function handleClick() {
    setModalShow(true);
    setModalContent({title});
  }

  function handleModalUrl() {
    if (!!modalLink1 && !!modalLink2) {
      return(
        <ul>
          <li>
            <a href={modalLink1}>{modalLink1Title}</a>
          </li>
          <li>
            <a href={modalLink2}>{modalLink2Title}</a>
          </li>
        </ul> 
      )
    }
    if (!!modalLink1) {
      return(
        <ul>
          <li>
            <a href={modalLink1}>{modalLink1Title}</a>
          </li>
        </ul>
    )}
    return('')
  }

  function modalContents () {
    return (
      <div id="modal-content">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>{title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modal}</p>
          {handleModalUrl()}
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
