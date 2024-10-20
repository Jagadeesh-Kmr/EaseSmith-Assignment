import CartItem from '../CartItem'

import './index.css'

const cartList = [
  {
    id: 0,
    name: 'Monsterra',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
  {
    id: 1,
    name: 'Platone Bird',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
  {
    id: 2,
    name: 'Spider',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359842/daa994fdb511faa82ea79a5ef58fbb1a_xwq4vw.png',
  },
  {
    id: 3,
    name: 'Monsterra',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
  {
    id: 4,
    name: 'Platone Bird',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
]

const CartListView = () => (
  <>
    <ul className="cart-list-ul">
      {cartList.map(eachItem => (
        <CartItem key={eachItem} cartItemDetails={eachItem} />
      ))}
    </ul>
  </>
)

export default CartListView
