import React from 'react';
import a from "./style.module.scss"
import parse from 'html-react-parser';
import {Loader, TitleForPages} from "../../components";
import Footer from '../../components/footer/footer';
import { instance } from '../../utils/axios';
import { toast } from 'toastr';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';


const About = () => {
    async function footerLink() {
        const res = await instance.get(`/information`)
        return res;
    }
    const { data, isLoading } = useQuery("information",footerLink)
    console.log(data , "data");
    const { register, handleSubmit, formState: { errors },clearErrors } = useForm();
    const onSubmit = datad => instance.post("/message", datad) 
   if (isLoading) {
    return <Loader/>
   }else{
    return (
        <div className={a.section_about}>
            <TitleForPages title={"About"}/>
            <div className={a.section_about_information}>
                <div className={a.section_about_information_img}>
                    <img src="./img/img_1.png" alt="no img" />

                </div>
                <div className={a.section_about_information_text}>
                    <h3>OUR TEAM</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia, doloremque vero quis ut earum! Laboriosam est minima corporis maiores illo cumque dolor necessitatibus nemo quo sapiente fugiat laborum eius at inventore, quaerat minus itaque, obcaecati maxime facilis ullam. Libero et repellat perspiciatis nesciunt? Enim sed quaerat delectus laboriosam ex optio obcaecati ducimus earum, doloribus sequi quae sapiente architecto atque rem est quidem eveniet inventore, repellendus aspernatur aperiam? Consequatur quod accusamus quaerat sit nostrum? Reiciendis eligendi ea officia rerum quisquam amet blanditiis voluptatem laudantium sequi magni obcaecati illum, maxime non ullam natus enim, ex dolore fugiat nisi quidem voluptate eveniet.</p>
                </div>

            </div>
            <div className={a.section_about_information_our_address}>
            <TitleForPages title={"Address"}/>  
                <div className={a.section_about_information_our_address_map}>
                {parse(`<iframe src="${data?.data.data[0].addressMap}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)}
                </div>
                <div className={a.section_about_information_our_address_contact}>
                    <ul>
                        <li><h5>Address:</h5>{data?.data.data[0].address}</li>
                        <li><h5>Email:</h5>{data?.data.data[0].email}</li>
                        <li><h5>Phone:</h5>{data?.data.data[0].phone[1]}</li>
                        <li><h5>Phone:</h5>{data?.data.data[0].phone[0]}</li>
                        <li><h5>Instagram:</h5>{data?.data.data[0].instagram}</li>
                        <li><h5>Telegram:</h5>{data?.data.data[0].telegram}</li>
                    </ul>
                </div>
            
            </div>
 
            <div className={a.section_about_information_message}>
                <TitleForPages title={"Message"}/>    
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="tel" placeholder="phone" {...register("phone", {})} />
                    <input type="text" placeholder="subject" {...register("subject", {})} />
                    <textarea name="" id="" cols="30" rows="10" placeholder="message" {...register("message", {})}></textarea>
                    <input type="text" placeholder="status" {...register("status", {})} />
                    <input type="submit" />
                </form>

            </div>
            <Footer/>
        </div>
    );
   }
};

export default About;