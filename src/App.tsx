import React from 'react';
import useZipCodeData from './use-zip-code';
import useDebounce from "./use-debounce";

const App: React.FC = () => {
  const { userInputCallback, data } = useZipCodeData()

  return (
    <div className="App">
      <header className="App-header">
        <h4>Example of using user input for api call with delaying throttle for input</h4>
        <p>
          Write ZIP code to test API call
        </p>
        <input onChange={useDebounce(userInputCallback, 1000)} />

        <ZipCodeDataView data={data}/>
      </header>
    </div>
  );
}

type ZipCodeData = {
  country: string
  places: [{"longitude":string,"place name": string}]
}

const ZipCodeDataView: React.FC<{ data?: ZipCodeData }> = ({data}) => {
  if (!data) return null

  const { country, places } = data

  return <div>
    <ul>
      <li>{country}</li>
      {places.map((data) => <li key={data.longitude}>{data["place name"]}, Longitude:{data.longitude}</li>)}
    </ul>
  </div>
}

export default App;
