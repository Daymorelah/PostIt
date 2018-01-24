
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const LoginResponce = (props)=>{
  if(props.responce[0].message){
    return <Redirect to='/home' />;
  }else{
    return(
      <div>
        <h1 className='lead text-primary'>Hello!</h1>
      </div>);
  } //end of else satement
};//end of staless component

LoginResponce.propTypes = {
  responce: PropTypes.array.isRequired
};

export default LoginResponce;