import React from "react";
import { useEffect } from 'react';


interface NotFoundProps {
  header?: string;
  message?: string;
}

export default function WorkInProgress({
  header = "Beep Boop...Work in Progress!",
  message = "Amusement Valeur Alcool Ordinateur, AVAO",
}: NotFoundProps) {

    useEffect(() => {
        const interval = setInterval(() => {
          const beer = document.createElement('div');
          beer.innerText = '🍺';
          beer.style.position = 'fixed';
          beer.style.zIndex = '9999';
          beer.style.fontSize = `${Math.random() * 20 + 10}px`;
          beer.style.top = `${-100}px`;
          beer.style.left = `${Math.random() * window.innerWidth}px`;
          beer.style.animation = `fall ${Math.random() * 5 + 2}s linear infinite`;
          document.body.appendChild(beer);
    
          setTimeout(() => {
            beer.remove();
          }, 4000);
        }, 140);
    
        return () => clearInterval(interval);
      }, []);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Center vertically on the entire viewport height
    width: "100vw", // Center horizontally on the entire viewport width
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "50px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "24px",
  };

  return (
    <div style={containerStyle}>
              <style>
        {`
          @keyframes fall {
            to {
              transform: translateY(${window.innerHeight}px);
            }
          }
        `}
      </style>
      <h1 style={headingStyle}>{header}</h1>
      <p style={paragraphStyle}>{message}</p>
    </div>
  );
}