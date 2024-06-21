
import Spinner from 'react-bootstrap/Spinner';
import '../css/Components-styles/Loading.css'

const Loading = () => {
  return (
    <div className="loading-container">
      <Spinner animation="border" variant="primary" className="custom-spinner" />
    </div>
  );
}

export default Loading;
