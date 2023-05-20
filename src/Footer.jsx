import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-body-secondary" style={{backgroundColor: " #f8f9fd", paddingTop: "20px"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: "600"}}>&copy; {new Date().getFullYear()} Musskart Technology Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
