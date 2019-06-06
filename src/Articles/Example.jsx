import React from 'react';
import ReactLoading from 'react-loading';
 
const Example = () => (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
    <ReactLoading type={'spinningBubbles'} color={'black'} height={'5%'} width={'5%'} 
     />
     </div>
);
 
export default Example;