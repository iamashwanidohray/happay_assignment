import React, {useState} from 'react';
import './App.css';
import 'h8k-components';
import NavBar from './components/navbar';
import ProductList from "./components/product-list/ProductList";
// import Cart from "./components/cart";
import OrderSummary from './components/order-summary/OrderSummary';

const title = "Happay";

function App() {

        const allproducts = [...PRODUCTS].map((product, index) => {
            product.cartQuantity = 0;
            return product;
        });
        const [cart,setCart] = useState({items: [{id: 1,id: 2}]});
        const [products, setProducts] = useState([...allproducts]);

    // componentDidMount() {
    //   fetch('http://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/items.json')
    //   .then((response) => response.json())
    //   .then((findresponse)=> {
    //     console.log(findresponse);
    //     this.setState({
    //       products: findresponse
    //     })
    //   })
    // }

    // addToCart = (product) => {
    //     this.setState({
    //         ...this.state,
    //         cart : {
    //             ...this.state.cart,
    //             items: [... this.state.cart.items,  {id: product.id, item: product.name, quantity: product.cartQuantity+1}]
    //         }
    //     })
    // }

    // increaseCartQuantity=(product,id) => {
    //     console.log("its called...");
    //     console.log(id);
    //     this.setState({
    //         ...this.state,
    //         products: [
    //             ...this.state.products,
    //         ]
    //     })
    // }

      return (
          <div>
              <NavBar header={title}/>
              <ProductList products={products} />
                  {/* <Cart cart={cart}/> */}
                  <OrderSummary ordered={cart}/>
          </div>
      );
}

export const PRODUCTS = [
    {
      id: 1,
      name: "food card",
      description: "This card is used for spending on Food merchants",
      final_price: 21,
      original_price: 30,
      img_url: "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png"
    },
    {
      id: 2,
      name: "travel card",
      description: "This card is used for spending on Travel and hotel bookings",
      final_price: 20,
      img_url: "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_card.png"
    },
    {
      id: 3,
      name: "epic card",
      description: "Use this card and get benefits on every transaction",
      final_price: 40,
      img_url: "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/golden_card.png"
    },
    {
      id: 4,
      name: "happay premium card",
      description: "Use this card and get benefits on every transaction",
      final_price: 40,
      img_url: "https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/black_card.png"
    }
  ];
export default App;
