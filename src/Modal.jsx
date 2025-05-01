export default function Modal({ id, header, body, footer, closeModal }) {
  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal_container') {
      closeModal();
    }
  };
  return (
    <div className="modal_container" onClick={handleOutsideClick}>
      <div className="modal_content" id={id || 'modal_content_container'}>
        <button className="close_modal_button" onClick={closeModal}>
          X
        </button>
        <div className="modal_header">{header}</div>
        <div className="modal_body">{body}</div>
        <div className="modal_footer">{footer}</div>
      </div>
    </div>
  );
}
