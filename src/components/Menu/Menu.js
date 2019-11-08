import React from 'react';
import './../Menu/Menu.css'
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: "Trang chủ",
        to: '/',
        exact: true
    },
    {
        name: "Quản lý sản phẩm",
        to: '/product-list',
        exact: false
    },
]
const Menulink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match}) => {
                var active = match ? 'active-1' : '';
                var check = match ? 'check-match': '';
                return (
                    <li className={`${active} item-header`}>
                            <span className={check}></span>
                            <Link to={to}>
                                {label}
                            </Link>
                        </li>
                )
                
            }}

        />
    )
}

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div className="color-background">
                    <a  href="/#">CALL API</a>
                    <ul >
                       {this.showMenus(menus)}
                    </ul>
                </div>
            </div>
        )
    }
    showMenus=(menus)=>{
        var result = null;
        if(menus.length>0){
            result=menus.map((menu,index)=>{
                return (
                    <Menulink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }
}

export default Menu;
