import React from 'react';
import my_photo from '../assets/images/ivan-a-trabalho.png';
import { SiPython, SiPhp, SiMysql, SiHtml5, SiCss3, SiTypescript, SiGit } from "react-icons/si";
import { TbAutomation } from "react-icons/tb";
import { IconType } from 'react-icons';

export default function Hero() {
    const badges: Array<IconType> = [SiPython, SiPhp, SiMysql, SiHtml5, SiCss3, SiTypescript, SiGit, TbAutomation];

    return (
        <section className="flex flex-col justify-center items-center gap-[2.5rem]">
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
                    (Icon, i) => (
                        <div className="badge"><Icon></Icon></div>
                    )
                )}
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
