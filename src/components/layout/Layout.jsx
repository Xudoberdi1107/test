import React, {useContext} from 'react';
import { Sidebar} from "../index";
import {modeContext} from "../../context/mode/mode";
import '../../mode-style/mode.scss'
import './layout.scss'
const Layout = ({children}) => {
    const {mode} = useContext(modeContext)
    return (
        <div className={mode === 'light' ? 'dark' : 'light'}>
            <div className="my-container">
            <Sidebar/>
            <main>{children}</main>
            </div>
        </div>
        
    );
};

export default Layout;