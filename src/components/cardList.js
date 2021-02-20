import React from 'react';
import Card from './Card';
import './Card.css';

const CardList = ({robots}) => {
  const cardComponent = robots.map((users, i)=>{
    return (
    <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
      );
  })
  return (
    <>
      {cardComponent}
      </>
    );
}

export default CardList;
