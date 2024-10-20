import './index.css'

const CartItem = props => {
  const {cartItemDetails} = props
  const {name} = cartItemDetails

  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>
    </>
  )
}

export default CartItem
