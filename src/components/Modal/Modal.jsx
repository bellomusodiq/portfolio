import React from 'react';
import './Modal.css';


const Modal = props => (
    <div onClick={props.closeImage} className="Modal">
        <img src={props.img} alt=""/>
    </div>
)

export default Modal;
