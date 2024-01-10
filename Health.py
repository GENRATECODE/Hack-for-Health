import pickle
from sklearn.preprocessing import FunctionTransformer
import re
import string
import uvicorn
from pydantic import BaseModel
import json
import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# Initializing the fast API server
app = FastAPI()

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
# for parkison 

# for Diabeties 
    Pregnancies :int
    Glucose  :int       
    BloodPressure :int
    SkinThickness :int
    Insulin :int
    BMI:float
    DiabetesPedigreeFunction :float
    Age:int

def output(n,for_use):
    if n==1:
        return "Positive,{f}".format(f=for_use)
    else:
        return "Negative, {f}".format(f=for_use)
def result_heart(age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal):
    colmn =["age","sex","cp","trestbps","chol","fbs","restecg","thalach","exang","oldpeak","slope","ca","thal"]
    data=[[age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal]]
    print(data)
    x=pd.DataFrame(data=data,columns=colmn)
    print(x)
    filename="models/HeartDIease.pickle"
    # loaded_model=pi.load(open(filename,'rb'))
    # return json.dump(output_label(loaded_model.predict(),"heart"))
    return json.dumps("check_1 ")

#  function  Diabeteis 

def result_Diabeties(Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age):
    colmn =['Pregnancies','Glucose','BloodPressure','SkinThickness','Insulin','BMI','DiabetesPedigreeFunction','Age']
    data=[Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age]
    print(data)
    x=pd.DataFrame(data=data,columns=colmn)
    print(x)
    filename="models/Diabetes.pickle"
    # loaded_model=pi.load(open(filename,'rb'))
    # return json.dump(output_label(loaded_model.predict(),"Diabetes"))
    return json.dumps("check_2")

#   Parkison function 
def result_parkinson():
    pass
# Setting up the home route
@app.get("/")
def read_root():
    return {"Data": "Hack-for-Health\n Welcome to online Early Health Prediction "}

# # Setting up the prediction route
@app.post("/heart")
async def prediction_heart(input_parameters: model_input):
    age=input_parameters.age
    sex=input_parameters.sex
    cp=input_parameters.cp
    trestbps=input_parameters.trestbps
    chol=input_parameters.chol
    fbs=input_parameters.fbs
    restecg=input_parameters.restecg
    thalach=input_parameters.thalach
    exang=input_parameters.exang
    oldpeak=input_parameters.oldpeak
    slope=input_parameters.slope
    ca=input_parameters.ca
    thal=input_parameters.thal
    return result_heart(age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal)

# @app.post("/parkinson")
# async def prediction_parkinson(input_parameters:model_input):

@app.post("/Diabeties")
async def prediction_diabeties(input_parameters:model_input):
    Pregnancies=input_parameters.Pregnancies               
    Glucose=input_parameters.Glucose                     
    BloodPressure=input_parameters.BloodPressure               
    SkinThickness=input_parameters.SkinThickness               
    Insulin=input_parameters.Insulin                     
    BMI=input_parameters.BMI                         
    DiabetesPedigreeFunction=input_parameters.DiabetesPedigreeFunction    
    Age=input_parameters.Age   
    return result_Diabeties(Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age)                      

# configuring the server host and port
if __name__=="__main__":
    uvicorn.run(app,"0.0.0.0","10000")