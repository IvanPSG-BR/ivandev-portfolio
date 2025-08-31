import React from 'react';
import my_photo from '../assets/images/ivan-a-trabalho.png';
import { SiPython, SiPhp, SiMysql, SiHtml5, SiCss3, SiTypescript, SiGit } from "react-icons/si";
import { TbAutomation } from "react-icons/tb";
import { IconText } from '../utils/Types';

export default function Hero() {
    const badges: Array<IconText> = [
        {id: 0, Icon: SiPython, Txt: "python"},
        {id: 1, Icon: SiPhp, Txt: "php"},
        {id: 2, Icon: SiMysql, Txt: "mysql"},
        {id: 3, Icon: SiHtml5, Txt: "html"},
        {id: 4, Icon: SiCss3, Txt: "css"},
        {id: 5, Icon: SiTypescript, Txt: "typescript"},
        {id: 6, Icon: SiGit, Txt: "git"},
        {id: 7, Icon: TbAutomation, Txt: "automation"},
    ];

    return (
        <section id="Hero" className="justify-center items-center gap-[3rem]">
            <div id="hero_main">
                <div id="hero_photo">
                    <img src={my_photo} alt="" className="w-[10rem] rounded-full"/>
                </div>

                <div id="hero_text">
                    <div id="hero_title"><h2>Ivan_Pedro() {"{"}</h2></div>
                    <div id="hero_subtitle"><h3>Junior Backend Developer;</h3></div>
                    <div id="hero_paragraph">
                        <p>APIs polidas em Python + FastAPI || PHP + Symphony;</p>
                        <p>Automações em Python que economizam tempo;</p>
                        <p>Websites com TypeScript customizados para VOCÊ;</p>
                    </div>
                    <div id="hero_title_close"><h2>{"}"}</h2></div>
                </div>
            </div>

            <div id="badges">
                {badges.map(
                    (badge) => (
                        <div key={badge.id} className={"badge " + badge.Txt}><badge.Icon></badge.Icon></div>
                    )
                )}
            </div>

            <div id="cta">
                <div id="download_curriculum">
                    <a href="/CURRICULO_IVAN_PEDRO.pdf">
                        <button>Baixar_Currículo();</button>
                    </a>
                </div>

                <div id="make_contact">
                    <a href="#Footer"> {/* PLACEHOLDER */}
                        <button>Entrar_em_Contato();</button>
                    </a>
                </div>
            </div>
        </section>
    )
}
