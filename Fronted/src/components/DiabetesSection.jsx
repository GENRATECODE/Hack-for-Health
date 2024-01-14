import React from 'react'
import { Link } from 'react-router-dom'

const DiabetesSection = () => {
    return (
        <section className="vh-90">
            <div className="container-fluid"
            style={{
                marginTop:"4%"
            }}
            >
                <div className="row">
                    <div className="col-sm-6 text-black align-items-center" 
                    style={{
                        marginTop: "10%",
                        paddingRight:"2%"
                    }}
                    >
                        <h1 class="card-title">Diabetis Diseases</h1>
                        <p class="card-text">Diabetes, a chronic metabolic disorder, results from insufficient insulin production or ineffective utilization. Types include Type 1, an autoimmune condition, and Type 2, often linked to lifestyle. Symptoms encompass increased thirst, hunger, and frequent urination. Complications may include heart disease, kidney failure, and nerve damage. Management involves medication, lifestyle adjustments, and regular monitoring of blood glucose levels. Early diagnosis and comprehensive care are essential for controlling diabetes and preventing associated complications......</p>
                        {/* <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
                        <Link to="/diabetes" class="btn btn-primary"> Check</Link>
                    </div>

                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src="./image/dib.jpg"
                            alt="Diabetes" className="w-100 vh-100" style={{ objectFit: "cover", borderRadius:"15%", objectPosition: "right" }} />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default DiabetesSection
