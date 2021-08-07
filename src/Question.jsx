/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function Question(props) {
  return (
    <div>
      <div className="mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition transform duration-500 xs:max-w-md">
        <p className="px-5 pt-4 pb-3 text-sm text-white bg-green-500 xs:px-8 xs:pt-6 xs:pb-5 xs:text-base">
          {props.question.question.content}
        </p>
        <p className="px-9 py-6 text-gray-900 xs:px-16 xs:py-10 xs:text-2xl">
          {props.question.answer.content}
        </p>
        <p className="px-5 pt-2 pb-4 text-xs text-gray-300 text-right xs:px-8 xs:pt-4 xs:pb-8">
          {new Date(props.question.answer.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default Question;
