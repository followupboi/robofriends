import React from 'react';

const Card = (props) => {
  return (
    <>
<div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
  <img alt='robots' src={`https://robohash.org/${props.id}`} />
<div>
  <h3>{props.name}</h3>
  <p>{props.email}</p>
  </div>
</div>
    </>
  );
}


export default Card;
