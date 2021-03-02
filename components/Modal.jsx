import React, {useEffect, useRef} from 'react';
import { createPortal } from 'react-dom';

function Modal(props) {
    const container = useRef(null)

    useEffect(() => {
        container.current = document.querySelector('#modal-root')
    }, [])

    return container.current ? createPortal(
        <div id={props.id} className={`${props.state ? 'flex' : 'hidden'} fixed top-0 left-0 w-screen h-screen justify-center items-center`}>
            <div className="bg-white w-1/2" style={{zIndex: 100}}>
                {props.children}
            </div>
            <div
                onClick={props.handler}
                className="top-0 left-0 w-full h-full absolute" 
                style={{
                    background: 'rgba(0,0,0,0.9)',
                    zIndex: 99
                }}
            />
        </div>,
        container.current
    ) : null;
}

export default Modal;