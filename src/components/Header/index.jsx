import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Header = () => {
    return (
        <>
            <header className='site-header'>
                <div className='container'>
                    <div className='site-header__wrapper'>
                        <div className='site-header__start'>
                            <Link to='/home'>
                                <img
                                    className='site-header__logo'
                                    src={logo}
                                    width={52}
                                    height={55}
                                    alt='MaxWay'
                                />
                            </Link>

                            <ul className='site-header__list'>
                                <li className='site-header__item'>
                                    <Link
                                        className='site-header__link'
                                        to='/menu'>
                                        Menyu
                                    </Link>
                                </li>
                                <li className='site-header__item'>
                                    <Link
                                        className='site-header__link'
                                        to='/for-children'>
                                        Bolalar uchun
                                    </Link>
                                </li>
                                <li className='site-header__item'>
                                    <Link
                                        className='site-header__link'
                                        to='/filiallar'>
                                        Filiallar
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className='site-header__end'>
                            <a
                                className='site-header__tel-link'
                                href='tel:+998712005400'>
                                <span className='site-header__tel'>
                                    (+99871)
                                </span>
                                <p className='site-header__tel-num'>
                                    200-54-00
                                </p>
                            </a>

                            <span className="site-header__end-line"></span>

                            <a className='site-header__cart-link' href='/cart'>
                                <p className='site-header__cart-title'>
                                    Korzina
                                </p>
                                <span className='site-header__cart-sum'>
                                    125,000 UZS
                                </span>
                            </a>
                        </div>

                        <button className="site-header__menu-btn">
                            
                        </button>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    );
};

export default Header;
