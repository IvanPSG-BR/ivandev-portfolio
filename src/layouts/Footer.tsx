import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import workana_icon from '../assets/images/workana-icon.png';
import { IconLink } from '../utils/Types';

export default function Footer() {
    const brands: Array<IconLink> = [
        {Link: "/", Icon: FaYoutube},
        {Link: "/", Icon: FaGithub},
        {Link: "/", Icon: FaLinkedin}
    ]

    return (
        <footer>
            <div id="left_ftr">
                <ul>
                    {brands.map(
                        ({ Link, Icon }, i) => (
                            <li className="w-[1rem] h-[1rem]">
                                <a href={Link}><Icon></Icon></a>
                            </li>
                        )
                    )}
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
