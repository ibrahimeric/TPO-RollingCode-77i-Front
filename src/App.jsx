import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/non-existent-page">Go to 404</Link>
    </div>
  );
};

export default App;

