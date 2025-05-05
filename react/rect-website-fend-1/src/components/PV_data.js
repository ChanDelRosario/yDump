import React from 'react';
import '../styles/PV_data.css';
import search from "../assets/search.svg";
import ArrowD from "../assets/arrow_drop_down.svg";

function PV_data() {
  return (
    <div className='PV_data'>
      <div className='upperpart'>
        <div className='leftpart'>
          <div className='DataH1'>
            <h1>DATA</h1>
          </div>
        </div>
        <div className='rightpart'>
          <div className='sort'>
            <button type="sort"><span className='Sortbutton'>Sort</span><img className='SortbuttonImg' src={ArrowD} alt="arrowdown" /></button>
          </div>
          <div className='search'>
            <img src={search} alt="search icon" className="search-icon" />
            <input
              type="search"
              name="search"
              placeholder="Search..."
              className="search-input"
            />
          </div>
        </div>
      </div>
      <div className='bottompart'>
        <div className='fixed_txt'>
          <h4>MEDICINE ID</h4>
          <h4>NAME</h4>
          <h4>BRAND</h4>
          <h4>DOSAGE FORM</h4>
          <h4>DOSAGE</h4>
          <h4>QTY</h4>
          <h4>PRICE</h4>
          <h4>EXPIRATION DATE</h4>
          <h4>PRESCRIPTION REQ.</h4>
          <h4>DESCRIPTION</h4>
        </div>
        
        {/* backend */}
        <div className='DataRecored'>
          <div className='00001'>
            <p>00001</p>
            <p>PARACETAMOL</p>
            <p>BIOGESIC</p>
            <p>TABLET</p>
            <p>500mg</p>
            <p>120</p>
            <p>PHP 8</p>
            <p>2026-01-10</p>
            <p>NO</p>
            <p>Headache relief</p>
          </div>
          <div className='00002'>
            <p>00001</p>
            <p>PARACETAMOL</p>
            <p>BIOGESIC</p>
            <p>TABLET</p>
            <p>500mg</p>
            <p>120</p>
            <p>PHP 8</p>
            <p>2026-01-10</p>
            <p>NO</p>
            <p>Headache relief</p>
          </div>
          <div className='00003'>
            <p>00001</p>
            <p>PARACETAMOL</p>
            <p>BIOGESIC</p>
            <p>TABLET</p>
            <p>500mg</p>
            <p>120</p>
            <p>PHP 8</p>
            <p>2026-01-10</p>
            <p>NO</p>
            <p>Headache relief</p>
          </div>
          <div className='00004'>
            <p>00001</p>
            <p>PARACETAMOL</p>
            <p>BIOGESIC</p>
            <p>TABLET</p>
            <p>500mg</p>
            <p>120</p>
            <p>PHP 8</p>
            <p>2026-01-10</p>
            <p>NO</p>
            <p>Headache relief</p>
          </div>
          <div className='00005'>
            <p>00001</p>
            <p>PARACETAMOL</p>
            <p>BIOGESIC</p>
            <p>TABLET</p>
            <p>500mg</p>
            <p>120</p>
            <p>PHP 8</p>
            <p>2026-01-10</p>
            <p>NO</p>
            <p>Headache relief</p>
          </div>
          <div className='00006'>
            <p>00001</p>
            <p>PARACETAMOL</p>
            <p>BIOGESIC</p>
            <p>TABLET</p>
            <p>500mg</p>
            <p>120</p>
            <p>PHP 8</p>
            <p>2026-01-10</p>
            <p>NO</p>
            <p>Headache relief</p>
          </div>
          <div className='00007'>
            <p>00001</p>
            <p>PARACETAMOL</p>
            <p>BIOGESIC</p>
            <p>TABLET</p>
            <p>500mg</p>
            <p>120</p>
            <p>PHP 8</p>
            <p>2026-01-10</p>
            <p>NO</p>
            <p>Headache relief</p>
          </div>
          <div className='00008'>
            <p>00001</p>
            <p>PARACETAMOL</p>
            <p>BIOGESIC</p>
            <p>TABLET</p>
            <p>500mg</p>
            <p>120</p>
            <p>PHP 8</p>
            <p>2026-01-10</p>
            <p>NO</p>
            <p>Headache relief</p>
          </div>
          <div className='00009'>
            <p>00001</p>
            <p>PARACETAMOL</p>
            <p>BIOGESIC</p>
            <p>TABLET</p>
            <p>500mg</p>
            <p>120</p>
            <p>PHP 8</p>
            <p>2026-01-10</p>
            <p>NO</p>
            <p>Headache relief</p>
          </div>
          <div className='00010'>
            <p>00001</p>
            <p>PARACETAMOL</p>
            <p>BIOGESIC</p>
            <p>TABLET</p>
            <p>500mg</p>
            <p>120</p>
            <p>PHP 8</p>
            <p>2026-01-10</p>
            <p>NO</p>
            <p>Headache relief</p>
          </div>
          <div className='00011'>
            <p>00001</p>
            <p>PARACETAMOL</p>
            <p>BIOGESIC</p>
            <p>TABLET</p>
            <p>500mg</p>
            <p>120</p>
            <p>PHP 8</p>
            <p>2026-01-10</p>
            <p>NO</p>
            <p>Headache relief</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PV_data;
