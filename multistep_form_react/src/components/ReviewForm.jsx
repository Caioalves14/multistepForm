import React from 'react'
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs'

import "./ReviewForm.css";

const ReviewForm = ({data, updateFielHandler}) => {
  return (
    <div className='review-form'>
        <div className='form-control score-container'>
            <label className='radio-container'>
                <input type="radio" name="review" value='undsatisfield' required checked={data.review === "undsatisfield"} onChange={(e) => updateFielHandler("review", e.target.value)}/>
                <BsFillEmojiFrownFill />
                <p>Insatisfeito</p>
            </label>
            <label className='radio-container'>
                <input type="radio" name="review" value='neutral' required checked={data.review === "neutral"} onChange={(e) => updateFielHandler("review", e.target.value)}/>
                <BsFillEmojiNeutralFill />
                <p>Poderia ser melhor</p>
            </label>
            <label className='radio-container'>
                <input type="radio" name="review" value='satisfield' required checked={data.review === "satisfield"} onChange={(e) => updateFielHandler("review", e.target.value)}/>
                <BsFillEmojiSmileFill />
                <p>Satisfeito</p>
            </label>
            <label className='radio-container'>
                <input type="radio" name="review" value='very_satisfield' required checked={data.review === "very_satisfield"} onChange={(e) => updateFielHandler("review", e.target.value)}/>
                <BsFillEmojiHeartEyesFill/>
                <p>Muito satisfeito</p>
            </label>
        </div>
        <div className='form-control'>
            <label htmlFor="comment">Comentario</label>
                <textarea name="comment" id="comment" placeholder='Conte como foi a sua experiêcia com o produto...' required value={data.comment || ""} onChange={(e) => updateFielHandler("comment", e.target.value)}></textarea>
        </div>
    </div>
  )
}

export default ReviewForm