import React from 'react';
import './App.css';
import CompanyForm from './components/CompanyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Information Form</h1>
        <p>Extract company data from text and auto-fill the form</p>
      </header>
      <main>
        <CompanyForm />
      </main>
    </div>
  );
}

export default App;
