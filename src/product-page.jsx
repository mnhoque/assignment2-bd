import React,{Component} from 'react';

class ProductList extends Component{
    render(){
        return(
            <>
        {
        
        this.props.productListData.map((product) =>{
          return <div style ={{
              marginBottom: '10px',
              border :'1px solid red'
          }}
          onClick={()=>this.props.selectProduct(product)}
          >
              <p>Product Name: {product.name}</p>
              <p>Product Description: {product.description}</p>
              <p>Product Price: {product.price}</p>
              <p>Product Name: {product.category}</p>
          </div>
        }) 
    
          
      }
     </>

        )
        
     

    }

}
export default ProductList;