import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import workana_icon from '../assets/images/workana-icon.png';
import { IconText } from '../utils/Types';

export default function Footer() {
    const brands: Array<IconText> = [
        {id: 0, Txt: "https://www.youtube.com/@ivanpsgdev", Icon: FaYoutube},
        {id: 1, Txt: "https://github.com/IvanPSG-BR", Icon: FaGithub},
        {id: 2, Txt: "https://www.linkedin.com/in/ivan-psg-developer", Icon: FaLinkedin}
    ]

    return (
        <footer id="Footer" className="flex">
            <div id="left_ftr">
                <ul>
                    {brands.map(
                        ( brand ) => (
                            <li key={brand.id} className="brand w-[1rem] h-[1rem]">
                                <a href={brand.Txt}><brand.Icon></brand.Icon></a>
                            </li>
                        )
                    )}
                    <li>
                        <a href="https://www.workana.com/freelancer/25f3cde603f5a3dfb6d6155730b5ec41"><img src={workana_icon} alt="" className="w-[1.2rem] h-[auto]"/></a>
                    </li>
                </ul>
            </div>
            <div id="right_ftr">
                <div><p>Todos os Direitos Reservados ©</p></div>
                <div><p>Ivan Pedro S. Gonçalves - 2025</p></div>
            </div>
        </footer>
    )
}
