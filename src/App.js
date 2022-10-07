import React from 'react';
import './App.css';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import Navbar from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

import {
   BrowserRouter as Router,
   Routes,
   Route

} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element = {<Content></Content>}></Route>
        <Route path='/read' element = {<Header></Header>}></Route>
        <Route path='/create' element = {<Footer></Footer>}></Route>
      </Routes>

      {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> */}
      </div>
      </Router>
    );
  }
}

export default App;
