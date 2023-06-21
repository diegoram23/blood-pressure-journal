import useCollection from "../hooks/useCollection";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";


const RecentReadings = () => {

    const { documents: bpReadings } = useCollection('blood-pressure-readings')
    const recentThree = bpReadings.slice(0, 3)


    const handleDelete = async (id) => {
        const docRef = doc(db, 'blood-pressure-readings', id)
        await deleteDoc(docRef)
    }

    return (
        <div className="table-container">
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
                                <td style={{color: data.readingSys >= 150 ? 'red' : data.readingSys <= 100 ? 'blue' : 'green'}}>{data.readingSys}/{data.readingDia}</td>
                                <td>{data.time}</td>
                                <td>{data.when}</td>
                                <td><button className="edit-btn" onClick={() => handleDelete(data.id)}>Delete</button></td>
                            </tr>
                        })}

                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default RecentReadings;