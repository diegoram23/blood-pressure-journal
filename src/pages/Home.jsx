import BpForm from "../components/BpForm";
import RecentReadings from "../components/RecentReadings";
import useFetch from "../components/useFetch";
import BpBackground from '../bp-background.jpg'
import useCollection from '../hooks/useCollection.js'

const Home = () => {
    const { dataReadings } = useFetch()
    const {documents: bloodpreadings} = useCollection('blood-pressure-readings')
    console.log(bloodpreadings)
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