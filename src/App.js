import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'
import CartContext from './context/CartContext'
import Home from './components/Home'
import ThankyouPage from './components/ThankYouPage'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {cartList: []}

  addCartItem = () => {}

  deleteCartITem = () => {}

  render() {
    const {cartList} = this.state
    return (
      <>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            deleteCartITem: this.deleteCartITem,
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/thankyouPage/:id" component={ThankyouPage} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </>
    )
  }
}

export default App
