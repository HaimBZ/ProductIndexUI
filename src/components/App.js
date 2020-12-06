import React from "react";
import { Navbar, Nav, NavItem, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import ProductForm from "./ProductForm";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleAddProduct = this.toggleAddProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  toggleAddProduct(e) {
    e && e.preventDefault();
    this.props.mappedToggleAddProduct();
  }

  addProduct(e) {
    e.preventDefault();
    const form = document.getElementById("addProductForm");
    if (form.productText.value !== "" && form.productPrice.value !== "" && form.productDesc.value !== "") {
      const data = new FormData();
      data.append("productText", form.productText.value);
      data.append("productPrice", form.productPrice.value);
      data.append("productDesc", form.productDesc.value);
      // const data = {
      //   productText: form.productText.value,
      //   productText: form.productPrice.value,
      //   productDesc: form.productDesc.value
      // }
      this.props.mappedAddProduct(data);
      form.reset();
      this.toggleAddProduct();
    } else {
      return;
    }
  }

  render() {
    const appState = this.props.mappedAppState;
    const {showAddProduct} = appState;
    return (
      <div>
        <Navbar inverse collapseOnSelect className="customNav">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/#">Product Index</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: "/", query: {} }}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer
                to={{ pathname: "/", query: {} }}
                onClick={this.toggleAddProduct}
              >
                <NavItem eventKey={1}>Add Product</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {showAddProduct && 
        <Modal show={showAddProduct} onHide={this.toggleAddProduct}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product</Modal.Title>
            
          </Modal.Header>
          <Modal.Body>
            <div>
              {showAddProduct && <ProductForm addProduct={this.addProduct} />}
            </div>
          </Modal.Body>
        </Modal>}
        <div className="container">
          {/* Each Smaller Components */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
