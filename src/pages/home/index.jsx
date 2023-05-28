import React from 'react';
import { useQuery } from 'react-query';
import { Loader,TitleForCenter, Footer,TitleForPages } from '../../components';
import {Link} from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"

import { instance } from '../../utils/axios';
import home from "./style.module.scss"

const Home = () => {
    async function footerLink() {
        const res = await instance.get(`/category`)
        return res;
    }
    const { data, isLoading } = useQuery("category",footerLink)
    console.log(data , "data");
    if (isLoading) {
        return <Loader/>
        
    } else {
        
        return (
            <div className={home.home_page}>
                <TitleForPages title={"Home"}/>
                <div className={home.home_page_showcase}>
                    <div className={home.home_page_showcase_title}>
                        <h2>Logitech G Pro X Superlight</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium quia, assumenda commodi dignissimos nemo?</p>
                        <Link to={"/products"} >Shop Now</Link>
                    </div>
                    <div className={home.home_page_showcase_img}>
                        <img src="/img/img_6.png" alt="" />
                    </div>

                </div>

                <div className={home.home_page_Our_Partners}>
                    <TitleForCenter title={"Our Partners"}/>
                    <div className={home.home_page_Our_Partners_img}>
                        <img src="/img/img_2.png" alt="" />
                        <img src="/img/img_3.png" alt="" />
                        <img src="/img/img_4.png" alt="" />
                        <img src="/img/img_5.png" alt="" />
                    </div>
                </div>
                <div className={home.home_page_Some_Products}>
                    <TitleForCenter title={"Product"}/>
                    <div className={home.home_page_Some_Products_kards}>
                        <div className={home.home_page_Some_Products_kard}>
                            <img src="/img/img_7.png" alt="" />
                            <div className={home.home_page_Some_Products_button}>
                                <Link to={"/"}>DETAIL</Link>   
                                <button><FaShoppingCart/></button>                     
                            </div>
                        </div>
                        <div className={home.home_page_Some_Products_kard}>
                            <img src="/img/img_7.png" alt="" />
                            <div className={home.home_page_Some_Products_button}>
                                <Link to={"/"}>DETAIL</Link>   
                                <button><FaShoppingCart/></button>                     
                            </div>
                        </div>
                        <div className={home.home_page_Some_Products_kard}>
                            <img src="/img/img_7.png" alt="" />
                            <div className={home.home_page_Some_Products_button}>
                                <Link to={"/"}>DETAIL</Link>   
                                <button><FaShoppingCart/></button>                     
                            </div>
                        </div>
                        <div className={home.home_page_Some_Products_kard}>
                            <img src="/img/img_7.png" alt="" />
                            <div className={home.home_page_Some_Products_button}>
                                <Link to={"/"}>DETAIL</Link>   
                                <button><FaShoppingCart/></button>                     
                            </div>
                        </div>
                    </div>


                </div>
                <div className={home.home_page_Benefits_Using_Our_Service}>
                    <TitleForCenter title={"Benefits Using Our Service"}/>
                    <div className={home.home_page_Benefits_Using_Our_Service_kards}>
                        <div className={home.home_page_Benefits_Using_Our_Service_kard}>
                            <img src="/img/img_icon_1.png" alt="" />
                            <h5>Best Quality</h5>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className={home.home_page_Benefits_Using_Our_Service_kard}>
                            <img src="/img/img_icon_2.png" alt="" />
                            <h5>Free Shipping</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit..</p>
                        </div>
                        <div className={home.home_page_Benefits_Using_Our_Service_kard}>
                            <img src="/img/img_icon_3.png" alt="" />
                            <h5>Warranty</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi placeat dignissimos voluptas?</p>
                        </div>
                    </div>

                </div>
                <div className={home.home_page_What_Our_Costumers_Are_Saying}>
                    <TitleForCenter title={"What Our Costumers Are Saying"}/>
                    <div className={home.home_page_What_Our_Costumers_Are_Saying_img}>
                        <img src="/img/img_client_1.png" alt="" />
                    </div>
                    <div  className={home.home_page_What_Our_Costumers_Are_Saying_text}>
                        <h5>Help us Improve our productivity</h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consectetur, purus id tincidunt feugiat, metus orci sagittis elit, quis tempor orci elit id arcu. Proin egestas bibendum efficitur. 
                        </p>
                        <span>
                            <h6>Adriana Lopez</h6>
                            <p>Client</p>
                        </span>
                    </div>

                </div>

                <Footer/>
            </div>
            
        );
    }
};

export default Home;