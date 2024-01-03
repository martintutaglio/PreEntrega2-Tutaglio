
import { Button, Col, Container, Form, Row } from "react-bootstrap"



const CheckoutForm = ({handleSubmitCheck}) => { 


const formik = ({
  initialValues:{
    name: '',
    phone: '',
    email :'',
    repeatEmail:''
  },


  onSubmit:(formData)=>{
  const {repeatEmail,...filteredFormData} = formData
  handleSubmitCheck(filteredFormData)
  }
})



  return (
    <div><h2 className="text-center my-2">Formulario de Orden de pedido</h2>
    <Container fluid>
      
    <Row className="justify-content-center">
      <Col xs={12} md={8}>
      <Form onSubmit={formik.handleSubmit} > 
        <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Nombre y apellido" name='name'  onChange={formik.handleChange}  onBlur={formik.handleBlur} isInvalid={formik.touched.name && formik.errors.name}  value={formik.values.name}/>
        <Form.Control.Feedback type="invalid">
          {formik.errors.name}
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'  onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.email && formik.errors.email}  value={formik.values.email}/>
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="repeatEmail">
        <Form.Label>Repeat your email</Form.Label>
        <Form.Control type="repeatEmail" placeholder="Repeat your email" name='repeatEmail'  onChange={formik.handleChange} onBlur={formik.handleBlur}         
          isInvalid={formik.touched.repeatEmail && formik.errors.repeatEmail}
         value={formik.values.repeatEmail}/>
        <Form.Control.Feedback type="invalid">
          {formik.errors.repeatEmail}
        </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su número de celular . Ejem +54 123 456 7890" name='phone'  onChange={formik.handleChange} onBlur={formik.handleBlur} isInvalid={formik.touched.phone && formik.errors.phone} value={formik.values.phone}/>
        <Form.Control.Feedback type="invalid">
          {formik.errors.phone}
        </Form.Control.Feedback>
        
        </Form.Group>
        <Row className="d-flex justify-content-center" md={12}>

          <Col  md={3}>
          <Button className="my-2" variant="success" onClick={formik.handleSubmit}>
            Registrar Pedido
          </Button>
          </Col>
          <Col md={3}>
          <Button className="my-2" variant="info" onClick={formik.handleReset}>
            Limpiar Campos
        </Button>
          </Col>
       
        
        </Row>
        
      </Form>
      </Col>
   
    </Row>
    </Container>
    
    </div>
  )
}

export default CheckoutForm