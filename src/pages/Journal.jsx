import useFetch from "../components/useFetch";
const Journal = () => {
    const { dataReadings } = useFetch()
    console.log('journal', dataReadings)

    return (
        <div className="container">
            <h2>Sorted Readings</h2>
            <div className="readings-container">
                <select name="sort" id="sort">
                    <option value=''>Sort By</option>
                    <option value='morning'>Time Morning</option>
                    <option value='morning'>Time Afternoon</option>
                    <option value='morning'>Time Evening</option>

                </select>
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

export default Journal;