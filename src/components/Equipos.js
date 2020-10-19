import React from 'react';
export default function (props) {
    return (
        <div class="equipo" id={props.id}>
            <div class="boton">
                <h4><strong>{props.nombre}</strong></h4>
            </div>
            <div class="imagen">
                <img src={props.imgUrl} alt="nombre" />
            </div>
            <div class="parrafos">
                <p>{props.description}</p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mollis mauris, sed feugiat enim.
            Duis quis lorem risus </p>
            </div>
        </div>
    );
}

