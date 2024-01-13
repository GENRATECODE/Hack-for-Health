import React, { useState } from 'react'

import axios from 'axios'
// import { Link } from 'react-router-dom'

const HeartDiseases = () => {
  const [age, setAge]= useState('') 
  const [sex, setSex]= useState('') 
  const [cp, setCp]= useState('') 
  const [trestbps, setTrestbps]= useState('') 
  const [chol, setChol]= useState('') 
  const [fbs, setFbs]= useState('') 
  const [restecg, setRestecg]= useState('') 
  const [thalach, setThalach]= useState('') 
  const [exang, setExang]= useState('') 
  const [oldpeak, setOldpeak]= useState('') 
  const [slope, setSlope]= useState('') 
  const [ca, setCa]= useState('') 
  const [thal, setThal]= useState('') 
  const [result, setResult]= useState('') 
 
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = { age, sex, cp, trestbps, chol,fbs, restecg, thalach, exang, oldpeak, slope, ca, thal,  }
console.log(params)
    axios
      // .post('http://localhost:8080/prediction', params)
      // .post(`$(process.env.API_URL)+/heart`, params)
      .post('https://8000-genratecode-hackforheal-evgm2dlr09z.ws-us107.gitpod.io/heart', params)
      .then((res) => {
        const data = res.data
        
        setResult(data)
        // reset()
      })
      .catch((error) => alert(`Error: ${error.message}`))
  }



  const reset = () => {
    // setTitle('')
    // setText('')
    // setSubject('')
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
                  <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px", textAlign: 'center' }}>Heart Diseases</h3>
                  <div className="form-outline mb-4">
                    <input
                      id="age"
                      name='age'
                      className="form-control form-control-lg"
                      placeholder="Enter Your age"
                      required
                      max={66}
                      min={0}
                      type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="sex">Select Gender</label>
                    <select
                      id="sex"
                      
                      className="form-control form-control-lg"
                      placeholder="Enter Your sex"
                      required
                    // type=""

                    value={sex}
                    onChange={(e) => setSex(e.target.value)} 
                    >
                      <option  selected>Select Gender</option>
                      <option value="1" name='sex' selected>Male</option>
                      <option value="0" name='sex' >Female</option>
                    </select>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="cp">Select Chest Pain Type</label>
                    <select
                      id="cp"
                      
                      className="form-control form-control-lg"
                      placeholder="Enter Your sex"
                      required
                    // type=""

                    value={cp}
                    onChange={(e) => setCp(e.target.value)} 
                    >
                      <option  selected>Select </option>
                      <option value="0" name='cp' >Typical angina: chest pain related decrease blood supply to the heart</option>
                      <option value="1" name='cp' >Atypical Angina: chest pain not related to heart</option>
                      <option value="2" name='cp' >Non-anginal Pain: Typically esophageal spasms (non heart related)</option>
                      <option value="3" name='cp' >Aysmptomatic: chest pain not showing signs of disease</option>
                    </select>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      id="trestbps"
                      name='trestbps'
                      className="form-control form-control-lg"
                      placeholder="Resting blood presure ( in mmHg)"
                      required
                      type="number"
                    value={trestbps}
                    onChange={(e) => setTrestbps(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      id="chol"
                      name='chol'
                      className="form-control form-control-lg"
                      placeholder="Serum cholestoral in mg/dl"
                      required
                      type="number"
                    value={chol}
                    onChange={(e) => setChol(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      id="fbe"
                      name='fbe'
                      className="form-control form-control-lg"
                      placeholder="Fasting blood sugar"
                      required
                      type="number"
                    value={fbs}
                    onChange={(e) => setFbs(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="cp">Resting electrocardiographic result heart rate achieved</label>
                    <select
                      id="restecg"
                      
                      className="form-control form-control-lg"
                      // placeholder="Enter Your sex"
                      required
                    // type=""

                    value={restecg}
                    onChange={(e) => setRestecg(e.target.value)} 
                    >
                                            <option  selected>Select </option>
                      <option value="0" name='restecg' >Nothing to note</option>
                      <option value="1" name='restecg' >ST_T wave abnormality</option>
                      <option value="2"  name='restecg' >Possible or definite left ventricular hypertrophy</option>
                      {/* <option value="3" >Aysmptomatic: chest pain not showing signs of disease</option> */}
                    </select>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      id="thalach"
                      name='thalach'
                      className="form-control form-control-lg"
                      placeholder="thalach- Maxium heart rate achieved"
                      required
                      type="number"
                    value={thalach}
                    onChange={(e) => setThalach(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="exangex">Ercise include angina </label>
                    <select
                      id="exangex"
                      
                      className="form-control form-control-lg"
                      placeholder="Enter Your sex"
                      required
                    // type=""

                    value={exang}
                    onChange={(e) => setExang(e.target.value)} 
                    >
                      <option  selected>Select </option>
                      <option value="0" name='exangex' >No</option>
                      <option value="1" name='exangex' >Yes</option>
                      {/* <option value="2" >Non-anginal Pain: Typically esophageal spasms (non heart related)</option> */}
                      {/* <option value="3" >Aysmptomatic: chest pain not showing signs of disease</option> */}
                    </select>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      id="oldpeak"
                      name='oldpeak'
                      className="form-control form-control-lg"
                      placeholder="ST depression induced by exercise relative to rest looks at stress of heart stress more"
                      required
                      type="number"
                    value={oldpeak}
                    onChange={(e) => setOldpeak(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="slope">The slope of the peak exercise ST segment </label>
                    <select
                      id="slope"
                      
                      className="form-control form-control-lg"
                      placeholder="Enter Your sex"
                      required
                    // type=""

                    value={slope}
                    onChange={(e) => setSlope(e.target.value)} 
                    >
                      <option   selected>Select  </option>
                      <option value="0" name='slope' >Upslping better heart rate with excercise (uncommon)</option>
                      <option value="1" name='slope' >Flatsloping: minimal change (typical healthy heart )</option>
                      <option value="2" name='slope' >Downslopins: signs of unhealth heart</option>
                      {/* <option value="3" >Aysmptomatic: chest pain not showing signs of disease</option> */}
                    </select>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="ca">umber of major vessels (0-3) colored by floursosp </label>
                    <select
                      id="ca"
                      
                      className="form-control form-control-lg"
                      placeholder="Enter Your sex"
                      required
                    // type=""

                    value={ca}
                    onChange={(e) => setCa(e.target.value)} 
                    >
                      <option selected>Select </option>
                      <option value="0" name='ca' >colored vessel means the doctor can see the blood passing through</option>
                      <option value="1" name='ca' >the more blood movement the better (no clots)</option>
                      {/* <option value="2" >Non-anginal Pain: Typically esophageal spasms (non heart related)</option> */}
                      {/* <option value="3" >Aysmptomatic: chest pain not showing signs of disease</option> */}
                    </select>
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="thal">thal </label>
                    <select
                      id="thal"
                      
                      className="form-control form-control-lg"
                      placeholder="Enter Your sex"
                      required
                    // type=""

                    value={thal}
                    onChange={(e) => setThal(e.target.value)} 
                    >
                      <option  selected>Select</option>
                      <option value="3" name='thal' >normal</option>
                      <option value="6" name='thal' >fixed defect;used to be dect but ok now</option>
                      <option value="7" name='thal' >reversable defect: no proper blood movement when excercising</option>
                      {/* <option value="3" >Aysmptomatic: chest pain not showing signs of disease</option> */}
                    </select>
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

export default HeartDiseases
