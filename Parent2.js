import React from 'react'
import Child2 from './Child2';
import ErrorBoundary from '../ErrorBoundary';


export default function Parent2() {
  return (
    <div className="container">
      <h1>Error Boundry</h1>
      <div className="row">
        <div className="col-4">
          <Child2 p1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8asvFzpGX06yws9lImClUOojB-TkLmEU-w&s" />
        </div>
        <div className="col-4">
          <Child2 p1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ntQkTOzC5cM-E3YxFy6j2xxnW8lQ6w0RUw&s" />
        </div>
        <div className="col-4">
          <ErrorBoundary>
            <Child2 p1="" />
            </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

