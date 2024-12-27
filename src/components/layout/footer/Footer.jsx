const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 py-6 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                    <div className="flex items-center space-x-2">
                        <img className="text-red-500 text-2xl" src="/src/assets/Group 2.pages.svg" alt="icon"/>
                        <span className="font-bold text-lg">Куда пицца</span>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-2">Куда пицца</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="hover:text-gray-800">О компании</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-800">Пользовательское соглашение</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-800">Условия гарантии</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-2">Помощь</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="#" className="hover:text-gray-800">Ресторан</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-800">Контакты</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-800">Поддержка</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-800">Отследить заказ</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-2">Контакты</h3>
                    <ul className="space-y-1">
                        <li>
                            <a href="tel:+79262231011" className="flex gap-3 mb-3 hover:text-gray-800">
                                <img src="/src/assets/Group 55-pages.svg" alt=""/>+7 (926) 223-10-11
                            </a>
                        </li>
                        <li className={"flex gap-3"}><img src="/src/assets/Group 5-pages.svg" alt=""/>Москва, ул. Юных Ленинцев, д.99</li>
                        <li className="flex space-x-4">
                            <h6 className={"flex gap-3 mt-3"}><img src="/src/assets/Subtract-pages.svg" alt=""/>Facebook</h6>
                            <h6 className={"flex gap-3 mt-3"}><img src="" alt=""/>Instagram</h6>
                        </li>
                    </ul>
                </div>
            <div className="mt-6 text-sm text-gray-500">
                &copy; Copyright 2024 — Куда Пицца
            </div>
            </div>
        </footer>
    );
};

export default Footer;