import useFetch from "./useFetch";


const RecentReadings = () => {

    const { dataReadings } = useFetch()


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
                        {dataReadings.map((data, index) => {
                            return <tr key={index}>
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