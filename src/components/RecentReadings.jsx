import useCollection from "../hooks/useCollection";

const RecentReadings = () => {

    const {documents: bloodpreadings} = useCollection('blood-pressure-readings')
    console.log('recent', bloodpreadings)

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
                        {bloodpreadings.map((data, index) => {
                            return <tr key={index} className="testt">
                                <td>{data.reading}</td>
                                <td>{data.time}</td>
                                <td>{data.when}</td>
                            </tr>
                        })}

                    </tbody>

                </table>
            </div>
        </div>
    );
}

export default RecentReadings;