import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const NeurologicalDiseases = () => {
  const[MDVP_Fo_Hz,setMDVP_Fo_Hz]=useState('')
  const[MDVP_Fhi_Hz,setMDVP_Fhi_Hz]=useState('')
  const[MDVP_Flo_Hz,setMDVP_Flo_Hz]=useState('')
  const[MDVP_jitter_percentage,setMDVP_jitter_percentage]=useState('')
  const[MDVP_Jitter_Abs,setMDVP_Jitter_Abs]=useState('')
  const[MDVP_RAP,setMDVP_RAP]=useState('')
  const[MDVP_PPQ,setMDVP_PPQ]=useState('')
  const[Jitter_DDP,setJitter_DDP]=useState('')
  const[MDVP_Shimmer,setMDVP_Shimmer]=useState('')
  const[MDVP_Shimmer_dB,setMDVP_Shimmer_dB]=useState('')
  const[Shimmer_APQ3,setShimmer_APQ3]=useState('')
  const[Shimmer_APQ5,setShimmer_APQ5]=useState('')
  const[MDVP_APQ,setMDVP_APQ]=useState('')
  const[Shimmer_DDA,setShimmer_DDA]=useState('')
  const[NHR,setNHR]=useState('')
  const[HNR,setHNR]=useState('')
  const[RPDE,setRPDE]=useState('')
  const[DFA,setDFA]=useState('')
  const[spread1,setspread1]=useState('')
  const[spread2,setspread2]=useState('')
  const[D2,setD2]=useState('')
  const[PPE,setPPE]=useState('')
  const [result, setResult]= useState('') 
 
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const params = {MDVP_Fo_Hz,MDVP_Fhi_Hz,MDVP_Flo_Hz,MDVP_jitter_percentage,MDVP_Jitter_Abs,MDVP_RAP,MDVP_PPQ,Jitter_DDP,MDVP_Shimmer,MDVP_Shimmer_dB,Shimmer_APQ3,Shimmer_APQ5,MDVP_APQ,Shimmer_DDA,NHR,HNR,RPDE,DFA,spread1,spread2,D2,PPE }
    // const params = { age, sex, cp, trestbps, chol,fbs, restecg, thalach, exang, oldpeak, slope, ca, thal,  }
console.log(params)
    axios
      // .post('http://localhost:8080/prediction', params)
      // .post('process.env.API_URL/parkinson', params)||
      .post('https://8000-genratecode-hackforheal-evgm2dlr09z.ws-us107.gitpod.io/parkinson', params)
      .then((res) => {
        const data = res.data
        
        console.log(typeof(data))
        console.log(data)
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
                      <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px", textAlign: 'center' }}> Neurological Diseases</h3>
                      <div className="form-outline mb-4">
                        <input
                          id="MDVP_Fo_Hz"
                          name='MDVP_Fo_Hz'
                          className="form-control form-control-lg"
                          placeholder="Average vocal fundamental frequency"
                          required
                          // max={17}
                          // min={0}
                          type="number"
                        value={MDVP_Fo_Hz}
                        onChange={(e) => setMDVP_Fo_Hz(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="MDVP_Fhi_Hz"
                          name='MDVP_Fhi_Hz'
                          className="form-control form-control-lg"
                          placeholder="Maximum vocal fundamental frequency"
                          required
                          // max={}
                          // min={0}
                          type="number"
                        value={MDVP_Fhi_Hz}
                        onChange={(e) => setMDVP_Fhi_Hz(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="MDVP_Flo_Hz"
                          name='MDVP_Flo_Hz'
                          className="form-control form-control-lg"
                          placeholder="Minimum vocal fundamental frequency"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={MDVP_Flo_Hz}
                        onChange={(e) => setMDVP_Flo_Hz(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="MDVP_jitter_percentage"
                          name='MDVP_jitter_percentage'
                          className="form-control form-control-lg"
                          placeholder="Percentage of cycle-to-cycle variability of the period duration"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={MDVP_jitter_percentage}
                        onChange={(e) => setMDVP_jitter_percentage(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="MDVP_Jitter_Abs"
                          name='MDVP_Jitter_Abs'
                          className="form-control form-control-lg"
                          placeholder="Absolute value of cycle-to-cycle variability of the period duration"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={MDVP_Jitter_Abs}
                        onChange={(e) => setMDVP_Jitter_Abs(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="MDVP_RAP"
                          name='MDVP_RAP'
                          className="form-control form-control-lg"
                          placeholder="Relative measure of the pitch disturbance"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={MDVP_RAP}
                        onChange={(e) => setMDVP_RAP(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="MDVP_PPQ"
                          name='MDVP_PPQ'
                          className="form-control form-control-lg"
                          placeholder="Pitch perturbation quotient"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={MDVP_PPQ}
                        onChange={(e) => setMDVP_PPQ(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="Jitter_DDP"
                          name='Jitter_DDP'
                          className="form-control form-control-lg"
                          placeholder="Average absolute difference of differences between jitter cycles"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={Jitter_DDP}
                        onChange={(e) => setJitter_DDP(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="MDVP_Shimmer"
                          name='MDVP_Shimmer'
                          className="form-control form-control-lg"
                          placeholder="Variations in the voice amplitdue"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={MDVP_Shimmer}
                        onChange={(e) => setMDVP_Shimmer(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="MDVP_Shimmer_dB"
                          name='MDVP_Shimmer_dB'
                          className="form-control form-control-lg"
                          placeholder="Variations in the voice amplitdue in dB"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={MDVP_Shimmer_dB}
                        onChange={(e) => setMDVP_Shimmer_dB(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="Shimmer_APQ3"
                          name='Shimmer_APQ3'
                          className="form-control form-control-lg"
                          placeholder="Three point amplitude perturbation quotient measured against the average of the three amplitude"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={Shimmer_APQ3}
                        onChange={(e) => setShimmer_APQ3(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="Shimmer_APQ5"
                          name='Shimmer_APQ5'
                          className="form-control form-control-lg"
                          placeholder="Five point amplitude perturbation quotient measured against the average of the three amplitude"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={Shimmer_APQ5}
                        onChange={(e) => setShimmer_APQ5(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="MDVP_APQ"
                          name='MDVP_APQ'
                          className="form-control form-control-lg"
                          placeholder="Amplitude perturbation quotient from MDVP"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={MDVP_APQ}
                        onChange={(e) => setMDVP_APQ(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="Shimmer_DDA"
                          name='Shimmer_DDA'
                          className="form-control form-control-lg"
                          placeholder="Amplitude perturbation quotient from MDVP"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={Shimmer_DDA}
                        onChange={(e) => setShimmer_DDA(e.target.value)}
                        />
                      </div>
                     
                      <div className="form-outline mb-4">
                        <input
                          id="NHR"
                          name='NHR'
                          className="form-control form-control-lg"
                          placeholder="Noise-to-harmonics Ratio"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={NHR}
                        onChange={(e) => setNHR(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="HNR"
                          name='HNR'
                          className="form-control form-control-lg"
                          placeholder="Harmonics-to-noise Ratio"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={HNR}
                        onChange={(e) => setHNR(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="RPDE"
                          name='RPDE'
                          className="form-control form-control-lg"
                          placeholder="Recurrence period density entropy"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={RPDE}
                        onChange={(e) => setRPDE(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="DFA"
                          name='DFA'
                          className="form-control form-control-lg"
                          placeholder="Age in yearSignal fractal scaling exponent"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={DFA}
                        onChange={(e) => setDFA(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="spread1"
                          name='spread1'
                          className="form-control form-control-lg"
                          placeholder="discrete probability distribution of occurrence of relative semitone variations"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={spread1}
                        onChange={(e) => setspread1(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="spread2"
                          name='spread2'
                          className="form-control form-control-lg"
                          placeholder="Three nonlinear measures of fundamental frequency variation"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={spread2}
                        onChange={(e) => setspread2(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          id="D2"
                          name='D2'
                          className="form-control form-control-lg"
                          placeholder="correlation dimension"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={D2}
                        onChange={(e) => setD2(e.target.value)}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          id="PPE"
                          name='PPE'
                          className="form-control form-control-lg"
                          placeholder="Entropy of the discrete probability distribution of occurrence of relative semitone variations"
                          required
                          // max={66}
                          // min={0}
                          type="number"
                        value={PPE}
                        onChange={(e) => setPPE(e.target.value)}
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


export default NeurologicalDiseases


