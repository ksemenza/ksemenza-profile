import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>

        <div>
        <Header/>
        <Route path='/header' component={Header}/>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/about' component={About}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/contact' component={Contact}/>
      
        </Switch>
           <Footer/>
           </div>
    
      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
