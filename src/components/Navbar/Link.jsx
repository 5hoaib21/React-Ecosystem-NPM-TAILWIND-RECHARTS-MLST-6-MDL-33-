import React from 'react';

const Link = ({route}) => {
  return (
    <li className='lg:mr-10 px-4 hover:opacity-50'>
      <a href={route.path}>{route.name} </a>
    </li>
  );
};

export default Link;