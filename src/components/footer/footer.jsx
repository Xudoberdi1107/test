import React from 'react';
import f from "./style.module.scss"

import { FaInstagram ,FaPhone, FaEnvelope, FaTelegram} from "react-icons/fa";
import { useQuery } from 'react-query';
import { instance } from '../../utils/axios';
const Footer = () => {
    async function footerLink() {
        console.log("dd");
        const res = await instance.get(`/information`)
        return res;
    }
    const { data, isLoading } = useQuery("information",footerLink)
    console.log(data?.data.data[0],"l");
    if (Array.isArray(data?.data.data)) {
        return (
            <footer>
                <div className={f.footer_left_top}>
                    <h1>🅔𝒮𝔥𝓞𝒫</h1>
                    <p>© Copyright 2023. Created by</p>
                </div>
                <div className={f.footer_right_bottom}>
                    <ul>
                        <li><a href={data?.data.data[0].instagram } target="_blank"><FaInstagram/></a></li>
                        <li><a href={`tel:${data?.data.data[0].phone[1]}` }><FaPhone/></a></li>
                        <li><a href={`mailto:${data?.data.data[0].email}` }><FaEnvelope/></a></li>
                        <li><a href={`mailto:${data?.data.data[0].telegram}` }><FaTelegram/></a></li>
                    </ul>
                </div>
            </footer>
        );
    }
};

export default Footer;