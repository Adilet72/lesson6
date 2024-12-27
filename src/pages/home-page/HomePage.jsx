import React, {useEffect, useState} from 'react';
import {Fire, Pizza, Sushi, Drinks, Snacks, Combo, Desert, Sauces, BgImage, PizzaKarobka} from "../../assets/index.js"
import './HomePage.css'
const menu = [
    {
        icon: Fire,
        name: 'Акции',
    },
    {
        icon: Pizza,
        name: 'Пицца',
        id: 'pizza',
    },
    {
        icon: Sushi,
        name: 'Суши',
        id: 'sushi',
    },
    {
        icon: Drinks,
        name: 'Напитки',
        id: 'drinks',
    },
    {
        icon: Snacks,
        name: 'Закуски',
        id: 'snacks',
    },
    {
        icon: Combo,
        name: 'Комбо',
        id: 'combo',
    },
    {
        icon: Desert,
        name: 'Десерты',
        id: 'desert',
    },
    {
        icon: Sauces,
        name: 'Соусы',
        id: 'sauces',
    },
]

const sales = [
    {
        bgImage: BgImage,
        text: "3 средние пиццы от 999 рублей"
    },
    {
        bgImage: PizzaKarobka,
        text: "Кэшбек 10% на самовывоз (доставка)"
    },
    {
        bgImage: BgImage,
        text: "3 средние пиццы от 999 рублей"
    },
    {
        bgImage: PizzaKarobka,
        text: "Кэшбек 10% на самовывоз (доставка)"
    },
]

const url = 'https://676ce7e30e299dd2ddfdcd54.mockapi.io/api/v1/pizza'


const HomePage = () => {
    const [pizza, setPizza] = useState([])

    const fetchPizza = async () => {
        const response = await fetch(url);
        const pizza = await response.json();
        setPizza(pizza)
        console.log(pizza)
    }

    useEffect(() => {
        fetchPizza();
    }, [])

    if (pizza.length === 0) {
        return <h1 className={"text-center text-[44px]"}>loading...</h1>
    }

    return (
        <div className={"container w-[1680px] flex items-center justify-center mx-auto pt-[30px] bg-[#F9F9F9]"}>
            <div className={"mx-auto"}>
                <div className="flex gap-[30px]">
                    {menu.map((m) => {
                        return (
                            <div
                                key={m.name} className={"w-[135px] h-[104px] bg-white border rounded-[12px] flex items-center justify-center flex-col"}>
                                <img src={m.icon} alt="photo"/>
                                <p>{m.name}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={" flex mx-auto"}>
                    {sales.map((s, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    backgroundImage: `url(${s.bgImage})`,
                                    backgroundSize: "cover",
                                    margin: "30px  15px",
                                    display: "flex",
                                    alignItems: "end",
                                    borderRadius: "12px",
                                }}
                                className={"w-[300px] h-[343px] p-[20px]"}>
                                <p className={"text-white text-[20px] font-[600] w-[220px]"}>  {s.text} </p>
                            </div>
                        )
                    })}
                </div>
                <section id={"pizza"}>
                    <h2 className={"mb-[32px]"}>Pizza <button>Филтр</button></h2>
                    <div className={"flex flex-wrap gap-[30px]"}>
                        {pizza[0].pizza.map( pizzaItem => {
                            return (
                                <div className={"adi0"}>
                                    <img className={"adi1"} src={pizzaItem.image} alt=""/>
                                    <h3 className={"ad2"} key={pizzaItem.name}>{pizzaItem.name}</h3>
                                    <p className={"adi3"}>{pizzaItem.desc}</p>
                                    <div className={"adi4"}>
                                        <button className={"adi5"}>Выбрать</button>
                                        <h2 className={"adi6"}>от{pizzaItem.price}₽</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section id={"sushi"}>
                    <h2 className={"mb-[32px]"}>Sushi <button>Филтр</button></h2>
                    <div className={"flex flex-wrap gap-[30px]"}>
                        {pizza[0].sushi.map(sushiItem => {
                            return (
                                <div className={"adi0"}>
                                    <img className={"adi1"} src={sushiItem.image} alt=""/>
                                    <h3 className={"adi2"} key={sushiItem.name}>{sushiItem.name}</h3>
                                    <p className={"adi3"}>{sushiItem.desc}</p>
                                    <div className={"adi4"}>
                                        <button className={"adi5"}>Выбрать</button>
                                        <h2 className={"adi6"}>от{sushiItem.price}₽</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section id={"drinks"}>
                    <h2 className={"mb-[32px]"}>Drinks <button>Филтр</button></h2>
                    <div className={"flex flex-wrap gap-[30px]"}>
                        {pizza[0].drinks.map( drinksItem => {
                            return (
                                <div className={"adi0"}>
                                    <img className={"adi1"} src={drinksItem.image} alt=""/>
                                    <h3 className={"adi2"} key={drinksItem.name}>{drinksItem.name}</h3>
                                    <p className={"adi3"}>{drinksItem.desc}</p>
                                    <div className={"adi4"}>
                                        <button className={"adi5"}>Выбрать</button>
                                        <h2 className={"adi6"}>от{drinksItem.price}₽</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section id={"snacks"}>
                    <h2 className={"mb-[32px]"}>Snacks <button>Филтр</button></h2>
                    <div className={"flex flex-wrap gap-[30px]"}>
                        {pizza[0].snacks.map(snacksItem => {
                            return (
                                <div className={"adi0"}>
                                    <img className={"adi1"} src={snacksItem.image} alt=""/>
                                    <h3 className={"adi2"} key={snacksItem.name}>{snacksItem.name}</h3>
                                    <p className={"adi3"}>{snacksItem.desc}</p>
                                    <div className={"adi4"}>
                                        <button className={"adi5"}>Выбрать</button>
                                        <h2 className={"adi6"}>от{snacksItem.price}₽</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section id={"combo"}>
                    <h2 className={"mb-[32px]"}>Combo <button>Филтр</button></h2>
                    <div className={"flex flex-wrap gap-[30px]"}>
                        {pizza[0].combo.map(comboItem => {
                            return (
                                <div className={"adi0"}>
                                    <img className={"adi1"} src={comboItem.image} alt=""/>
                                    <h3 className={'adi2'} key={comboItem.name}>{comboItem.name}</h3>
                                    <p className={"adi3"}>{comboItem.desc}</p>
                                    <div className={"adi4"}>
                                        <button className={"adi5"}>Выбрать</button>
                                        <h2 className={"adi6"}>от{comboItem.price}₽</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section id={"desert"}>
                    <h2 className={"mb-[32px]"}>Desert <button>Филтр</button></h2>
                    <div className={"flex flex-wrap gap-[30px]"}>
                        {pizza[0].desserts.map(dessertsItem => {
                            return (
                                <div className={"adi0"}>
                                    <img className={"adi1"} src={dessertsItem.image} alt=""/>
                                    <h3 className={"adi2"} key={dessertsItem.name}>{dessertsItem.name}</h3>
                                    <p className={"adi3"}>{dessertsItem.desc}</p>
                                    <div className={"adi4"}>
                                        <button className={"adi5"}>Выбрать</button>
                                        <h2 className={"adi6"}>от{dessertsItem.price}₽</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section id={"sauces"}>
                    <h2 className={"mb-[32px]"}>Sauces <button className={"ml-[1100px] bg-white w-[126px] h-[40px]"}>Филтр</button></h2>
                    <div className={"flex flex-wrap gap-[30px]"}>
                    {pizza[0].sauces.map(saucesItem => {
                            return (
                                <div className={"adi0"}>
                                    <img className={"adi1"} src={saucesItem.image} alt=""/>
                                    <h3 className={"adi2"} key={saucesItem.name}>{saucesItem.name}</h3>
                                    <p className={"adi3"}>{saucesItem.desc}</p>
                                    <div className={"adi4"}>
                                        <button className={"adi5"}>Выбрать</button>
                                        <h2 className={"adi6"}>от{saucesItem.price}₽</h2>
                                    </div>
                                </div>
                            )
                    })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomePage;
