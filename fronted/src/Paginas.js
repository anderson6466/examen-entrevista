import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react'
 
import { Form,   Col, Row,   FormGroup, FormControl, ControlLabel,  Button,  Modal, ListGroup,Card ,Navbar,Container} from 'react-bootstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
export default class Paginas extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            show: false ,
            showmodifi:false,
              firstname:"",
	 
             lastname:"",
             
            email:"",
         
           phonenumber:"",
             
             birthdate:"" ,
             midcliente:"",
             mfirstname:"",
	 
             mlastname:"",
             
            memail:"",
         
           mphonenumber:"",
             
             mbirthdate:"" ,


             
             data:[]

            
            
        
        };
        this.modifcliente=this.modifcliente.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.actualizarcliente = this.actualizarcliente.bind(this);
      this.guardarCliente=this.guardarCliente.bind(this);
       this.closeModalmodif=this.closeModalmodif.bind(this);
       this.openModalmodif=this.openModalmodif.bind(this);
      }
     
      actualizarcliente(e) {


        let nam = e.target.name;
        let val = e.target.value;

       


            this.setState({ [nam] : val});

         
         

       
      }

      guardarCliente(e) {

    e.preventDefault();
        const reqclient = {
            
            firstname:this.state.firstname,
        
            lastname:this.state.lastname,
             
            email:this.state.email,
         
           phonenumber:this.state.phonenumber,
             
             birthdate:this.state.birthdate 
            
        
        } 
console.log(reqclient);
              axios.post(`http://localhost:8085/recargas/add`,    reqclient  )
              .then(res => {
                console.log(res);
                console.log(res.data);
                this.cargarlistacosutumer();
              })

              this.closeModal();
      }



    deletecliente( row){


 
axios.post(`http://localhost:8085/recargas/delete`,    row )
    .then(res => {
      
      console.log(   res.data);

      this.cargarlistacosutumer();
     
    })

      }



      modifcliente(e ){
        e.preventDefault();

const  reqcliente = {

    idcliente:this.state.midcliente,
    firstname:this.state.mfirstname,

    lastname:this.state.mlastname,
    
   email:this.state.memail,

  phonenumber:this.state.mphonenumber,
    
  birthdate:this.state.mbirthdate


}
console.log(this.state.midcliente);

 
        axios.post(`http://localhost:8085/recargas/update`,    reqcliente )
            .then(res => {
              
              console.log(   res.data);
        
              this.cargarlistacosutumer();
              this.closeModalmodif();
             
            })
        
              }
        









      onFollowChanged(row){


        console.log(row)
        
        this.openModalmodif( );
        this.setState({ 
            
            midcliente:row.idcliente,
            mfirstname : row.firstname,
            mlastname:row.lastname,
            memail:row.email,
            mphonenumber:row.phonenumber,
            mbirthdate:row.birthdate
        });
        
	 
         



        }



      
      componentDidMount() {
      
this.cargarlistacosutumer();


      }

cargarlistacosutumer(){

    axios.post(`http://localhost:8085/recargas/listaclientes`,    {}  )
    .then(res => {
      
      console.log(   res.data);

      this.setState({ data : res.data});
      console.log(this.state.data);
    })



}




      openModal() {
        this.setState({
            show: true 
         
        });
      }

      openModalmodif() {
        this.setState({
            showmodifi: true 
         
        });
      }


      closeModalmodif(e){

        this.setState({
            showmodifi: false
         
        });
         

      }




      closeModal() {
        this.setState({
            show: false,
         
        });
      }

   



     
    linkFollow = (cell, row, rowIndex, formatExtraData) => {
        return (
            <div>
          <Button
            onClick={() => {
              this.onFollowChanged(row);
            }}
          >
            Modificar
          </Button> 
          <Button Style="margin-left:0.5%"
            onClick={() => {
              this.deletecliente(row);
            }}
          >
            Eliminar
          </Button> 
          </div>
        );
      };

    columns = [
        { dataField: 'idcliente', text: 'clienteid',sort: true  },
        { dataField: 'firstname', text: 'firstname',sort: true  },
        { dataField: 'lastname', text: 'lastname',sort: true  },
        { dataField: 'email', text: 'email',sort: true  },
        { dataField: 'phonenumber', text: 'phonenumber' ,sort: true },
        { dataField: 'birthdate', text: 'birthdate' ,sort: true },
        { dataField: 'nrodoc', text: 'Acciones' ,formatter:this.linkFollow,sort: true }
      ];
  render() {

    

   
    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        }
      });

      const defaultSorted = [{
        dataField: 'clienteid',
        order: 'desc'
      }];
    
     

      
      
    return (


       

<div>


<Container>


<Modal show={ this.state.showmodifi} onHide={this.closeModalmodif}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>

       
        <Form>
  <Form.Group  >
        
  <Row>
    <Col>
    <label>
    firstname:
        </label>
    <input type="text"  name="mfirstname"    value={this.state.mfirstname}  onChange={this.actualizarcliente}      />
        
    </Col>
    <Col>
    <label>
    lastname:
        </label>
    <input type="text"  name="mlastname"    value={this.state.mlastname}  onChange={this.actualizarcliente}   />
    </Col>
  </Row>

  <Row>
    <Col>
    <label>
        Telefono:
        </label>
          <input type="text" name="mphonenumber"    value={this.state.mphonenumber}  onChange={this.actualizarcliente}   />
         
    </Col>
    <Col>
    <label>
        Email:
        </label>
          <input type="text"  name="memail"    value={this.state.memail}  onChange={this.actualizarcliente}   />
         
    </Col>
  </Row> 
        
  <Row>
    <Col>
    <label>
          birthdate:
        </label>
        <br/>
          <input type="text"    name="mbirthdate"           value={this.state.mbirthdate}  onChange={this.actualizarcliente}   />
       
    </Col>
  </Row>  
    
        
        </Form.Group>
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModalmodif}>
            Close
          </Button>
          <Button variant="primary" onClick={ this.modifcliente   }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
















<Modal show={ this.state.show} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>

       
        <Form>
  <Form.Group  >
        
  <Row>
    <Col>
    <label>
    firstname:
        </label>
    <input type="text"  name="firstname"    value={this.state.firstname}  onChange={this.actualizarcliente}      />
        
    </Col>
    <Col>
    <label>
    lastname:
        </label>
    <input type="text"  name="lastname"    value={this.state.lastname}  onChange={this.actualizarcliente}   />
    </Col>
  </Row>

  <Row>
    <Col>
    <label>
        Telefono:
        </label>
          <input type="text" name="phonenumber"    value={this.state.phonenumber}  onChange={this.actualizarcliente}   />
         
    </Col>
    <Col>
    <label>
        Email:
        </label>
          <input type="text"  name="email"    value={this.state.email}  onChange={this.actualizarcliente}   />
         
    </Col>
  </Row> 
        
  <Row>
    <Col>
    <label>
          birthdate:
        </label>
        <br/>
          <input type="text"    name="birthdate"           value={this.state.birthdate}  onChange={this.actualizarcliente}   />
       
    </Col>
  </Row>  
    
        
        </Form.Group>
</Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={ this.guardarCliente   }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

<div> 

<Button   Style="margin-bottom:0.9%" onClick={this.openModal}   >
     + Agregar
   </Button> 


   </div>

<div>
<BootstrapTable keyField='id' data={this.state.data} columns={this.columns} defaultSorted={defaultSorted}      pagination={pagination}   />
      
  </div>
</Container>


</div>


    )
  }
}
