import {Link} from 'react-router-dom'
import './index.css'

const DisplayProducts = props => {
  const {tabItems} = props
  const {
    imageUrl,
    id,
    name,
    desc,
    rating,
    actualPrice,
    discountPrice,
  } = tabItems

  return (
    <>
      <div className="tab-main-div">
        <div className="tab-item-container">
          <img src={imageUrl} alt={name} className="plant-img" />
          <Link to={`thankyouPage/${id}`}>
            <button type="button" className="view-product-btn">
              View Product
            </button>
          </Link>
        </div>
        <div className="name-div">
          <p className="plant-name">{name}</p>
          <p className="plant-desc">{desc}</p>
          <div className="rating-div">
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1708706985/IMAGE_3_ng1pn8.png"
              alt="rate"
              className="rating-img"
            />
            <p>{rating}</p>
          </div>
          <p>
            <span className="actual-price-span">{actualPrice}</span>{' '}
            {discountPrice}
          </p>
          <Link to="/cart">
            <button type="button" className="add-to-cart-btn">
              - Add to cart +
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DisplayProducts
