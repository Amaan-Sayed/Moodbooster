import React from 'react';

const Badge = () => (
  <a
    target="_blank"
    rel="noopener"
    href="https://twitter.com/amaansayed_"
    className="flex right-0 bottom-0 fixed z-50 rounded-tl-md pl-4 pr-5 py-2 transition-all duration-200 bg-teal-400 hover:bg-teal-600 items-center justify-center"
  >
    <img src="/profile_pic.png" className="rounded-full w-9 align-middle" />
    <p className="m-0 align-middle inline ml-2 text-sm">by Amaan</p>
  </a>
);

export default Badge;
