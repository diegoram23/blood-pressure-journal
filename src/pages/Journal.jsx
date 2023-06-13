import { useState } from "react";
import useCollection from "../hooks/useCollection";
const Journal = () => {

    const {documents: bloodpreadings} = useCollection('blood-pressure-readings')
    console.log('journal', bloodpreadings)

    const [sort, setSort] = useState('Sort By')

    const handleSort = (sortValue) => {
        setSort(sortValue)
        if (sortValue === 'morning') {
            console.log('mornings');
        }
        else if (sortValue === 'afternoon') {
            console.log('afternoons');
        }
        else if (sortValue === 'evenings') {
            console.log('evenings')
        }
        else if (sortValue === 'newest') {
            console.log('newest');
        }
        else {
            console.log('oldest');
        }

    }

    return (
        <div className="container">
            <h2>Sorted Readings</h2>
            <div className="readings-container">
                <select name="sort" id="sort" value={sort} onChange={(e) => handleSort(e.target.value)}>
                    <option value=''>{sort}</option>
                    <option value='morning'>Time Morning</option>
                    <option value='afternoon'>Time Afternoon</option>
                    <option value='evening'>Time Evening</option>
                    <option value='newest'>Newest</option>
                    <option value='oldest'>Oldest</option>
                </select>
                <table>

                    <tbody>
                        <tr>
                            <th>Reading</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>

                        {/* Maps over data and renders it in table html form */}
                        {bloodpreadings.map((data, index) => {
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