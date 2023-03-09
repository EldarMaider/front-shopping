import './NoItemsInCart.css'
import { Link } from 'react-router-dom'

function NoItemsInCart() {
  return (
    <div className='noItemsInCart'>
        <h2 className='noItemsText'>No items in list</h2>
        <div className='noItemsLinkWrapper'><Link className='noItemsLink' to='/' >Go to list of products</Link></div>
    </div>
  )
}

export default NoItemsInCart
