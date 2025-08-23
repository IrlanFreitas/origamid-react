import "./Loading.scss";
import loading from '../assets/loading.png'

const Loading = () => {
  return <div className="loading-container">
    <img className="loading-icon" src={loading} />
  </div>
};

export default Loading;
