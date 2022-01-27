import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils.js';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) =>(
	<div className="header">
		<Link className="logo-container" to='/'>
			<Logo className="logo"/>
		</Link>
		<div className="options">
			<Link className="option" to ={{pathname:"/shop"}}>
				SHOP
			</Link>
			<Link className="option" to ="/contact">
				CONTACT
			</Link>
			<Link>
				{
					currentUser
					?
					<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
					:
					<Link className="option" to="/signin">SIGN IN</Link>
				}
			</Link>
			<CartIcon/>
		</div>
		{
			hidden?null:<CartDropDown/>
		}
	</div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
	currentUser:currentUser,
	hidden
})

export default connect(mapStateToProps)(Header);