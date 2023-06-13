import BpForm from "../components/BpForm";
import RecentReadings from "../components/RecentReadings";
import useFetch from "../components/useFetch";
import BpBackground from '../bp-background.jpg'

const Home = () => {
    const { dataReadings } = useFetch()

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