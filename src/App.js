import React from 'react';
import './App.css';

function App() {
  const buttons = [
    { name: "Showroom Traffic", url: "https://example.com/showroom-traffic" },
    { name: "Master Inventory", url: "https://example.com/master-inventory" },
    { name: "Price Cards", url: "https://drive.google.com/drive/folders/0B1tkMkoeO_hbNW5QVU9GdGlyZWs?resourcekey=0-7RlJinvDpH5UfTc7Mracww&usp=sharing" },
    { name: "Order Status Report", url: "https://example.com/order-status" },
    { name: "Staff Schedule", url: "https://example.com/staff-schedule" },
    { name: "Sale Catalogs", url: "https://online.flippingbook.com/view/208177075/" },
    { name: "Delivery Installation Schedule", url: "https://example.com/delivery-schedule" },
    { name: "Marketing Calendar", url: "https://example.com/marketing-calendar" },
    { name: "Google My Business Links", url: "https://business.google.com" },
    { name: "CRM", url: "https://marketing360.com/" },
    { name: "Tasks", url: "https://example.com/tasks" }
  ];

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Work Dashboard</h1>
      </header>
      <main>
        {buttons.map((button, index) => (
          <button 
            key={index}
            className="dashboard-button"
            onClick={() => handleClick(button.url)}
          >
            {button.name}
          </button>
        ))}
      </main>
    </div>
  );
}

export default App;