import React from 'react';
import { IconProps } from '../utils/Types';
import Icon from '../components/Icon';
import my_photo from '../assets/images/ivan-a-trabalho.png';
import { SiPython, SiPhp, SiMysql, SiHtml5, SiCss3, SiTypescript, SiGit } from "react-icons/si";
import { TbAutomation } from "react-icons/tb";

export default function Hero() {
    const badges: Array<IconProps> = [
        {key: 0, IconImg: SiPython, className: "text-[#f7cc42]"},
        {key: 1, IconImg: SiPhp, className: "text-[#7b7fb5]"},
        {key: 2, IconImg: SiMysql, className: "text-[#08668e]"},
        {key: 3, IconImg: SiHtml5, className: "text-[#f16a30]"},
        {key: 4, IconImg: SiCss3, className: "text-[#39acdd]"},
        {key: 5, IconImg: SiTypescript, className: "text-[#3373bb]"},
        {key: 6, IconImg: SiGit, className: "text-[#f15538]"},
        {key: 7, IconImg: TbAutomation, className: "text-[#b9b9b9]"},
    ];

    return (
        <section id="Hero" className="justify-center items-center gap-8 sm:gap-20">
            <div id="hero_main" className="flex flex-col items-center gap-4 sm:flex-row">
                <div id="hero_photo">
                    <img src={my_photo} alt="" className="w-50 rounded-full sm:w-60"/>
                </div>

                <div id="hero_text" className="flex flex-col gap-1 px-4">
                    <h2 className="text-4xl sm:text-5xl">Ivan_Pedro() {"{"}
                        <span id="hero_paragraph" className="flex flex-col text-sm gap-2 px-6 sm:text-lg">
                            <h3 className="text-xl pb-4 pt-2 sm:text-2xl">Junior Backend Developer;</h3>
                            <p>APIs polidas em Python + FastAPI || PHP + Lumen;</p>
                            <p>Automações em Python que economizam tempo;</p>
                            <p>Websites com TypeScript (ou PHP/Laravel) customizados para VOCÊ;</p>
                        </span>
                    {"}"}</h2>
                </div>
            </div>

            <div id="badges" className="flex flex-wrap items-center justify-center gap-8 py-4 sm:gap-12">
                {badges.map(
                    ( badge ) => (
                        <Icon
                            key={badge.key} 
                            IconImg={badge.IconImg} 
                            className={"badge text-4xl sm:text-5xl " + badge.className}
                        ></Icon>
                    )
                )}
            </div>

            <div id="cta" className="flex p-4 gap-6">
                <a href="/CURRICULO_IVAN_PEDRO.pdf" className="sm:text-lg">
                    <button>Baixar_Currículo();</button>
                </a>

                <a href="#Footer" className="sm:text-lg"> {/* PLACEHOLDER */}
                    <button>Entrar_em_Contato();</button>
                </a>
            </div>
        </section>
    )
}
