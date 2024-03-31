import React from 'react';

function Products() {
    return (
        <div id="pr-content">
            <div className="products1">
            <p id="top-text-second-slide">
                Каждый мусорный бак Qaldyq <br />
                оборудован сенсорным <br />
                экраном, который позволяет <br />
                пользователям легко выбирать <br />
                категорию мусора для <br />
                сортировки. <br />
            </p>
            <img src="../Group 1.svg" alt="image1" id="image1" />
            </div>
            <div className="products2">
            <p id="bot-text-second-slide">
                Qaldyq использует чистую энергию солнца <br />
                благодаря встроенным солнечным панелям. <br />
                Это не только делает систему экологически <br />
                чистой, но и обеспечивает независимое <br />
                энергоснабжение в любое время суток. <br />
            </p>
            <img src="../solar_panel.svg" alt="solar_panel" id="solar_panel" />
            </div>
        </div>
    );
}

export default Products;