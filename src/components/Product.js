import React from 'react';
import { Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default class Product extends React.Component {
  componentDidMount(){
    this.props.mappedfetchProductById(this.props.params.id);
  }

  render(){
    const productState = this.props.mappedProductState;
    return(
      <div className="productDetail">
       <h2>Product Detail</h2>
         {!productState.product && productState.isFetching &&
           <div>
             <p>Loading product....</p>
           </div>
         }
       {productState.product && !productState.isFetching &&
         <div>
           <h3>{productState.product.productText}</h3>
           <div><b>price: {productState.product.productPrice}</b></div>
           <p>{productState.product.productDesc}</p>
           <div>
             <Nav className="btn btn-default">
              <LinkContainer to={{ pathname: "/", query: {} }}>
                <NavItem eventKey={1}>Return to product list</NavItem>
              </LinkContainer>
             </Nav>
            </div>
         </div>
       }
      </div>
    );
  }
}
