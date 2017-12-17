
import React from 'react';
import PropTypes from 'prop-types';

const SignUpResponce = (props)=>{
  return(
    <div>
      <h1 className='lead text-primary'>Hello!</h1>
      <div>
      { props.responce.map( (responce,i) => 
        <p key={i} className='lead'> {responce.message} </p>
      )}
      </div>
    </div>
  );
};//end of staless component

SignUpResponce.propTypes = {
  responce: PropTypes.object.isRequired
};

export default SignUpResponce;