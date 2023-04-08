
import React from "react"
import style from './form.module.css'
import FormCreate from "./form-create/FormCreate"


const BackBG = ()=> {
    return (
        <div className={style.content}>
            <FormCreate />
        </div>
    )
}


export default BackBG