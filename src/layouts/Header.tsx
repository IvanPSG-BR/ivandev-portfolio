import React, { useState } from 'react';
import { FaLightbulb, FaBars } from "react-icons/fa";
import logomarca from '../assets/images/logomarca-pessoal-melhorada.png';

export default function Header() {
    const fields: Array<Array<string>> = [
        ["#sobre", "Sobre"],
        ["#projetos", "Projetos"],
        ["#contato", "Contato"]
    ];
    const [is_menu_open, menu_switch] = useState(false)

    return (
        <header id="Header">
            <nav className="flex justify-between w-[100vw] p-2 sm:p-8">
                <div id="left_nav" className="flex items-center">
                        <div id="logomark" className="flex items-center pr-2 sm:pr-4">
                            <img src={logomarca} alt="logomarca" className="w-8 h-6 sm:w-14 sm:h-12"/>
                        </div>
                        <div id="logoname">
                            <h1 className="text-xl sm:text-3xl">
                                <span className="text-[#F85149]">IvanPSG</span>
                                <span className="text-[#6db1ff]">.dev</span>
                            </h1>
                        </div>
                </div>

                <div id="right_nav" className="flex items-center">
                    <ul className="hidden sm:flex sm:items-center sm:gap-4">
                        {fields.map(
                            ([Link, className], i) => (
                                <li key={i}>
                                    <a href={Link}>{className}</a>
                                </li>
                            )
                        )}
                    </ul>
                    
                    <div className="flex items-center w-auto h-auto gap-2 sm:hidden">
                        <div className={is_menu_open ? "flex absolute top-0 right-0 z-[2] w-[75vw] p-3" : "flex"}>
                            <button onClick={() => menu_switch(!is_menu_open)}>
                                <FaBars className="text-xl"></FaBars>
                            </button>                            
                        </div>

                        <aside className={is_menu_open ? "absolute top-0 right-0 z-[1] border border-gray-700 bg-[#0a0e16] rounded-md w-[75vw] h-[100vh] px-8 py-20" : "hidden"}>
                            <ul className="flex flex-col justify-start items-center gap-10">
                                {fields.map(
                                    ([Link, Txt], i) => (
                                        <li key={i}>
                                            <a href={Link} className="text-lg">{Txt}</a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </aside>
                    </div>
                    
                    <div className="pl-4 z-[2]">
                        <button id="theme_switch"><FaLightbulb className="text-lg sm:2xl"></FaLightbulb></button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
