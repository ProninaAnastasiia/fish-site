import React from 'react'
import { Card } from "./home";

export default function Products() {
    return (
        <div className="content">
            <div className="body">
                <h1>Продукция</h1>
                <p>Лучшая вяленая и копченая рыба собственного производства по хорошей цене.</p>
            </div>
            <div className="wrapper">
                <Card img='/images/Вобла 18+ вяленая.jpg'
                    title='Вобла 18+ вяленая'
                    price='405 ₽/1кг' />
                <Card img='/images/Вобла 18+ вяленая.jpg'
                    title='Густера Цимлянская вяленая'
                    price='160 ₽/1кг' />
                <Card img='/images/Камбала-ерш «По-царски» вяленая.jpg'
                    title='Камбала Дальневосточная М вяленая'
                    price='450 ₽/1кг' />
                <Card img='/images/Камбала-ерш «По-царски» вяленая.jpg'
                    title='Камбала Дальневосточная с икрой вяленая'
                    price='900 ₽/1кг' />
                <Card img='/images/Камбала-ерш «По-царски» вяленая.jpg'
                    title='Камбала-ерш c икрой вяленая'
                    price='600 ₽/1кг' />
                <Card img='/images/Камбала-ерш «По-царски» вяленая.jpg'
                    title='Камбала-ерш «По-царски» вяленая'
                    price='945 ₽/1кг' />
                <Card img='/images/Лещ Цимлянский 0,5-0,6 кг вяленый.jpg'
                    title='Карась Цимлянский вяленый'
                    price='105 ₽/1кг' />
                <Card img='/images/Лещ Цимлянский 0,5-0,6 кг вяленый.jpg'
                    title='Карась пласт Цимлянский холодного копчения'
                    price='185 ₽/1кг' />
                <Card img='/images/Лещ Цимлянский 0,5-0,6 кг вяленый.jpg'
                    title='Лещ Цимлянский вяленый'
                    price='360 ₽/1кг' />
                <Card img='/images/Лещ Цимлянский 0,5-0,6 кг вяленый.jpg'
                    title='Лещ Цимлянский холодного копчения'
                    price='360 ₽/1кг' />
                <Card img='/images/Вобла 18+ вяленая.jpg'
                    title='Окунь Цимлянский вяленый'
                    price='240 ₽/1кг' />
                <Card img='/images/Вобла 18+ вяленая.jpg'
                    title='Сазан Цимлянский потрошенный вяленый'
                    price='190 ₽/1кг' />
                <Card img='/images/Вобла 18+ вяленая.jpg'
                    title='Сазан пласт Цимлянский холодного копчения'
                    price='200 ₽/1кг' />
                <Card img='/images/Вобла 18+ вяленая.jpg'
                    title='Судак Цимлянский вяленый'
                    price='360 ₽/1кг' />
                <Card img='/images/Вобла 18+ вяленая.jpg'
                    title='Чехонь Цимлянская вяленая'
                    price='450 ₽/1кг' />
            </div>
        </div>
    )
}