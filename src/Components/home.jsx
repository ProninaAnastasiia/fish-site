import React from 'react'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
    <div className="content"> 
        <Helmet>
          <title>Копченая рыба оптом - продажа по лучшей цене</title>
          <meta name="description" content="Компания Торговый дом Любови Власовой предлагает большой ассортимент вяленой и копченой рыбы по доступным ценам." />
        </Helmet>     
        <h1>Торговый дом Любови Власовой</h1>
        <p>Наша компания по оптовой торговле вяленой и копченой рыбой предлагает покупателям широкий выбор снековой продукции наивысшего качества.</p>
        <p>Основной ассортимент представлен из Мурманской, Цимлянской и Дальневосточной рыбы.</p>
      
      <div className="wrapper">
          <Card img='/images/Густера вяленая.jpg'
            title='Густера Цимлянская вяленая'
              price='160 ₽/кг'/>
          <Card img='/images/Камбала-ерш с икрой.jpg'
            title='Камбала-ерш с икрой вяленая'
              price='600 ₽/кг'/>
          <Card img='/images/Карась вяленый.jpg'
            title='Карась Цимлянский вяленый'
              price='105 ₽/кг'/>
      </div>
      <MoreButton />
    </div>
    )
}

export function Card(props) {
    return (
      <div className="card">
        <img src={props.img} alt={props.title} className="card_image" />
          <p className="card_title">{props.title}</p>
          <p className="card_price">{props.price}</p>
      </div>
    );
  }
  
  function MoreButton() {  
    return (
      <Link to="/products">
        <button className="moreBtn">Показать полный прайс-лист</button>
      </Link>
    );
  }