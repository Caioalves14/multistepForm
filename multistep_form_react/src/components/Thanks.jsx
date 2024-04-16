import React from 'react'
import './Thanks.css'

import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs'

const emojiData = {
    unsatisfield: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfield: <BsFillEmojiSmileFill />,
    very_satisfield: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>
            A sua opinião é muito importante, em breve você receberá um cupom com 10% de desconto para a sua próxima compra.
        </p>
        <p>Para concluir sua avaliação clique no botão Enviar abaixo.</p>
        <h3>Aqui está sua avaliação {data.name}</h3>
        <p className='review-data'>
            <span>Satisfação com o produto:</span>
            {emojiData[data.review]}
        </p>
        <p className='review-data'>
            <span>Comentário:</span>
            {data.comment}
        </p>
    </div>
  )
}

export default Thanks