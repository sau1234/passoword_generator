
import './App.css'
import { useState } from 'react'
function App() {
  const [password, setPassword] = useState("");
  const [numberCheck, setNumberCheck] = useState("");
  const [charachtercheck, setCharachterCheck] = useState("")
  const [length, setLength] = useState(8);
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  return (
    <div>
      <div>
        <input type="text" name="password"
          value={password}
          placeholder='Password'
          onChange={handlePassword}
          className='w-30 h-30 bg-slate-500 m-5 rounded'
          readOnly
        />
        <button className='w-20 h-10 rounded-md bg-green-500'>Copy</button>
      </div>

      <div>
        <div>
          <input type="range"
            min={8}
            max={30}
            onChange={ (e)=>{setRange(e.target.value)}}
          />
          <label> Length: {length}</label>
        </div>

        <div>
          <input type="checkbox"
            name='number'
            id='number'
            onChange={ (e) => {setNumberCheck(e.target.value)}}
          />
          <label htmlFor='number'>Number</label>
        </div>

        <div>
          <input type="checkbox"
            name='charachter'
            id='charachter'
            onChange={}
          />
          <label htmlFor='charachter'>Charachter</label>
        </div>

      </div>

    </div>

  )
}

export default App
