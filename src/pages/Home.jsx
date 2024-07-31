import Slider from '../components/Slider';
import Cards from '../components/Cards';
import UserExperience from '../components/UserExperience';
import '../css/PublicPages-styles/App.css';

function Home() {
  return (
    <>
      <Slider />
      <Cards />
      <UserExperience />
    </>
  );
}

export default Home;
