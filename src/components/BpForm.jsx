import { useState } from "react";
import RecentReadings from "./RecentReadings";
import SortReadings from "./SortReadings";
import useFetch from "./useFetch";

const BpForm = () => {

  // Empty states to be filled by form data
  const [reading, setReading] = useState('')
  const [time, setTime] = useState('')
  const [when, setWhen] = useState('')

  // useFetch retrieves hard coded data
  const { dataReadings } = useFetch()


  // Adds new readings to data
  const addReading = (reading, when, time) => {
    // New reading object
    let newReading = {
      reading: reading,
      when: when,
      time: time
    }
    // Sets new readings to new obj created above plus previous data
    setDataReadings([...dataReadings, newReading])
    console.log('update', dataReadings)
  }

  // Handles form data and calls add new reading function
  const handleSubmit = (e) => {
    e.preventDefault()
    addReading(reading, when, time)
  }

  return (
    <div className="container">

      {/* Form HTML */}
      <form onSubmit={handleSubmit}>

        <h2>Enter your Readings</h2>

        <div className="readings-container">

          {/* Blood pressure HTML */}
          <label htmlFor="reading">Blood Pressure</label>
          <input
            required
            type="text"
            id="reading"
            name="reading"
            value={reading}
            onChange={(e) => setReading(e.target.value)}
          />

          {/* Time of Day HTML */}
          <label>Time of Day</label>
          <select name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)}>
            <option value=''>-- Select --</option>
            <option value='morning'>Morning</option>
            <option value='afternoon'>Afternoon</option>
            <option value='evening'>Evening</option>
          </select>

          {/* Date HTML */}
          <label htmlFor="when">Date</label>
          <input
            required
            type="date"
            id="when"
            name="when"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
          />

          {/* Submit Button */}
          <button>Submit</button>
        </div>
      </form>

    </div>
  );
}

export default BpForm;