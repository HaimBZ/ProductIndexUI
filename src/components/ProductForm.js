import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

const ProductForm = (props) => {
  return (
    <form
      className="form form-horizontal"
      id="addProductForm"
      onSubmit={props.addProduct}
    >
      <div className="clearfix">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Product: </ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter product"
              name="productText"
              autoComplete="off"
            />
          </FormGroup>
        </div>
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Price: </ControlLabel>
            <FormControl
              type="number"
              placeholder="0.00"
              name="productPrice"
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
            />
          </FormGroup>
        </div>
      </div>
      <div className="clearfix">
        <Button type="submit" bsStyle="success" bsSize="large" block>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
