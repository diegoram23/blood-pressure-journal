import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const BpForm = () => {

  // Empty states to be filled by form data
  const [reading, setReading] = useState('')
  const [time, setTime] = useState('')
  const [when, setWhen] = useState('')

  
  // Handles form data and calls add new reading function
  const handleSubmit = async (e) => {
    e.preventDefault()

    const ref = collection(db, 'blood-pressure-readings')

    await addDoc(ref, {
      reading: reading,
      time: time,
      when: when,
    })
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
            <option value='Morning'>Morning</option>
            <option value='Afternoon'>Afternoon</option>
            <option value='Evening'>Evening</option>
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