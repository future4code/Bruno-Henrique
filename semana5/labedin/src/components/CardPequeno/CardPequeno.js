import React from 'react';
import './CardPequeno.css'

export function CardPequeno(props) {
    return (
        <div className="small-container">
            <p>Email: {props.email}</p>
            <p>Endereço: {props.adress}</p>
        </div>
    )
};