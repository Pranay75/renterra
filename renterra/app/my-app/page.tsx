// components/MyApp.tsx
import React from 'react';
import Home from '@/app/page'; // Adjust the path based on your project structure

export default function MyApp() {
  return (
    <div>
      <h1>Interactive Component</h1>
      <Home /> {/* Render the Home component */}
      <p>Further content below the Home experience.</p>
    </div>
  );
}
