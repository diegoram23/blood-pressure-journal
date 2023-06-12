import BpForm from "../components/BpForm";
import RecentReadings from "../components/RecentReadings";
import useFetch from "../components/useFetch";

const Home = () => {
    const {dataReadings} = useFetch()

    return (
        <>
            <BpForm />
            <RecentReadings />
        </>
    );
}

export default Home;