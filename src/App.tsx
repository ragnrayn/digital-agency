import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero">
        <div className="container">
          <div className="hero__content">
            <div className="content__title">
              Покращимо твою форму впродовж місяця. Тренер підбере індивідуально програму
            </div>
            <div className="content__subtitle">
              880 м2 твого розвитку!
            </div>
            <div className="content__btn">
              <button type='button'>Залишити заявку</button>
            </div>
            <div className="content__btn_title">
              Залишай заявку та отримуй -50%
              на перше тренування
            </div>
          </div>
        </div>
      </div>
      <section className="advantages">
        <div className="container">
          <div className="advantages__title">
            Наші переваги
          </div>
          <div className="advantages__subtitle">
            Ми організували зони клубу для вашого комфорту під час тренувань і відпочинку. Професійні тренажери і сучасна система вентиляції – для найвимогливіших любителів здорового способу життя
          </div>
          <div className="advantages__blocks">
            <div className="blocks__block">
              <div className="block__header">
                <img src="https://kolizey.lviv.ua/wp-content/uploads/2020/02/%D0%93%D1%80%D1%83%D0%BF%D0%B0-1-2.png" alt="" />
              </div>
              <div className="block__title">
                1500 м²
              </div>
              <div className="block__subtitle">
                Площа спортивного клубу
              </div>
            </div>
            <div className="blocks__block">
              <div className="block__header">
                <img src="https://kolizey.lviv.ua/wp-content/uploads/2020/02/%D0%93%D1%80%D1%83%D0%BF%D0%B0-1-2.png" alt="" />
              </div>
              <div className="block__title">
                Кваліфіковані тренера
              </div>
              <div className="block__subtitle">
                Заслужені майстри спорту, майстри спорту міжнародного класу, майстри спорту
              </div>
            </div>
            <div className="blocks__block">
              <div className="block__header">
                <img src="https://kolizey.lviv.ua/wp-content/uploads/2020/02/%D0%93%D1%80%D1%83%D0%BF%D0%B0-1-2.png" alt="" />
              </div>
              <div className="block__title">
                Професійне обладнання
              </div>
              <div className="block__subtitle">
                Нове професійне американське та італійське обладнання
              </div>
            </div>
          </div>
          <div className="content__btn advantages__btn">
            <button type='button'>Залишити заявку</button>
          </div>
        </div>
      </section>
      <section className='about__us'>
        <div className="container">
          <div className="about__us_body">
            <div className="about__title">
              <h3>Про <b>KOLIZEY</b></h3>
              <p>
                У спортивному клубі «KOLIZEY» — фізичні заняття обов’язково змінять ваше життя на краще. Ви маєте чудову нагоду покращити фізичну форму, скинути зайву вагу, надати більшої витривалості своїм м’язам, сформувати таке тіло, про яке ви завжди мріяли. Це додасть неабиякого поштовху вашій самооцінці та віру у свої сили.
              </p>
            </div>
            <div className="about__image">
              <img src="https://kolizey.lviv.ua/wp-content/uploads/2020/06/BUTL3365-2048x1365.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='sports__ways'>
        <div className="container">
          <div className="ways__title">
            Напрямки спортивного
            клубу <b>KOLIZEY</b>
          </div>
          <div className="ways__main">
            <div className="way">
              <div className="way__img">
                <img src="https://kolizey.lviv.ua/wp-content/uploads/elementor/thumbs/-%D0%B1%D1%96%D0%BA%D1%96%D0%BD%D1%96-osls4bzkdhin2a3lfss91s036p1ecw4eolzxs4ou44.png" alt="" />
              </div>
              <div className="way__title">
                Фітнес-бікіні
              </div>
            </div>
            <div className="way">
              <div className="way__img">
                <img src="https://kolizey.lviv.ua/wp-content/uploads/elementor/thumbs/-osls4887m5dhru921r5qrsy8t5jxi3phc3dzv0uet0.png" alt="" />
              </div>
              <div className="way__title">
                Бодібілдинг
              </div>
            </div>
            <div className="way">
              <div className="way__img">
                <img src="https://kolizey.lviv.ua/wp-content/uploads/elementor/thumbs/-osls4a3vztg2f26bqryzwsh5zxanxhwy0coytkrmgk.png" alt="" />
              </div>
              <div className="way__title">
                Пауерліфтинг
              </div>
            </div>
            <div className="way">
              <div className="way__img">
                <img src="https://kolizey.lviv.ua/wp-content/uploads/elementor/thumbs/-osls46cj8hax4mbscqchmtfbmdt72pi0nu30wgx75g.png" alt="" />
              </div>
              <div className="way__title">
                Армспорт
              </div>
            </div>
          </div>
          <div className="content__btn advantages__btn">
            <button type='button'>Залишити заявку</button>
          </div>
        </div>
      </section>
      <section className="training">
        <div className="training__title">
          Не відкладай<br />
          тренування!
        </div>
      </section>
      <section className="price">
        <div className="table">
          <table>
            <caption>Ціни</caption>
            <thead>
              <tr>
                <th>Послуга</th>
                <th>Ціна</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ранковий 12 тренувань з 8:00-13:00</td>
                <td className='price__cost'>550 грн</td>
              </tr>
              <tr>
                <td>12 тренувань (місячний)</td>
                <td className='price__cost'>650 грн</td>
              </tr>
              <tr>
                <td>Безліміт (місячний)</td>
                <td className='price__cost'>750 грн</td>
              </tr>
              <tr>
                <td>Безліміт (піврічний)</td>
                <td className='price__cost'>3700 грн</td>
              </tr>
              <tr>
                <td>Безліміт (річний)	</td>
                <td className='price__cost'>5600 грн</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content__btn advantages__btn">
          <button type='button'>ОТРИМАЙ 10% ЗНИЖКИ ЗА ПРОМОКОДОМ</button>
        </div>
      </section>
      <section className="training__now">
        <div className='training__now_title'>
          Тренуйся зараз!
        </div>
        <div className="content__btn advantages__btn">
          <button type='button'>ОТРИМАЙ 10% ЗНИЖКИ ЗА ПРОМОКОДОМ</button>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="footer__body">
            <div className="footer__logo">
              <a href="#">
                <img src="https://kolizey.lviv.ua/wp-content/uploads/2020/02/logo_kolisey.png" alt="" />
              </a>
            </div>
            <div className="footer__work">
              <ul>
                <li>Львів, вулиця Полуботка, 31, 3 поверх</li>
                <li>Пн-Пт 07:00 – 23:00</li>
                <li>Сб-Нд 09:00 – 22:00</li>
                <li className='footer__phone'><a href="tel:+38 097 13 100 39">+38 097 13 100 39</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
