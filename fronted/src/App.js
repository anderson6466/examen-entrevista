import logo from './logo.svg';
import './App.css';
import Paginas from './Paginas';
import React, { Component } from 'react'
 
import { ListGroup,Card ,Navbar,Container} from 'react-bootstrap';
export default class App extends Component {
 

  

  render() {
   

    return (
<div>
<div  Style="padding: 2%">

<Navbar bg="light"  Style="text-align: center;"     >
    <Navbar.Brand    href="#home">Examen practico Fractal</Navbar.Brand>
  </Navbar>
</div>
<div  Style="float:left;width:20%;" >
<Container>
<Card style={{ width: '18rem' }}>
      <ListGroup defaultActiveKey="#link1">
    <ListGroup.Item action href="#link1">
   Lista de Costumer
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" disabled>
     Lista de Vendedores
    </ListGroup.Item>
    <ListGroup.Item action >
    Lista de Productos
    </ListGroup.Item>
  </ListGroup>
</Card>
</Container>
</div>

<div  Style="float:right;width:70%;" >

<Container>

  <Paginas/>




</Container>
</div>

</div>


    )
  }
}
