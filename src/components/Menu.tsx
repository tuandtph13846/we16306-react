import React from 'react'

type Props = {}

const Menu = (props: Props) => {
    return (
        <> <div className="flex  justify-center">

            <label className="mobile_menu" htmlFor="mobile_menu">
                <span>Menu</span>
            </label><input id="mobile_menu" type="checkbox" />
            <ul className="nav">
                <li className="active"><a href="/">Trang chủ</a></li>
                <li className="active"><a href="/product">Sản phẩm</a></li>


                <li className="active"><a href="#">Giới thiệu</a></li>
                <li className="active"><a href="/admin">Admin</a></li>
            </ul>
        </div>
        </>
    )
}

export default Menu