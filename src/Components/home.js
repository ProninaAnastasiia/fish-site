import React from 'react'

export default function Home() {
    return (
    <div className="content">      
      <div className="body">
        <h1>Торговый Дом Любови Власовой</h1>
        <p>Наша компания по оптовой торговле вяленой и копченой рыбой предлагает покупателям широкий выбор снековой продукции наивысшего качества.</p>
        <p>Основной ассортимент представлен из Мурманской, Цимлянской и Дальневосточной рыбы.</p>
      </div>
      <div className="wrapper">
        <Card img='/images/Камбала-ерш «По-царски» вяленая.jpg'
              title='Камбала-ерш «По-царски» вяленая'
              price='945 ₽/1кг'/>
        <Card img='/images/Лещ Цимлянский 0,5-0,6 кг вяленый.jpg'
              title='Лещ Цимлянский вяленый'
              price='360 ₽/1кг'/>
        <Card img='/images/Вобла 18+ вяленая.jpg'
              title='Вобла 18+ вяленая'
              price='405 ₽/1кг'/>
      </div>
      <MoreButton />
    </div>
    )
}

export function Card(props) {
    return (
      <div className="card">
          <img src={props.img} class="card_image" />
          <p className="card_title">{props.title}</p>
          <p className="card_price">{props.price}</p>
      </div>
    );
  }
  
  function MoreButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button className="moreBtn" onClick={handleClick}>Показать больше продукции</button>
    );
  }