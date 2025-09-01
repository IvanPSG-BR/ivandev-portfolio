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
        <section id="Hero" className="justify-center items-center gap-8">
            <div id="hero_main" className="flex flex-col items-center gap-4">
                <div id="hero_photo">
                    <img src={my_photo} alt="" className="w-50 rounded-full"/>
                </div>

                <div id="hero_text" className="flex flex-col gap-1 px-4">
                    <h2 className="text-4xl">Ivan_Pedro() {"{"}</h2>
                    <div id="hero_paragraph" className="flex flex-col text-sm gap-2 px-6">
                        <h3 className="text-xl pb-4">Junior Backend Developer;</h3>
                        <p>APIs polidas em Python + FastAPI || PHP + Symphony;</p>
                        <p>Automações em Python que economizam tempo;</p>
                        <p>Websites com TypeScript customizados para VOCÊ;</p>
                    </div>
                    <h2 className="text-4xl">{"}"}</h2>
                </div>
            </div>

            <div id="badges" className="flex flex-wrap items-center justify-center gap-8 py-4">
                {badges.map(
                    (badge) => (
                        <div key={badge.id} className={"badge text-4xl " + badge.Txt}><badge.Icon></badge.Icon></div>
                    )
                )}
            </div>

            <div id="cta" className="flex p-4 gap-8">
                <a href="/CURRICULO_IVAN_PEDRO.pdf">
                    <button>Baixar_Currículo();</button>
                </a>

                <a href="#Footer"> {/* PLACEHOLDER */}
                    <button>Entrar_em_Contato();</button>
                </a>
            </div>
        </section>
    )
}
