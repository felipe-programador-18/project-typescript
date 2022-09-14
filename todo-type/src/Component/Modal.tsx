import React from 'react';

export interface IAppProps {
}

const Modal = (props: IAppProps) => {
  return (
    <div id='modal' >
       <div className='hide' >
       </div>

       <div>
        <h2>Modal </h2>
       </div>
    </div>
  );
}


export default Modal