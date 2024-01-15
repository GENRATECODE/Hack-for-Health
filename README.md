# Hack-for-Health
Video Link: https://youtu.be/XnNUO4wbOYc
<h1>Project Title: - Quick Health Analyser </h1>  
<h2>Problem Statement </h2> </br>

Early illness identification is an important worldwide public health goal. Using machine learning (ML) approaches to assess consumer diagnostic data has emerged as a game-changing approach to early-stage illness identification. This paradigm focuses on three specific diseases: heart disease, diabetes, and Parkinson's disease.

Machine learning algorithms, particularly classification models, play an important role in this process. These models are trained on various datasets containing diagnostic information from people. The input characteristics might comprise a variety of health indicators, genetic markers, lifestyle variables, and other pertinent data. Machine learning algorithms learn to discover patterns and develop connections with the early stages of heart disease, diabetes, and Parkinson's disease by analyzing these complex datasets.
The importance of early detection cannot be emphasized. It allows for faster intervention and tailored treatment programs, which ultimately improves patient outcomes and reduces the strain on healthcare systems. The use of machine learning in illness detection also helps to construct prediction models that improve risk assessment and guide prevention methods.

Furthermore, implementing such ML-based diagnostic systems requires coordination among healthcare specialists, data scientists, and technology experts. Ethical issues, data privacy, and model interpretability become critical when deploying these technologies in real-world healthcare settings.

`In short, using machine learning into early illness detection efforts represents a paradigm change in healthcare. We want to transform diagnostic capabilities, empower healthcare practitioners, and, eventually, improve the quality of life for people throughout the world by using the power of powerful algorithms.`

we are make Detect only three.

1. `Heart Disease `
2. `Diabetes Disease`
3. `Parkinson's Disease`

# Setup
* Clone the Repo

```sh 
git clone https://github.com/GENRATECODE/Hack-for-Health.git
```
# Fronted


## Livelink of ui/ux https://quickhealthanalyser.netlify.app/
## Some screenshots of UI/UX

<img width="960" alt="image" src="https://github.com/GENRATECODE/Hack-for-Health/assets/70506939/499d453f-7e87-496c-b517-dc47a541a827">

<img width="960" alt="image" src="https://github.com/GENRATECODE/Hack-for-Health/assets/70506939/9e559b84-3c59-4ba6-be3c-8e223fe99e0d">

<img width="960" alt="image" src="https://github.com/GENRATECODE/Hack-for-Health/assets/70506939/e0d387c4-6846-4be6-96f1-794ce3b3288a">
<img width="960" alt="image" src="https://github.com/GENRATECODE/Hack-for-Health/assets/70506939/502886f4-d517-4ff4-8849-1aaf99b0ac87">
<img width="960" alt="image" src="https://github.com/GENRATECODE/Hack-for-Health/assets/70506939/2317ad1d-a32e-4a42-aa4b-7b36d954929f">
<img width="960" alt="image" src="https://github.com/GENRATECODE/Hack-for-Health/assets/70506939/1b5ba601-4908-4962-a55c-f3604334db45">

<img width="960" alt="image" src="https://github.com/GENRATECODE/Hack-for-Health/assets/70506939/23681627-dbaf-4bae-b6a8-3f2331d1c5ac">
<img width="960" alt="image" src="https://github.com/GENRATECODE/Hack-for-Health/assets/70506939/4be1bd0c-8171-449b-ad9a-df0b5ba9fff1">
<img width="537" alt="image" src="https://github.com/GENRATECODE/Hack-for-Health/assets/70506939/1211951f-f6b9-442b-9ee2-ecd6b9bc0749">



<h2>Backend</h2>
Need Python version Python 3.11.4 and additional requirements 

Install the necessary Library for Backend  Python 

```sh
pip3 install -r requirements.txt
```

# How to run this project 

* run fronted and backend code

<h2>Fronted</h2>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<h2>Backend</h2>
Run Command FastAPI  in terminal 

```sh 
uvicorn Backend.Health:app --host 0.0.0.0 --port 80
```

local host link generate through FastAPI and `past on where Fronted Post call` 
such as `http://0.0.0.0:80`

# Output: - 

<img width="537" alt="Screenshot 2024-01-15 013022" src="https://github.com/GENRATECODE/Hack-for-Health/assets/70506939/e9dcd303-97d7-4c90-b9d7-ab19ca8c4bdf">

