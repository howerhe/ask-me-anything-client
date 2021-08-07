/* eslint-disable import/no-unresolved */
import React from 'react';
import env from 'react-dotenv';

function Footer() {
  return (
    <div className="mt-12 mb-20 xs:mt-20 xs:mb-28">
      <p className="text-gray-500 text-center">
        Answered by{' '}
        <a className="hover:text-green-500" href={env.HOWER_URL}>
          Hower
        </a>
      </p>
    </div>
  );
}

export default Footer;
