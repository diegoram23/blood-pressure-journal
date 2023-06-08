import { useState } from "react";
import RecentReadings from "./RecentReadings";

const BpForm = () => {

  let dataReadings = [
    {
      reading: '140/60',
      time: 'afternoon',
      when: '2023-05-23'
    }
  ]


  class Reading {
    constructor(reading, time, when) {
      this.reading = reading
      this.time = time
      this.when = when
    }
  }

  const addReading = () => {
    dataReadings.push(new Reading(reading, time, when))
  }

  const [reading, setReading] = useState('')
  const [time, setTime] = useState('')
  const [when, setWhen] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addReading()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Enter your Readings</h2>
        <label htmlFor="reading">Blood Pressure</label>
        <input
          required
          type="text"
          id="reading"
          name="reading"
          value={reading}
          onChange={(e) => setReading(e.target.value)}
        />

        <label>Time of Day</label>
        <select name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)}>
          <option value=''>-- Select --</option>
          <option value='morning'>Morning</option>
          <option value='afternoon'>Afternoon</option>
          <option value='evening'>Evening</option>
        </select>

        <label htmlFor="when">Date</label>
        <input
          required
          type="date"
          id="when"
          name="when"
          value={when}
          onChange={(e) => setWhen(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <RecentReadings dataReadings={dataReadings}/>
    </div>
  );
}

export default BpForm;