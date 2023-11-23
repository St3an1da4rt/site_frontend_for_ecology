import React, {useState} from "react";
import Header from "./Header";
import "../css/main.css"
import Slider from 'react-slick';
import Slide from './Slider';

const titles = [
    'Макулатура',
    'Коричневые',
    'зеленые',
    'бесцветные стеклянные бутылки и банки',
    'Пластиковые ящики ПНД',
    'Батарейки',
    'Канистры ПНД',
    'ПВД',
    'Стретч-пленка ПВД',
    'Пленка ПВД',
    'Крышки ПНД',
    'ПВД',
    'ПП',
    'Белые ПЭТ-бутылки от напитков',
    'Пакеты фасовочные и пакеты-майки ПНД',
    'ПВД',
    'ПЭТ-бутылки от напитков и растительного масла',
    'Алюминиевые банки'
  ];

function Main() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
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
                <div className="ecology_div_p"><p><h1>ЭКОЛОГИЯ</h1>Работа по нацпроекту, направленному на охрану окружающей среды, ведётся по следующим направлениям: утилизация и переработка отходов, ликвидация свалок, сохранение лесов и водоемов, снижение выбросов в атмосферу, развитие экологического туризма и экологического воспитания, сохранение биологического разнообразия</p></div>
                <div>
                    <h2>Slider</h2>
                    <Slider {...settings}>
                    {titles.map((title, index) => <Slide key={index} title={title} />)}
                    </Slider>
                </div>
            </main>
        </>
    )
}

export default Main