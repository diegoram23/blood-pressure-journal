import BpForm from "../components/BpForm";
import RecentReadings from "../components/RecentReadings";
import BpBackground from '../bp-background.jpg'

const Home = () => {
  
    return (
        <div>
            <section>
               <img className="hero-img" src={BpBackground}/>
            </section>
            <BpForm />
            <RecentReadings />
        </div>
    );
}

export default Home;