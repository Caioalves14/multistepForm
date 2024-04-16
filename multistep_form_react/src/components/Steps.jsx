import React from 'react'
import './Steps.css'
import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

const Steps = ({currenStep}) => {
  return (
    <div className='steps'>
        <div className='step active'>
            <AiOutlineUser />
            <p>Indentificação</p>
        </div>
        <div className={`step ${currenStep >= 1 ? "active": ""}`}>
            <AiOutlineStar />
            <p>Avaliação</p>
        </div>
        <div className={`step ${currenStep >= 2 ? "active": ""}`}>
            <FiSend />
            <p>Envio</p>
        </div>
    </div>
  )
}

export default Steps