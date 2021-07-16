import logo from './logo.svg';
import './App.css';
import ProductDetails from './product-details';
import ProductList from './product-page';
import { Component } from 'react';

class App extends Component {
  state = {
    ProductList:[
      {
        name: 'Samsung',
        description: 'Phone from South Korea',
        price: '90000',
        category: 'Smartphone',
      },
{
name: 'Oneplus',
description: 'Oneplus from china',
price: '70000',
category: 'Smartphone',
},
{
name: 'Iphone',
description: 'Phone from U.S.A.',
price: '100000',
category: 'Smartphone',
      }
    ],
    currentProduct:null,
  };
  selectProduct = (data) =>{
    this.setState({...this.state,currentProduct:data});
  };
  backToList = ()=>{
    this.setState({...this.state, showProductList:null});

  }
  render(){
    //console.log(this.state.currentProduct,'====')
    return  (  
    <>
    {
      !this.state.currentProduct && <ProductList productListData={this.state.ProductList} selectProduct={this.selectProduct}/>
    }
      
      {
        this.state.currentProduct && <ProductDetails currentProduct={this.state.currentProduct}/>
      }
      
      </>);

  }
  
  
  
}

export default App;
