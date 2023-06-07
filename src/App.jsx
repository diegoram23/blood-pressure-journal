

function App() {

  return (
    <div>
      <h1>My Blood Pressure Journal</h1>

      <form className="info-container">
        <h2>Enter your Readings</h2>
        <label htmlFor="stat">Blood Pressure</label>
        <input
          required
          type="text"
          id="stat"
          name="stat"
        />

        <label>Time of Day</label>
        <select name="when" id="time">
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
        />
      </form>
    </div>
  )
}

export default App
