import React, {useState} from "react";
import Header from "./Header";

function Main() {
    const [openHeader, setOpenHeader] = useState(false)
    function close_header(){
        setOpenHeader(false)
        // let element = document.getElementsByClassName("left_header");
        // console.log(element)
    }

    function open_header(){
        setOpenHeader(true);
        // let element = document.getElementsByClassName("left_header");
        // console.log(element)
    }


    return (
        <>
            <header>
                <button onClick={open_header} className="button_menu"></button>
                {openHeader ? <Header className="left_header" onCloseClick={close_header}/> : null}
                <div className="logo"></div>
            </header>
            <main className="main_main">
                
            </main>
        </>
    )
}

export default Main