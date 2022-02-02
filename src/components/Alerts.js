import React from 'react';


const Alerts = (props) => {
  return (<>

     <div clasName={`alert alert-${props.alert} alert-dismissible fade show`} role="alert">
      <strong> {props.alert}</strong>  : {props.alert}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>


  </>)
};

export default Alerts;
