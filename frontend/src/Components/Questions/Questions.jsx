import React from 'react'
import './Questions.css'


const Questions = ({ques,ans}) => {
  return (
    <div>
      <span className="question_tab_main1">
        <span>{ques}</span>
        <span>{ans}</span>
      </span>
    </div>
  );
}

export default Questions