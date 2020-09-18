import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import Logo from './svg/482467f1e59cee46811ddeee3b547d37.jpg'


export class Header extends Component {

    state = {
        toggle: false
    }

    // Responsive ekranda toggle menu açılıp kapanması
    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }
    render() {
        const {toggle} = this.state;
        return (
            <header className="mt-2 min-h-full flex justify-around items-center overflow-hidden">

                {/* Açılır kapanır menü */}
                <div className="menu cursor-pointer hidden" onClick={this.menuToggle}> 
                    <img src={Menu} alt="" className="w-5"/>
                </div>

                {/* Adidas Logo */}
                <div className="logo flex">

                    <img src={Logo} alt="" className="w-7 h-5 mt-1 mr-1"/>
                    <h1><a href="#" className="no-underline uppercase text-black">Adidas</a></h1>
                    
                </div>

                {/* Nav-Bar */}
                <nav className="flex">
                    <ul className={toggle ? "toggle" : ""}>
                        <li className="no-underline inline-block"><a className="no-underline uppercase text-gray-600 py-0 px-3 hover:text-blue-400" href="#">ERKEK</a></li>
                        <li className="no-underline inline-block"><a className="no-underline uppercase text-gray-600 py-0 px-3 hover:text-blue-400" href="#">KADIN</a></li>
                        <li className="no-underline inline-block"><a className="no-underline uppercase text-gray-600 py-0 px-3 hover:text-blue-400" href="#">ÇOCUK</a></li>
                        <li className="no-underline inline-block"><a className="no-underline uppercase text-gray-600 py-0 px-3 hover:text-blue-400" href="#">SPOR</a></li>
                        <li className="no-underline inline-block"><a className="no-underline uppercase text-gray-600 py-0 px-3 hover:text-blue-400" href="#">İNDİRİMLİ ÜRÜNLER</a></li>
                        <li className="no-underline inline-block"><a className="no-underline uppercase text-gray-600 py-0 px-3 hover:text-blue-400" href="#">GİRİŞ / KAYIT</a></li>
                        <li className="no-underline inline-block close cursor-pointer hidden" onClick={this.menuToggle}>
                            <img src={Close} alt="" className="w-5"/>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
