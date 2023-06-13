import useCollection from "../hooks/useCollection";
import { updateDoc } from "firebase/firestore";


const RecentReadings = () => {

    const {documents: bpReadings} = useCollection('blood-pressure-readings')
    const recentThree = bpReadings.slice(0,3)

    const handleEdit = (id) => {
        console.log('yes', id)
    }

    return (
        <div className="container">
            <h2>Recent Readings</h2>
            <div className="readings-container">

                {/* Table HTML */}
                <table>
                    <tbody>
                        <tr>
                            <th>Reading</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>

                        {/* Maps over data and renders it in table html form */}
                        {recentThree.map((data, index) => {
                            return <tr key={index} className="testt">
                                <td>{data.reading}</td>
                                <td>{data.time}</td>
                                <td>{data.when}</td>
                                <td><button className="edit-btn" onClick={() => handleEdit(data.id)}>Edit</button></td>
                            </tr>
                        })}

                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default RecentReadings;