import React from 'react';

function AboutUs() {
  return (
    <div id="au-container">
    <div id="au-content">
      <p id="main-text-bl1">Добро пожаловать в мир умного<br />управления отходами c Qaldyq !</p>
      <div className="us-container">
        <div className="p-container">
        <p id="t-text"><b>
        Qaldyq - это интеллектуальная<br/>
        система сортировки мусора,<br/>
        делающая процесс утилизации<br/>
        отходов простым, эффективным<br/>
        и приятным.
        </b>
        </p>
        <p id="b-text">
                        Мы представляем инновационное решение для <br/>
                        городской среды - смарт-мусорные баки Qaldyq,<br/>
                        которые станут вашим надежным помощником в<br/>
                        сортировке отходов.
        </p>
        <a id="Contact_us" href="https://t.me/qaldyqbot" target="_blank"> <img src="public/Contact_us.svg" alt="Contact_us"/> </a>
        </div>
        <div className="cans-container">
            <img src="public/cans.svg" alt="cans"/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
