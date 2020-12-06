import React from "react";
import { Alert, Glyphicon, Button, Modal, Panel, FormControl } from "react-bootstrap";
import { Link } from "react-router";
import ProductEditForm from "./ProductEditForm";

export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ""
    }

    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditProduct = this.submitEditProduct.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteProduct = this.cofirmDeleteProduct.bind(this);
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  showEditModal(productToEdit) {
    this.props.mappedshowEditModal(productToEdit);
  }

  hideEditModal() {
    this.props.mappedhideEditModal();
  }

  submitEditProduct(e) {
    e.preventDefault();
    const editForm = document.getElementById("EditProductForm");
    if (editForm.productText.value !== "") {
      const data = new FormData();
      data.append("id", editForm.id.value);
      data.append("productText", editForm.productText.value);
      data.append("productPrice", editForm.productPrice.value);
      data.append("productDesc", editForm.productDesc.value);
      this.props.mappedEditProduct(data);
    } else {
      return;
    }
  }

  hideDeleteModal() {
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(productToDelete) {
    this.props.mappedshowDeleteModal(productToDelete);
  }

  cofirmDeleteProduct() {
    this.props.mappedDeleteProduct(
      this.props.mappedProductState.productToDelete
    );
  }

  handleChange = event => {
    const keyword = event.target.value;
    this.setState({ filter: keyword});
  };

  render() {
    const productState = this.props.mappedProductState;
    const { products } = productState;
    const editProduct = productState.productToEdit;
    const {filter} = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = products.filter(item => {
      return (item.productDesc && item.productDesc.toLowerCase().includes(lowercasedFilter)) || 
             (item.productText && item.productText.toLowerCase().includes(lowercasedFilter));
    });

    return (
      <div className="col-md-12">
        <div className="products-header row">
          <h3 className="clearfix">
          <div className="col-sm-6 pull-left">Products</div>
          <div className="filter-wrapper col-sm-6 pull-right">
            <FormControl
              type="text"
              placeholder="filter products"
              value={filter} 
              onChange={this.handleChange}
            >
            </FormControl>
          </div>
          </h3>         
        </div>
        
        {!products && productState.isFetching && <p>Loading products....</p>}
        {products.length <= 0 && !productState.isFetching && (
          <p>No Products Available. Add A Product to List here.</p>
        )}
        {products && products.length > 0 && !productState.isFetching && (
          <div className="products-list row">
            {filteredData.map((product, i) => (
              <div className="col-sm-3" key={i}>
                <Panel>
                  <img src="https://dummyimage.com/600x400/cdcdcd/0011ff?text=Product+Image" alt=""/>
                    <h3 className="h3 clearfix">
                      <span className="col-sm-8 top-panel title" title={product.productText}>{product.productText}</span>
                      <span className="col-sm-4 pull-right top-panel price">{product.productPrice}$</span>
                    </h3>
                  <Panel.Body>
                    <p className="product-desc">
                      {product.productDesc}
                    </p>
                  </Panel.Body>
                  <Panel.Footer>
                    <Button
                      onClick={() => this.showEditModal(product)}
                      bsStyle="info"
                      bsSize="xsmall"
                      className="mrIcon"
                    >
                      <Glyphicon glyph="pencil" />
                    </Button>
                    <Button
                      onClick={() => this.showDeleteModal(product)}
                      bsStyle="danger"
                      bsSize="xsmall"
                      className="mrIcon"
                    >
                      <Glyphicon glyph="trash" />
                    </Button>
                    <Link to={`/${product._id}`}>View Details</Link>
                  </Panel.Footer>
                </Panel>
              </div>
            ))}
          </div>
        )}

        {/* Modal for editing product */}
        <Modal
          show={productState.showEditModal}
          onHide={this.hideEditModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Edit Your Product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12">
              {editProduct && (
                <ProductEditForm
                  productData={editProduct}
                  editProduct={this.submitEditProduct}
                />
              )}
              {editProduct && productState.isFetching && (
                <Alert bsStyle="info">
                  <strong>Updating...... </strong>
                </Alert>
              )}
              {editProduct && !productState.isFetching && productState.error && (
                <Alert bsStyle="danger">
                  <strong>Failed. {productState.error} </strong>
                </Alert>
              )}
              {editProduct &&
                !productState.isFetching &&
                productState.successMsg && (
                  <Alert bsStyle="success">
                    Book <strong> {editProduct.productText} </strong>
                    {productState.successMsg}
                  </Alert>
                )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideEditModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/* Modal for deleting product */}
        <Modal
          show={productState.showDeleteModal}
          onHide={this.hideDeleteModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Delete Your Book
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {productState.productToDelete &&
              !productState.error &&
              !productState.isFetching && (
                <Alert bsStyle="warning">
                  Are you sure you want to delete this product{" "}
                  <strong>{productState.productToDelete.productText} </strong> ?
                </Alert>
              )}
            {productState.productToDelete && productState.error && (
              <Alert bsStyle="warning">
                Failed. <strong>{productState.error} </strong>
              </Alert>
            )}

            {productState.productToDelete &&
              !productState.error &&
              productState.isFetching && (
                <Alert bsStyle="success">
                  <strong>Deleting.... </strong>
                </Alert>
              )}

            {!productState.productToDelete &&
              !productState.error &&
              !productState.isFetching && (
                <Alert bsStyle="success">
                  Product <strong>{productState.successMsg} </strong>
                </Alert>
              )}
          </Modal.Body>
          <Modal.Footer>
            {!productState.successMsg && !productState.isFetching && (
              <div>
                <Button onClick={this.cofirmDeleteProduct}>Yes</Button>
                <Button onClick={this.hideDeleteModal}>No</Button>
              </div>
            )}
            {productState.successMsg && !productState.isFetching && (
              <Button onClick={this.hideDeleteModal}>Close</Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
