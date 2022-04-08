import React from 'react'
import Menu from './Menu'
import Search from './Search'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (

       
            <div className="top-header leading-4">
                <div className="container flex flex-wrap justify-items-start items-center mx-auto w-full">


                    <div className="mr-32   ">
                        <a href="index.html"><img src="images/logo.png" /></a>
                    </div>
                    <div className="mr-96 ">

                        <Menu />

                    </div>
                    
                    <div className="mr-60">
                        <div className="cart">
                            <a href="cart.html"><i className="cart" /></a>
                        </div>

                    </div>
                    <div className=" ">
                        <div className="sign-in">
                            <a href="signin">Đăng nhập</a>
                        </div>
                        <div className="sign-up1 ">
                            <a href="signup">Đăng kí</a>
                        </div>

                    </div>
                </div>

            </div>

       

    )
}

export default Header