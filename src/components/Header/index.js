import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {CgSearch, CgProfile, CgShoppingCart} from 'react-icons/cg'

import './index.css'

import DisplayProducts from '../DisplayProducts'

const appsList = [
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
  {
    id: 5,
    name: 'Monsterra',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
  {
    id: 6,
    name: 'Platone Bird',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
  {
    idd: 7,
    name: 'Spider',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359842/daa994fdb511faa82ea79a5ef58fbb1a_xwq4vw.png',
  },
  {
    id: 8,
    name: 'Monsterra',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
  {
    id: 9,
    name: 'Platone Bird',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
  {
    id: 10,
    name: 'Monsterra',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
  {
    id: 11,
    name: 'Platone Bird',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
  {
    idd: 12,
    name: 'Spider',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359842/daa994fdb511faa82ea79a5ef58fbb1a_xwq4vw.png',
  },
  {
    id: 13,
    name: 'Monsterra',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
  {
    id: 14,
    name: 'Platone Bird',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
  {
    id: 15,
    name: 'Monsterra',
    desc: 'Indoor Plant, Low maintenance',
    rating: 4.9,
    actualPrice: '₹ 359',
    discountPrice: '₹ 299',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1729359820/7973d62829a030074ad8b6ad34_o0zd74.png',
  },
]

class Header extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResult = () => {
    const {searchInput} = this.state

    const searchResults = appsList.filter(eachApp =>
      eachApp.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults
  }

  render() {
    const {searchInput} = this.state
    const searchResult = this.getSearchResult()
    return (
      <>
        <div className="contact-div">
          <p className="shipping-p">Free Shipping on orders above 999/-</p>
          <p>Cell us on +91 9876805120</p>
        </div>
        <nav className="nav-header">
          <div>
            <div className="nav-content">
              <div className="nav-bar-mobile-logo-container">
                <li className="nav-menu-item-mobile-home">
                  <Link to="/" className="nav-link-about">
                    Home
                  </Link>
                </li>
              </div>

              <div className="nav-bar-large-container">
                <Link to="/" className="nav-link-image">
                  <img
                    src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1729311202/Group_59_2x_wmnzry.jpg"
                    alt="company logo"
                    className="header-logo"
                  />
                </Link>
                <ul className="nav-menu">
                  <div>
                    <li className="nav-menu-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                  </div>
                  <div>
                    <li className="nav-menu-item">
                      <Link to="/Plants&Pots" className="nav-link">
                        Plants & Pots
                      </Link>
                    </li>
                  </div>

                  <div>
                    <li className="nav-menu-item">
                      <Link to="/Tools" className="nav-link">
                        Tools
                      </Link>
                    </li>
                  </div>

                  <div>
                    <li className="nav-menu-item">
                      <Link to="/OurServices" className="nav-link">
                        Our Services
                      </Link>
                    </li>
                  </div>

                  <div>
                    <li className="nav-menu-item">
                      <Link to="/blog" className="nav-link">
                        Blog
                      </Link>
                    </li>
                  </div>

                  <div>
                    <li className="nav-menu-item">
                      <Link to="/ourStory" className="nav-link">
                        Our Story
                      </Link>
                    </li>
                  </div>

                  <div>
                    <li className="nav-menu-item">
                      <Link to="/Faqs" className="nav-link">
                        FAQs
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>

              <div className="cart-div">
                <div className="cart-name-div">
                  <CgProfile className="header-icon" />
                  <p className="cart-p">My Profile</p>
                </div>
                <div className="cart-name-div">
                  <CgShoppingCart className="header-icon" />
                  <p className="cart-p">My Cart</p>
                </div>
              </div>
            </div>

            <div className="search-main-div">
              <div className="search-div">
                <CgSearch className="search-icon" />
                <input
                  type="search"
                  className="search-bar-input"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                />
                <img
                  src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1729315194/image_91_dwlnmc.jpg"
                  alt="search plant"
                  className="search-plant-img"
                />
              </div>
            </div>

            <ul className="ul-list">
              {searchResult.map(eachList => (
                <DisplayProducts key={eachList.id} tabItems={eachList} />
              ))}
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default withRouter(Header)
