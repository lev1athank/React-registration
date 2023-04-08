import { useState, useEffect, useRef } from "react";

const BoxBtnReg = ({refForm}) => {
	
	const splitDef = (text) => {
		return text.split('').map(el => <span key={el}>{el}</span>)
	}

	const addDelay = (link) => {
		const childres = Object.values(link.children[1].children)
		for (let i = 0; i < childres.length; i++) {
				childres[i].style.transitionDelay  = `${i * 0.04}s`
			}
			
		}
	

	const switchFormIn = useRef()
	const switchFormOut = useRef()
 
	useEffect(()=>{
		addDelay(switchFormIn.current)
		addDelay(switchFormOut.current)
		console.log(67);
	})

    return (
        <div className='boxs'>
			<span className="box-top button-help" ref={switchFormOut} onClick={refForm}>
				<p> есть аккаунт </p> 
				<a href='#'>
				{splitDef('войти')}
					</a>
			</span>
			<span className="box-before button-help" ref={switchFormIn} onClick={refForm}>
                <p> нет аккаунта </p>
				<a href='#'>
					{splitDef('создать')}
				</a>
			</span>
		</div>
    )
	}

export default BoxBtnReg