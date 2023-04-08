import React from 'react'
import style from './box.module.css'
const box = (styleClass) => {
	return (
		<div className={style.box + " " + styleClass.classBox}>
			<div>
				<span className={style.side}></span>
				<span className={style.side}></span>
				<span className={style.side}></span>
				<span className={style.side}></span>
				<span className={style.side}></span>
				<span className={style.side}></span>
			</div>
		</div>

	)
}

export default box