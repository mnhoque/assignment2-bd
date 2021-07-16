import React,{Component} from 'react';

class ProductDetails extends Component{
  
  render(){
      return (
        <div >
          <p>Product Name: {this.props.currentProduct?.name}</p>
          <p>Product Description: {this.props.currentProduct?.description}</p>
          <p>Product Price: {this.props.currentProduct?.price}</p>
          <p>Product Name: {this.props.currentProduct?.category}</p>
          <button onClick={this.props.backToList}>Back to list</button>
      </div>
      );
  }
    
}
export default ProductDetails;