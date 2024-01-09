import pickle as pi
import pandas as pd 
import uvicorn 
from pydantic import BaseModel
import json
from fastapi import FastAPI     
from fastapi.middleware.cors import CORSMiddleware
app= FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class model_input(BaseModel):
    age:int
    sex: int
    cp: int
    trestbps: int
    chol:int
    fbs:int
    restecg:int
    thalach:int
    exang: int
    oldpeak: float
    slope:int
    ca:int
    thal:int
def output(n,for_use):
    if n==1:
        return "Yes, You have Heart Problem"
    else:
        return "No, You have not Heart {}".format(for_use)
def result_heart(input_parameters):
    col=["age","sex","cp","trestbps","chol","fbs","restecg","thalach","exang","oldpeak","slope","ca","thal"]
    data=[i for i in input_parameters]
    print(data)
    # loaded_model=pi.load(open(filename,'rb'))
    # return json.dump(output_label(loaded_model.predict(),"heart"))
    return json.dump("work well done")
# Setting up the home route
@app.get("/")
def read_root():
    return {"Data": "Hack-for-Health\n Welcome to online Early Health Prediction "}


# Setting up the prediction route
@app.post("/heart")
async def prediction_heart(input_parameters: model_input):
    txt=input_parameters.text
    return result_heart(input_parameters)

# @app.post("/parkinson")
# async def prediction_parkinson(input_parameters:model_input):

# @app.post("/Diabeties")

# configuring the server host and port
if __name__=="__main__":
    uvicorn.run(app,"0.0.0.0","10000")