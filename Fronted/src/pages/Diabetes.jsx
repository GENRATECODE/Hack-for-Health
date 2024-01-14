import React, { useState, } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

const Diabetes = ( ) => {
  const [preg, setPreg]= useState('') 
  const [plas, setPlas]= useState('') 
  const [pres, setPres]= useState('') 
  const [skin, setSkin]= useState('') 
  const [insu, setInsu]= useState('') 
  // const [weight, setWeight]= useState('') 
  // const [hight, setHight]= useState('')
  const [pedi, setPedi]= useState('') 
  const [age, setAge]= useState(' ') 
  const [bmi, setBmi]= useState('') 
  const [result, setResult]= useState('') 
  // console.log(result)
 
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const params= { preg, plas, pres, skin, insu, bmi, pedi, age }
    
    console.log(params)

    axios
      // .post('http://localhost:8080/prediction', params)
      // .post(`${process.env.API_URL}+/Diabeties`, params)

      // .post('process.env.API_URL/Diabeties', params)
      .post('https://10000-genratecode-hackforheal-evgm2dlr09z.ws-us107.gitpod.io/Diabeties', params)
      .then((res) => {
        const data = res.data
        // const parameters = JSON.stringify(params)
        // const msg = `Prediction: ${data.prediction}\nInterpretation: ${data.interpretation}\nParameters: ${parameters}`
        // alert(data)
        // reset()
        console.log(data)
        setResult(data)
      },)

      .catch((error) => alert(`Error: ${error.message}`))
      
  }
  const reset = () => {
    
    setResult('')
  }

  
  

      return (
        <>

  
        {(result!=='') ?
          ( <>
             <div  style={{ textAlign: 'center', marginTop: "10%"}}>
            <h1> Result :{result}</h1>
            <div className="pt-1 mb-4" style={{ textAlign: 'center' }} >
            <button className="btn btn-info btn-lg btn-block" type="submit" onClick={()=>reset()}>Check Again</button>
                      </div>
            </div> 
            </>): (
              <section className="vh-90">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 text-black">
                  <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                    <form  onSubmit={(e) => handleSubmit(e)} style={{ width: "100rem" }}>
                      <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px", textAlign: 'center' }}> Diabetes</h3>
                      <div className="form-outline mb-4">
                        <input
                          id="preg"
                          name='preg'
                          className="form-control form-control-lg"
                          placeholder="Number of times pregnant"
                          required
                          // max={17}
                          // min={0}
                          type="number"
                        value={preg}
                        onChange={(e) => setPreg(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="plas"
                          name='plas'
                          className="form-control form-control-lg"
                          placeholder="Plasma glucose concentration a 2 hours in an oral glucose tolerance test"
                          required
                          // max={}
                          // min={0}
                          type="number"
                        value={plas}
                        onChange={(e) => setPlas(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="pres"
                          name='pres'
                          className="form-control form-control-lg"
                          placeholder="Diastolic blood pressure (mm Hg)"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={pres}
                        onChange={(e) => setPres(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="skin"
                          name='skin'
                          className="form-control form-control-lg"
                          placeholder="Triceps skin fold thickness (mm)"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={skin}
                        onChange={(e) => setSkin(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="insu"
                          name='insu'
                          className="form-control form-control-lg"
                          placeholder="2-Hour serum insulin (mu U/ml)"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={insu}
                        onChange={(e) => setInsu(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="bmi"
                          name='bmi'
                          className="form-control form-control-lg"
                          placeholder="BMI in kg"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={bmi}
                        onChange={(e) => setBmi(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="pedi"
                          name='pedi'
                          className="form-control form-control-lg"
                          placeholder="Diabetes pedigree function"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={pedi}
                        onChange={(e) => setPedi(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="age"
                          name='age'
                          className="form-control form-control-lg"
                          placeholder="Age in year"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
    
                      <div className="pt-1 mb-4" style={{ textAlign: 'center' }} >
                        <button className="btn btn-info btn-lg btn-block" type="submit">Check</button>
                      </div>
    
                    </form>
    
                  </div>
    
                </div>
    
              </div>
            </div>
          </section>

            )}
          
          
          
        
     
     
          
        </>
      )
    }



export default Diabetes
