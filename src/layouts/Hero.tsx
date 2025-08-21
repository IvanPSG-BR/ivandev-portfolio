import React from 'react';
import my_photo from '../assets/images/ivan-a-trabalho.png';

export default function Hero() {
    return (
        <section>
            <div id="hero_main">
                <div id="hero_photo">
                    <img src={my_photo} alt="" className="w-[10rem] rounded-full"/>
                </div>

                <div id="hero_text">
                    <div id="hero_title"><h2>Ivan_Pedro() {"{"}</h2></div>
                    <div id="hero_subtitle"><h3>Junior Backend Developer;</h3></div>
                    <div id="hero_paragraph"><p>APIs e automações em Python/PHP que economizam tempo;</p></div>
                    <div id="hero_title_close"><h2>{"}"}</h2></div>
                </div>
            </div>

            <div id="badges">
                <div className="badge"><img src="" alt="" /></div>
                <div className="badge"><img src="" alt="" /></div>
                <div className="badge"><img src="" alt="" /></div>
                <div className="badge"><img src="" alt="" /></div>
                <div className="badge"><img src="" alt="" /></div>
                <div className="badge"><img src="" alt="" /></div>
                <div className="badge"><img src="" alt="" /></div>
                <div className="badge"><img src="" alt="" /></div>
            </div>

            <div id="cta">
                <div id="download_curriculum">
                    <a href="">
                        <button>Baixar_Currículo();</button>
                    </a>
                </div>

                <div id="make_contact">
                    <a href="">
                        <button>Entrar_em_Contato();</button>
                    </a>
                </div>
            </div>
        </section>
    )
}
