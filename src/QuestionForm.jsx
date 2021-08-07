/* eslint-disable import/no-unresolved */
import React from 'react';
import env from 'react-dotenv';
import axios from 'axios';

function QuestionForm() {
  const [question, setQuestion] = React.useState('');
  const [submissionResult, setSubmissionResult] = React.useState({
    visibility: 'invisible',
    color: 'text-gray-400',
    message: 'Waiting for submission.',
  });

  function handleChange(event) {
    setQuestion(event.target.value);
  }

  function handleClick(event) {
    if (question === '') {
      setSubmissionResult({
        visibility: 'visible',
        color: 'text-yellow-500',
        message: 'The question is empty. Say something.',
      });
    } else {
      axios
        .post(env.API_URL, {
          question,
        })
        .then(() =>
          setSubmissionResult({
            visibility: 'visible',
            color: 'text-green-500',
            message: 'The question will be posted once answered. Thanks.',
          })
        )
        .catch(() =>
          setSubmissionResult({
            visibility: 'visible',
            color: 'text-red-500',
            message: 'Something went wrong. Try again later.',
          })
        )
        .then(setQuestion(''));
    }

    event.preventDefault();
  }

  return (
    <form className="relative mx-auto xs:max-w-md lg:max-w-4xl 2xl:max-w-7xl">
      <input
        type="text"
        className="w-full h-14 pl-2 pr-12 align-middle text-xl text-gray-900 placeholder-gray-400 bg-transparent border-2 border-gray-400 rounded-2xl hover:border-green-500 focus:outline-none focus:border-green-500 xs:h-20 xs:pl-3 xs:pr-20 xs:text-3xl xs:border-4"
        value={question}
        onChange={handleChange}
        placeholder="Ask Me Anything..."
      />
      <button
        type="submit"
        className="absolute top-2 right-2 w-10 h-10 align-middle text-2xl text-gray-400 hover:text-green-500 xs:top-0 xs:right-1 xs:w-20 xs:h-20 xs:text-4xl"
        onClick={handleClick}
      >
        ?
      </button>
      <p
        className={`${submissionResult.visibility} ${submissionResult.color} px-3 pt-2 text-xs xs:px-4 xs:pt-3 xs:text-base`}
      >
        {submissionResult.message}
      </p>
    </form>
  );
}

export default QuestionForm;
