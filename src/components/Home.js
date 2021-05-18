import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Form, Label, Modal, Button } from 'semantic-ui-react';

class Home extends Component {

  static propTypes = {
    updatePostcode: PropTypes.func.isRequired
  }

  state = {
    postcode: '',
    validPostcode: true
  }

  handleChange = (e) => {
    this.setState({ postcode: e.target.value })
  }

  handleNameSubmit = () => {
    const formattedPostcode = this.state.postcode.toUpperCase().replace(/\s/g, "");

     {
      this.props.history.push('/menu');
      this.setState({
        postcode: formattedPostcode
      });
      this.props.updatePostcode(formattedPostcode);
    }  
  }

  closeModal = () => {
    this.setState({
      postcode: '',
      validPostcode: true
    });
  }

  render(){

    return(
      <div id='home-page'>
        <Container >
          <Header as='h1' id="home-logo">Slices</Header>
          <Container id="home-content">
            <Header as='h1' id="home-header">Delicious pizzas delivered to you within a minute</Header>
            <Form size='large' onSubmit={this.handleNameSubmit} fluid='true'>
              <Form.Group >
                <Form.Input placeholder='Enter your Name' name='postcode' onChange={this.handleChange} value={this.state.postcode} width={4} required id='home-form'/>
                <Form.Button type='submit' color='teal' size='large' width={4} id='home-btn'>Get Started</Form.Button>
              </Form.Group>
              <Label color='orange' size='medium' id='home-label'><span role='img' aria-label='point-right'>👉</span> Get Coca-Cola free with the order above 98 $</Label>
            </Form>
          </Container>
        </Container>

        <Modal open={!this.state.validPostcode} size='mini' id='home-modal'>
          <Modal.Header>We'd love to send you a slice of the action, but..</Modal.Header>
          <Modal.Content>
            <p>It looks like you're from another planet <span role='img' aria-label='cat-sad'>😿</span></p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.closeModal} color='violet'>Try a different name</Button>
          </Modal.Actions>
       </Modal>
     </div>
    )
  }
};

export default Home;
