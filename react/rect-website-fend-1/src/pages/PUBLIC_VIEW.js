import React from 'react'
import "../styles/PUBLIC_VIEW.css"
import PV_data from '../components/PV_data';
import ContactSupport from '../components/ContactSupport';

function PUBLIC_VIEW() {
  return (
    <div className="PUBLIC_VIEW">
      <div className='left'>
        <PV_data />
        <div className='ads'>
          <h1>Advertisement</h1>
        </div>
      </div>
      <div className='right'>
        <ContactSupport />
      </div>
    </div>
  );
}

export default PUBLIC_VIEW