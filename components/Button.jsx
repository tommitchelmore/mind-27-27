import React, { useState } from 'react';
import Modal from './Modal';

function Button(props) {

    if (props.modal) {   
   
        const [modalState, setModalState] = useState(false)

        const toggleModal = () => {
            setModalState(!modalState)
        }

        return <>
            <button onClick={toggleModal} className={`px-8 py-3 rounded-xl font-sans text-white text-3xl ${props.alt ? 'bg-white text-purple' : 'bg-purple text-white'}`} {...props}>{props.text}</button>
            <Modal state={modalState} handler={toggleModal}>{props.children}</Modal>
        </>
    }


    return <button className={`px-8 py-3 rounded-xl font-sans text-white text-3xl ${props.alt ? 'bg-white text-purple' : 'bg-purple text-white'}`} {...props}>{props.children}</button>
}

export default Button;