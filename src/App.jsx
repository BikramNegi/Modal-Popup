import { useState } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <button
          className="show_modal_button"
          onClick={() => setShowModal(true)}
        >
          <span>Show Modal</span>
        </button>
        {showModal && (
          <Modal
            closeModal={closeModal}
            header={<div>Custom Header</div>}
            body={<div>Custom body</div>}
            footer={<div>Custom footer</div>}
          />
        )}
      </div>
    </>
  );
}

export default App;
