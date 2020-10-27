import React from 'react'
import {Jumbotron} from 'react-bootstrap';

const Titulo = ({titulo, chamada}) => {

return (

<Jumbotron>

 <h1> {Titulo} </h1>
  <p> {chamada} </p>

</Jumbotron>
    )
}

