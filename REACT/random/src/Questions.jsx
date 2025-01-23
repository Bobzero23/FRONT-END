import data from "./data";

import React, { useState } from "react";
import { SingleQuestion } from "./SingleQuestion";

const Questions = () => {
  const [questions, setQuestions] = useState(data);
  const [openQuestionId,setOpenQeustionId] = useState(null);

  const handleToggle = (id) => {
    setOpenQeustionId(openQuestionId === id ? null : id);
  };

  return (
    <div>
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          {...question}
          isOpen={openQuestionId === question.id}
          onToggle={()=> handleToggle(question.id)}
        />
      ))}
    </div>
  );
};

export default Questions;
