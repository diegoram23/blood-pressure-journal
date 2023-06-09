import { useState } from "react";
import useCollection from "../hooks/useCollection";

import { db } from "../firebase/config";
import { doc, deleteDoc, query, where } from "firebase/firestore";

const Journal = () => {

    const { documents: bpReadings } = useCollection('blood-pressure-readings')

    const [dataFiltered, setDataFiltered] = useState(bpReadings)

    const [emptyMessage, setEmptyMessage] = useState(true)

    //Deletes documents
    const handleDelete = async (id) => {
        const docRef = doc(db, 'blood-pressure-readings', id)
        await deleteDoc(docRef)
    }


    const [sortState, setSortState] = useState('')

    const handleSort = (sortValue) => {
        setEmptyMessage(false)
        setSortState(sortValue)

        //All readings
        if (sortValue === 'all') {
            setDataFiltered(bpReadings)
        }

        //Filters only readings in the moning
        else if (sortValue === 'morning') {
            const filtered = bpReadings.filter(bp => {
                return bp.time == 'Morning'
            })
            setDataFiltered(filtered)
        }

        //Filters only readings in the moning
        else if (sortValue === 'afternoon') {
            const filtered = bpReadings.filter(bp => {
                return bp.time == 'Afternoon'
            })
            setDataFiltered(filtered)
        }

        //Filters only readings in the moning
        else if (sortValue === 'evening') {
            const filtered = bpReadings.filter(bp => {
                return bp.time == 'Evening'
            })
            setDataFiltered(filtered)
        }

        //Sorts by high blood pressure readings
        else if (sortValue === 'high') {
            const filtered = bpReadings.filter(bp => {
                return bp.readingSys >= 150
            })
            setDataFiltered(filtered)
        }

        //Sorts by normal blood pressure readings
        else if (sortValue === 'normal') {
            const filtered = bpReadings.filter(bp => {
                return bp.readingSys < 150 && bp.readingSys > 100
            })
            setDataFiltered(filtered)
        }

        //Sorts by low blood pressure readings
        else if (sortValue === 'low') {
            const filtered = bpReadings.filter(bp => {
                return bp.readingSys <= 100
            })
            setDataFiltered(filtered)
        }

    }

    return (
        <div className="table-container">
            <h2>Sorted Readings</h2>
            <div className="readings-container">
                <select name="sort" id="sort" value={sortState} onChange={(e) => handleSort(e.target.value)}>
                    <option value=''>--Filter By--</option>
                    <option value='all'>All</option>
                    <option value='morning'>Morning</option>
                    <option value='afternoon'>Afternoon</option>
                    <option value='evening'>Evening</option>
                    <option value='high'>High BP</option>
                    <option value='normal'>Normal BP</option>
                    <option value='low'>Low BP</option>
                </select>
                <table>
                    <tbody>
                        {!emptyMessage && <tr>
                            <th>Reading</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>}
                        {/* Maps over data and renders it in table html form */}
                        {dataFiltered.map((data, index) => {
                            return <tr key={index}>
                                <td style={{ color: data.readingSys >= 150 ? 'red' : data.readingSys <= 100 ? 'blue' : 'green' }}>{data.readingSys}/{data.readingDia}</td>
                                <td>{data.time}</td>
                                <td>{data.when}</td>
                                <td><button className="edit-btn" onClick={() => handleDelete(data.id)}>Delete</button></td>

                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

            {emptyMessage && <h3 className="empty-journal">Choose a Category Above to Filter By</h3>}
        </div>
    );
}

export default Journal;