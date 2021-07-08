import React, { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom'
import FocusTrap from 'focus-trap-react';

interface ModalProps {
  triggerButtonRef: any;
}

const Modal: React.FC<ModalProps> = ({ triggerButtonRef, children }) => {
  
  const [isVisible, setVisible] = useState(false);

  const modalRef = useRef(null);
  const closeButton = useRef();

  useEffect(() => {
    if (triggerButtonRef && triggerButtonRef.current) {
      triggerButtonRef.current.addEventListener('click', showModal)
    }
  }, [])

  const showModal = () => {
    setVisible(true);
    activeScrollLock();
  }

  const closeModal = () => {
    setVisible(false);
    triggerButtonRef.current.focus();
    disableScrollLock();
  }

  const onKeyDown = (evt) => {
    if (evt.keyCode === 27) {
      closeModal();
    }
  }

  const onClickOutside = (evt) => {
    if (modalRef.current && modalRef.current.contains(evt.target)) return;
    closeModal();
  }

  const activeScrollLock = () => {
    document.querySelector('html')?.classList.add('scroll-lock')
  }

  const disableScrollLock = () => {
    document.querySelector('html')?.classList.remove('scroll-lock')
  }
  
  return (
    <>
      {isVisible ? (
        ReactDom.createPortal(
          <FocusTrap>
            <aside
              role="dialog"
              tabIndex={-1}
              aria-modal="true"
              className="modal-card"
              onClick={onClickOutside}
              onKeyDown={onKeyDown}
            >
              <div className="modal-card__area" ref={modalRef}>
                <div className="modal-card__header">
                  <span className="modal-card__header-title typo typo__headline-6">Lorem ipsum</span>
                  <button
                    ref={closeButton}
                    aria-label="Close Modal"
                    aria-labelledby="close-modal"
                    className="modal-card__button"
                    onClick={closeModal}
                  >
                    <span id="close-modal" className="_hide-visual">
                      fechar
                    </span>
                    <svg className="_modal-close-icon" viewBox="0 0 40 40">
                      <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                    </svg>
                  </button>
                </div>
                <div className="modal-card__body">
                  {children}
                </div>
              </div>
            </aside>
          </FocusTrap>,
          document.body
        )
      ) : null}
    </>
  )

}

export default Modal