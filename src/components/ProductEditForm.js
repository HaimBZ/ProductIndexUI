import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

const ProductEditForm = (props) => {
  return (
    <form
      className="form form-horizontal"
      id="EditProductForm"
      onSubmit={props.editProduct}
    >
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Product: </ControlLabel>
            <input type="hidden" value={props.productData._id} name="id" />
            <FormControl
              type="text"
              placeholder="Enter product"
              name="productText"
              defaultValue={props.productData.productText}
              autoComplete="off"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Price: </ControlLabel>
            <FormControl
              type="number"
              placeholder="Enter price"
              name="productPrice"
              defaultValue={props.productData.productPrice}
              autoComplete="off"
              step="any"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Description: </ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter description"
              name="productDesc"
              defaultValue={props.productData.productDesc}
              autoComplete="off"
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};

export default ProductEditForm;
