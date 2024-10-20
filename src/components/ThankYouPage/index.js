import {Link} from 'react-router-dom'

import './index.css'

const ThankyouPage = () => (
  <>
    <div className="t-p-main-div">
      <p className="your-cart-p">Your Cart</p>
      <hr className="t-p-hr-line" />
      <h1 className="t-p-h1">Congratulations Order Placed!</h1>
      <img
        src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1729436518/plant_1_svizen.png"
        alt="plant"
        className="t-q-plant-img"
      />
      <p className="t-y-p">
        Thank you for choosing Chaperone services. We will soon get in touch
        with you!
      </p>
      <Link to="/" className="link-element">
        <button type="button" className="c-s-btn">
          Continue Shopping
        </button>
      </Link>
    </div>
  </>
)

export default ThankyouPage
