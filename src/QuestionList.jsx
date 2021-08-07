/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
import React from 'react';
import env from 'react-dotenv';
import axios from 'axios';
import Question from './Question';

function QuestionList() {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(env.API_URL)
      .then((res) => setQuestions(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen mx-auto px-4 grid auto-rows-max grid-cols-1 gap-8 xs:px-0 xs:gap-12 lg:max-w-4xl lg:grid-cols-2 2xl:max-w-7xl 2xl:grid-cols-3">
      {questions
        .slice(0)
        .reverse()
        .map((question) => (
          <Question key={question._id} question={question} />
        ))}
    </div>
  );
}

export default QuestionList;
