import React from 'react';
import { FaLightbulb } from "react-icons/fa";
import logomarca from '../assets/images/logomarca-pessoal-melhorada.png';

export default function Header() {
    const fields: Array<Array<string>> = [
        ["/", "Sobre"],
        ["/", "Projetos"],
        ["/", "Contato"]
    ];

    return (
        <header id="Header">
            <nav className="flex justify-between">
                <div id="left_nav">
                    <a href="/">
                        <div id="logomark">
                            <img src={logomarca} alt="logomarca" className="w-[3rem] h-auto"/>
                        </div>
                        <div id="logoname">
                            <h1>
                                <span className="text-[#F85149]">IvanPSG</span>
                                <span className="text-[#6db1ff]">.dev</span>
                            </h1>
                        </div>
                    </a>
                </div>

                <div id="right_nav">
                    <ul id="nav_options">
                        {fields.map(
                            ([Link, Txt]) => (
                                <li>
                                    <a href={Link}>{Txt}</a>
                                </li>
                            )
                        )}
                        <li><button id="theme_switch"><FaLightbulb></FaLightbulb></button></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
