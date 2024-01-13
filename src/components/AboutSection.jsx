import React from 'react'

const AboutSection = () => {
  return (
    <>
      <div className="jumbotron" style={{marginLeft: '5%',marginRight: '5%', marginTop: '5%' , textAlign:"center", borderBlockColor:"black"}}>
<h1>Project Title: - Quick Health Analyser </h1>  
  <h1 className="display-4">Introduction </h1>
  <p className="lead">In a transformative shift for healthcare, integrating machine learning into early illness detection heralds a paradigm change. Our mission is to revolutionize diagnostic capabilities, empower healthcare practitioners, and enhance global quality of life. Harnessing the potency of advanced algorithms, we aim to usher in a new era of proactive health management for individuals worldwide.
</p>
  
<h2>Problem Statement </h2> <br/>

Early illness identification is an important worldwide public health goal. Using machine learning (ML) approaches to assess consumer diagnostic data has emerged as a game-changing approach to early-stage illness identification. This paradigm focuses on three specific diseases: heart disease, diabetes, and Parkinson's disease.

Machine learning algorithms, particularly classification models, play an important role in this process. These models are trained on various datasets containing diagnostic information from people. The input characteristics might comprise a variety of health indicators, genetic markers, lifestyle variables, and other pertinent data. Machine learning algorithms learn to discover patterns and develop connections with the early stages of heart disease, diabetes, and Parkinson's disease by analyzing these complex datasets.
The importance of early detection cannot be emphasized. It allows for faster intervention and tailored treatment programs, which ultimately improves patient outcomes and reduces the strain on healthcare systems. The use of machine learning in illness detection also helps to construct prediction models that improve risk assessment and guide prevention methods.

Furthermore, implementing such ML-based diagnostic systems requires coordination among healthcare specialists, data scientists, and technology experts. Ethical issues, data privacy, and model interpretability become critical when deploying these technologies in real-world healthcare settings.

`In short, using machine learning into early illness detection efforts represents a paradigm change in healthcare. We want to transform diagnostic capabilities, empower healthcare practitioners, and, eventually, improve the quality of life for people throughout the world by using the power of powerful algorithms.`

we are make Detect only three.

1. `Heart Disease `
2. `Diabetes Disease`
3. `Parkinson's Disease`
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    {/* <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
  </p>
</div>
    </>
  )
}

export default AboutSection
