import React from 'react';
import ModeProvider from "../../context/mode/mode";
import {ErrorPage, Layout} from "../index";
import {Route, Routes} from "react-router-dom";
import { DetailPage, Home,  Products, About, Korzinka } from "../../pages";
import Footer from '../footer/footer';


const App = () => {
    return (
        <ModeProvider>
            <>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/products/detail/:id" element={<DetailPage/>}/>
                        <Route path="/*" element={<ErrorPage/>}/>
                        <Route path="/korzinka" element={<Korzinka/>}/>
                    </Routes>
                </Layout>
            </>
        </ModeProvider>
    );
};

export default App;