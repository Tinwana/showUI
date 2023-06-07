import styles from './navbar.module.scss'
import classNames from 'classnames/bind'
import Logo from '../../assets/pizzaLogo.png'
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

export default function Navbar() {
    return (
<div className={cx('navbar')}>
        <div className={cx("nav-brand")}>
            <img src={Logo} alt="logo" />
        </div>
        <div className={cx("nav-items")}>
            <Link to='/' >Home</Link>
            <Link to='/Menu' >Menu</Link>
            <Link to='/About' >About</Link>
            <Link to='/Contact' >Contact</Link>
        </div>
    </div>
    );
    
}
