import { useState, useEffect } from 'react';
import Login from './LoginPage/Login';
import LoadingScreen from './LoadingPage/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return <div>{loading ? <LoadingScreen /> : <Login />}</div>;
}

export default App;
