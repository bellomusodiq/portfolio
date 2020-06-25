import React from 'react';
import './Footer.css';


const Footer = props => (
    <div className="Footer">
        <h3>Contacts</h3>
        <div><i className="far fa-envelope"></i> <a style={{marginLeft: 10}} href="mailto:bmayowa25@gmail.com">bmayowa25@gmail.com</a></div>
        <div><i className="fab fa-linkedin"></i> <a style={{marginLeft: 10}} href="https://www.linkedin.com/in/mayowa-bello/">Mayowa Bello</a></div>
        <div><i className="fab fa-github"></i> <a style={{marginLeft: 10}} href="https://github.com/bellomusodiq">bellomusodiq</a></div>
        <div><i className="fab fa-twitter"></i> <a style={{marginLeft: 10}} href="https://twitter.com/bello_musodiq">@bello_musodiq</a></div>
    </div>
)

export default Footer;
