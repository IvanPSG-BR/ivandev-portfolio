import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import workana_icon from '../assets/images/workana-icon.png';
import { IconProps } from '../utils/Types';

export default function Footer() {
    const brands: Array<IconProps> = [
        {key: 0, IconImg: FaYoutube, className: "text-[#d60a33] text-2xl"},
        {key: 1, IconImg: FaGithub, className: "text-white text-2xl"},
        {key: 2, IconImg: FaLinkedin, className: "text-[#125ca5] text-2xl"}
    ]

    const links: Array<string> = [
        "https://www.youtube.com/@ivanpsgdev",
        "https://github.com/IvanPSG-BR",
        "https://www.linkedin.com/in/ivan-psg-developer"
    ]

    return (
        <footer id="Footer" className="flex items-center justify-between gap-4 p-2 sm:px-4">
            <div id="left_ftr">
                <ul className="grid grid-cols-2 gap-y-6 gap-x-8 sm:flex sm:gap-10">
                    {brands.map(
                        ( brand, i ) => (
                            <li key={brand.key} className="brand">
                                <a href={links[i]}><brand.IconImg className={brand.className}></brand.IconImg></a>
                            </li>
                        )
                    )}
                    <li key={3}>
                        <a href="https://www.workana.com/freelancer/25f3cde603f5a3dfb6d6155730b5ec41"><img src={workana_icon} alt="" className="w-[1.5rem] h-[1.5rem]"/></a>
                    </li>
                </ul>
            </div>
            <div id="right_ftr" className="flex flex-col text-xs gap-2 sm:text-sm">
                <div><p>Todos os Direitos Reservados ©</p></div>
                <div><p>Ivan Pedro S. Gonçalves - 2025</p></div>
            </div>
        </footer>
    )
}
