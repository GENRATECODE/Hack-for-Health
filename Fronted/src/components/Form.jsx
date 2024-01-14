import './Form.css'
import { useState } from 'react'
import axios from 'axios'

function Form() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [subject, setSubject] = useState('')
  const [date, setDate] = useState('')
  // const [output, setOutput] = useState()
  const [nb, setNb] = useState('')
  const [svc, setSvc] = useState('')
  const [rfc, setRfc] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    const params = { title, text, subject, date }

    axios
      // .post('http://localhost:8000/prediction', params)
      .post('https://10000-genratecode-mlapi-kiqbpdeuucx.ws-us102.gitpod.io/predict/', params)
      .then((res) => {
        const result = res.data
        console.log(result)
        
        // document.getElementsById(result).innerHTML ="result"
        var obj = JSON.parse(result);
        // setAns(obj)
        console.log(obj)
        setNb(`Naive Bayes(Multinomial Naive Bayes):- ${obj.nb}`)
        setSvc(`Support Vector Classifier:- ${obj.svc}`)
        setRfc(`Randon Forest Classifier:- ${obj.RFC}`)
        // setSvc(obj.svc)
        // setRfc(obj.RFC)
         
        // alert(typeof obj)
        // reset()
    
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }
// write down a function for print 
  const reset = () => {
    setTitle('')
    setText('')
    setSubject('')
    setDate('')
    setNb('')
    setSvc('')
    setRfc('')
  }

  return (
    <>
    <h1 className='glass'> Imaitation News Observation for Social Media Using Multiple Machine Model/Blockchain</h1>
    
    <br/><div className="glass">
      
      <form onSubmit={(e) => handleSubmit(e)} className="glass__form">
        <h4>WELCOME TO MAKE PREDICTION</h4>
        <h4>ENTER YOUR NEWS DETAILS</h4>
        <div className="glass__form__group">
          <input
            id="gender"
            className="glass__form__input"
            placeholder="Enter Title"
            required
            autoFocus
            type="text"
            value={title}
            limit maxLength={50}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="bsc"
            className="glass__form__input"
            placeholder="Enter Text"
            required
            type="text"
            value={text}
            limit minLength={250}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="workex"
            className="glass__form__input"
            placeholder="Enter subject"
            required
            type="text"
            value={subject}
            limit maxLength={80}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <input
            id="etest_p"
            className="glass__form__input"
            placeholder="Enter date"
            required
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="glass__form__group">
          <button type="submit" className="glass__form__btn">
            Submit
          </button>
        </div>
        <div className="glass__form__group  reset ">
          <button type="submit" onClick={()=>reset()} className="glass__form__btn">
            Reset
          </button>
        </div>
        
         <div className='glass'>
          <h1>Output </h1>
          <h3>{nb}</h3>
          <h3>{svc}</h3>
          <h3>{rfc}</h3>
          </div>
      </form>
      
    </div>
    </>
  )
}

export default Form