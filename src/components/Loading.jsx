
import Spinner from 'react-bootstrap/Spinner';
import '../css/Loading.css'

const Loading = () => {
  return (
    <div className="loading-container">
      <Spinner animation="border" variant="primary" className="spinner" />
    </div>
  );
}

export default Loading;
