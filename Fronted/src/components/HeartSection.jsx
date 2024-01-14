import React from 'react'
import { Link } from 'react-router-dom'

const HeartSection = () => {
    return (
        <section className="vh-90">
            <div className="container-fluid"
                        style={{
                            marginTop:"4%"
                        }}
            >
                <div className="row">


                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src="./image/heart.jpg"
                            alt="Diabetes" className="w-100 vh-100" style={{ objectFit: "cover",borderRadius:"15%", objectPosition: "right" }} />
                    </div>

                    <div className="col-sm-6 text-black align-items-center"
                    style={{
                        marginTop: "10%",
                        paddingRight:"2%"
                    }}
                    >
                        <h1 class="card-title">Heart Diseases</h1>
                        <p class="card-text">Heart diseases, a leading global health concern, encompass conditions affecting the heart and blood vessels. Risk factors include hypertension, high cholesterol, smoking, obesity, and diabetes. Common types include coronary artery disease, heart failure, and arrhythmias. Lifestyle modifications, such as a healthy diet, regular exercise, and avoiding tobacco, play a pivotal role in prevention. Timely medical intervention and monitoring contribute to effective management of these conditions, promoting cardiovascular health....</p>
                        {/* <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
                        <Link to="/heart" class="btn btn-primary"> Check</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeartSection
