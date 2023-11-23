import React from "react";
import '../css/header.css'

function Header(props) {
    return (
        <div className="header">
            {console.log('asdfds')}
            <div className="hrefs_header">
                <button onClick={props.onCloseClick} className="close_header"></button>
                <a className="href_header_recepting_point" href="/">Пункты приёма</a>
                <a className="href_header_category" href="/Category">Категории</a>
            </div>
        </div>
    )
}

export default Header