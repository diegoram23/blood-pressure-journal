
const RecentReadings = ({ dataReadings }) => {
    console.log('here', dataReadings)




    return (
        <div>
            <h2>Recent Readings</h2>
            <section>
                <table>
                    <tbody>
                        <tr>
                            <th>Reading</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>

                        {dataReadings.map((data, index) => {
                            return <tr key={index}>
                                <td>{data.reading}</td>
                                <td>{data.time}</td>
                                <td>{data.when}</td>

                            </tr>
                        })}

                    </tbody>

                </table>
            </section>

        </div>
    );
}

export default RecentReadings;