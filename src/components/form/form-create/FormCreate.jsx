import './FormCreateStyle.css'
import BoxInputName from './Boxes/BoxInputName'
import BoxInputPassword from './Boxes/BoxInputPassword'
import BoxHead from './Boxes/BoxHead'
import BoxButton from './Boxes/BoxButton'
import BoxBtnReg from './Boxes/BoxBtnReg'
import './Boxes/MainBoxStyle/boxStyle.css'
import './Boxes/MainBoxStyle/stylesBoxesElements.css'
import { useRef } from 'react'


const FormCreate = () => {
	const form = useRef() 

	const switchClick = ()=>{
		form.current.classList.toggle('switch')
	}

	return (
		<form className='form' ref={form}>
			<BoxHead />
			<BoxInputName />
			<BoxInputPassword />
			<BoxButton />
			<BoxBtnReg refForm={switchClick} />
		</form>
	)
}

export default FormCreate