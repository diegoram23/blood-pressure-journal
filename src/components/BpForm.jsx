import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const BpForm = () => {

  // Empty states to be filled by form data
  const [readingSys, setReadingSys] = useState('')
  const [readingDia, setReadingDia] = useState('')

  const [time, setTime] = useState('')
  const [when, setWhen] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  // Resets form inputs
  const resetForm = () => {
    setReadingDia('')
    setReadingSys('')
    setTime('')
    setWhen('')
  }

  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
  }


  // Handles form data and calls add new reading function
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const ref = collection(db, 'blood-pressure-readings')

    await addDoc(ref, {
      readingSys: readingSys,
      readingDia: readingDia,
      time: time,
      when: when,
    })
    
    setIsLoading(false)
    resetForm()
  }

  return (
    <div className="container">

      {/* Form HTML */}
      <form onSubmit={handleSubmit}>

        <h2>Enter Blood Pressure</h2>

        <div className="readings-container">
          {/* Blood pressure HTML */}
          <label htmlFor="readingSys">Blood Pressure</label>
          <div className="bp-container">

            <input
              required
              type="number"
              maxLength={3}
              onInput={maxLengthCheck}
              id="readingSys"
              name="readingSys"
              value={readingSys}
              onChange={(e) => setReadingSys(e.target.value)}
            />
            <span>/</span>
            <label htmlFor="readingSys"></label>
            <input
              required
              maxLength={3}
              onInput={maxLengthCheck}
              type="number"
              id="readingDia"
              name="readingDia"
              value={readingDia}
              onChange={(e) => setReadingDia(e.target.value)}
            />
          </div>



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
          {!isLoading && <button>Submit</button>}
          {isLoading && <button disabled>Adding</button>}
        </div>
      </form>

    </div>
  );
}

export default BpForm;