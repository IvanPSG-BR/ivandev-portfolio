import React from 'react';
import { FaLightbulb } from "react-icons/fa";
import logomarca from '../assets/images/logomarca-pessoal-melhorada.png';
import { DefaultLink } from '../utils/Types';
import { Link } from 'react-router-dom';

export default function Header() {
    const fields: Array<DefaultLink> = [
        {Link: "/", Txt: "Sobre"},
        {Link: "/", Txt: "Projetos"},
        {Link: "/", Txt: "Contato"}
    ]

    return (
        <header>
            <nav>
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
                            ({ Link, Txt }, i) => (
                                <li>
                                    <a href={Link}>{Txt}</a>
                                </li>
                            )
                        )}
                    </ul>
                    <div id="theme_switch">
                        <button><FaLightbulb></FaLightbulb></button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
