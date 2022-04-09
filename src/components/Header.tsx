import React from 'react'
import Menu from './Menu'
import Search from './Search'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isAuthenticate } from '../utils/localStorage'


const Header = () => {
    const { user } = isAuthenticate();
    console.log(user);

    return (


        <div className="top-header leading-5">
            <div className="container flex flex-wrap justify-items-start items-center mx-auto w-full">


                <div className="mr-32   ">
                    <a href="index.html"><img src="images/logo.png" /></a>
                </div>
                <div className="mr-20 ">

                    <Menu />

                </div>

                <div className="mr-96">
                    <div className="cart">
                        <a href="cart.html"><i className="cart" /></a>
                    </div>

                </div>
                <div className="mr-10 ">
                    {user ?

                        <div className="flex flex-nowrap">
                            <div className="text-3xl">Xin chào<a href="" id="email">{user.name}</a></div>
                            <div className="bg-cyan-600 hover:bg-cyan-100 text-black font-bold py-2 px-4 rounded-full h-10 ml-4"><a href="">Đăng Xuất</a>

                            </div>
                        </div> :

                        <div>
                            <div className="sign-in">
                                <a href="signin">Đăng nhập</a>
                            </div>
                            <div className="sign-up1 ">
                                <a href="signup">Đăng kí</a>
                            </div>
                        </div>
                    }



                </div>

            </div>

        </div>



    )


}

export default Header


