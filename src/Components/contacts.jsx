import React from 'react'

export default function Contacts() {
    return (
        <div className="content">
            <h1>Контактная информация</h1>
            <p>Для оформления заказа, пожалуйста, свяжитесь с нами любым удобным способом.</p>
            <br></br>
            <div className="contacts">
                <p>По номеру телефона: </p>
                <a href="tel:89009570202">8 (900) 957-02-02</a>
            </div>
            <br></br>
            <div className="contacts">
                <p>Напишите на почту: </p>
                <a href="mailto:nautilusrus@mail.ru">nautilusrus@mail.ru</a>
            </div>
            

        </div>
    )
}
