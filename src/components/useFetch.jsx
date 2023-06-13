import { useState } from "react";

const useFetch = () => {

    const [dataReadings, setDataReadings] = useState([
        {
          reading: '140/60',
          time: 'Afternoon',
          when: '2023-05-23'
        },
        {
          reading: '140/60',
          time: 'Afternoon',
          when: '2023-05-23'
        }
      ])
      return {dataReadings}
}
 
export default useFetch;