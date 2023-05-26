import React from 'react';
import a from "./style.module.scss"
import parse from 'html-react-parser';
import {Loader} from "../../components";
import Footer from '../../components/footer/footer';
import { instance } from '../../utils/axios';
import { useQuery } from 'react-query';
import { useRef } from 'react';
const About = () => {
    async function footerLink() {
        const res = await instance.get(`/information`)
        return res;
    }
    const { data, isLoading } = useQuery("information",footerLink)

    const messageRef = useRef()
    const phoneRef = useRef()
    const subjectRef = useRef()
    async function Message(){
        console.log("hi");
        const article = { 
            phone:phoneRef.current.value,
            subject:subjectRef.current.value,
            message:messageRef.current.value,
            status: "PENDING"
        };
        
        instance.post('/message', { article })
        
                
    }

    return (
        <div className={a.section_about}>
            <div className={a.section_about_information}>
                <div className={a.section_about_information_img}>
                    <img src="./img/img_1.png" alt="no img" />

                </div>
                <div className={a.section_about_information_text}>
                    <h3>OUR TEAM</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia, doloremque vero quis ut earum! Laboriosam est minima corporis maiores illo cumque dolor necessitatibus nemo quo sapiente fugiat laborum eius at inventore, quaerat minus itaque, obcaecati maxime facilis ullam. Libero et repellat perspiciatis nesciunt? Enim sed quaerat delectus laboriosam ex optio obcaecati ducimus earum, doloribus sequi quae sapiente architecto atque rem est quidem eveniet inventore, repellendus aspernatur aperiam? Consequatur quod accusamus quaerat sit nostrum? Reiciendis eligendi ea officia rerum quisquam amet blanditiis voluptatem laudantium sequi magni obcaecati illum, maxime non ullam natus enim, ex dolore fugiat nisi quidem voluptate eveniet.</p>
                </div>

            </div>
            <div className={a.section_about_information_map}>
            {parse(`<iframe src="${data?.data.data[0].addressMap}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)}
            </div>
            <div className={a.section_about_information_message}>
                <form >
                    <ul>
                        <li>
                            <label htmlFor="phoneRef">phone</label>
                            <input type="number" name="" id="phoneRef" ref={phoneRef}/>
                        </li>
                        <li>
                            <label htmlFor="subjectRef">subject</label>
                            <input type="text" ref={subjectRef} id="subjectRef"/>
                        </li>
                        <li>
                            <label htmlFor="messageRef">message</label>
                            <textarea name="" id="messageRef" cols="30" rows="5" ref={messageRef} ></textarea>
                        </li>
                    </ul>
                    <input className='btn' type="submit" />
                    
                </form>

            </div>
            <Footer/>
        </div>
    );
};

export default About;