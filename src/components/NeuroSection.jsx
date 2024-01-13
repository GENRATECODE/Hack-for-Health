import React from 'react'
import { Link } from 'react-router-dom'

const NeuroSection = () => {
    return (
        <section className="vh-90">
            <div className="container-fluid" 
                        style={{
                            marginTop:"4%"
                        }}
            >
                <div className="row">


                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src="./image/neuro.jpg"
                            alt="Diabetes" className="w-100 vh-100" style={{ objectFit: "cover",  borderRadius:"15%", objectPosition: "right" }} />
                    </div>

                    <div className="col-sm-6 text-black align-items-center"
                    style={{
                        marginTop: "15%",
                        // marginRight: "4%",
                        paddingRight:"2%"
                    }}
                    >
                        <h1 class="card-title">Neurological Diseases(Parkinson)</h1>
                        <p class="card-text">Parkinson's disease, a progressive neurodegenerative disorder, affects movement control. Symptoms include tremors, stiffness, and difficulty with balance and coordination. Resulting from the loss of dopamine-producing cells in the brain, its exact cause remains unclear. While medications can alleviate symptoms, there is no cure. Supportive therapies, such as physical exercise and speech therapy, aid in managing the condition. Ongoing research seeks to deepen our understanding and develop more effective treatments for Parkinson's disease.....</p>
                        {/* <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
                        <Link to="/neurological" class="btn btn-primary"> Check</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default NeuroSection
