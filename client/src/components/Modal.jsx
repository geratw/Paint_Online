import '../styles/modal.scss'
import SettingBar from "./SettingBar";
import React, {useState, useEffect, useRef} from 'react';

const Modal = ({
                   visible = false,
                   title = '',
                   content = '',
                   name,
                   footer = '',
                   onClose,
                   onSubmit,
               }) => {
    const onKeydown = ({key}) => {
        switch (key) {
            case 'Escape':
                onClose()
                break
        }
    }

    const handleSubmit = () => {
        const username = name.current.value; // получаем значение из input
        onSubmit(username); // вызываем обработчик отправки формы
    };


    React.useEffect(() => {
        document.addEventListener('keydown', onKeydown)
        return () => document.removeEventListener('keydown', onKeydown)
    })

    if (!visible) return null

    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h3 className='modal-title'>{title}</h3>
                    <span className='modal-close' onClick={onClose}>
            &times;
          </span>
                </div>
                <div className='modal-body'>
                    <div className='modal-content'>
                        <input type="text" ref={name}/>
                    </div>
                </div>
                {footer && <div className='modal-footer'>
                    <button onClick={handleSubmit}>{footer}</button>
                </div>}
            </div>
        </div>
    )
}

export default Modal;
