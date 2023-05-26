import { Select } from 'antd';
import {useEffect, useState} from "react";
import instance from "../../utils/axios";
const handleChange = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};
const MultpleSelect = () => {

    return (
       <>
           <Select
               labelInValue
               defaultValue={{
                   value: 'en',
                   label: 'En 🇬🇧',
               }}
               style={{
                   width: 120,
               }}
               onChange={handleChange}
               options={[
                   {
                       value: 'en',
                       label: 'En 🇬🇧',
                   },
                   {
                       value: 'ru',
                       label: 'Ru 🇷🇺',
                   },
                   {
                       value: 'uz',
                       label: 'Uz 🇺🇿',
                   },
               ]}
           />
       </>
    );
};

export default MultpleSelect;