import data from './data';

import React, { useState } from 'react'
import { SingleQuestion } from './SingleQuestion';

const Questions = () => {
    const [questions, setQuestions] = useState(data);
    const [activeId, setActiveId] = useState(null);

    return (
      <div>
          {questions.map((question)=> <SingleQuestion key={question.id} id={question.id} question={question.question} answer={question.answer} activeId={activeId}/>)}
      </div>
    )
  }

export default Questions