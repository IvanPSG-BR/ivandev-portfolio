import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import workana_icon from '../assets/images/workana-icon.png';

export default function Footer() {
    return (
        <footer>
            <div id="left_ftr">
                <ul>
                    <li className="w-[1rem] h-[1rem]">
                        <a href=""><FaYoutube className="text-[#ff0033]"></FaYoutube></a>
                    </li>
                    <li className="w-[1rem] h-[1rem]">
                        <a href=""><FaGithub></FaGithub></a>
                    </li>
                    <li className="w-[1rem] h-[1rem]">
                        <a href=""><FaLinkedin className="text-[#0a66c2]"></FaLinkedin></a>
                    </li>
                    <li className="w-[1rem] h-[1rem]">
                        <a href=""><img src={workana_icon} alt="" className="w-[1rem] h-[1rem]"/></a>
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
