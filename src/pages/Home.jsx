import BpForm from "../components/BpForm";
import RecentReadings from "../components/RecentReadings";
import BpBackground from '../bp-background.jpg'
import useCollection from "../hooks/useCollection";

const Home = () => {
    const { documents: bpReadings } = useCollection('blood-pressure-readings')

    return (
        <div>
            <section>
               <img className="hero-img" src={BpBackground}/>
            </section>
            <BpForm />
            {bpReadings && <RecentReadings />}
        </div>
    );
}

export default Home;