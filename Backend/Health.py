import pickle as pi
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
    # heart Diease 
    age:int|None=None
    sex: int|None=None
    cp: int|None=None
    trestbps: int|None=None
    chol:int|None=None
    fbs:int|None=None
    restecg:int|None=None
    thalach:int|None=None
    exang: int|None=None
    oldpeak: float|None=None
    slope:int|None=None
    ca:int|None=None
    thal:int|None=None
    # for parkison 
    MDVP_Fo_Hz:float|None=None
    MDVP_Fhi_Hz:float|None=None
    MDVP_Flo_Hz:float|None=None
    MDVP_jitter_percentage:float|None=None
    MDVP_Jitter_Abs:float|None=None
    MDVP_RAP:float|None=None
    MDVP_PPQ:float|None=None
    Jitter_DDP:float|None=None
    MDVP_Shimmer:float|None=None
    MDVP_Shimmer_dB:float|None=None
    Shimmer_APQ3:float|None=None
    Shimmer_APQ5:float|None=None
    MDVP_APQ:float|None=None
    Shimmer_DDA:float|None=None
    NHR:float|None=None
    HNR:float|None=None
    RPDE:float|None=None
    DFA:float|None=None
    spread1:float|None=None
    spread2:float|None=None
    D2:float|None=None
    PPE:float|None=None
    # for Diabeties 
    preg :int|None=None
    plas  :int|None=None       
    pres :int|None=None
    skin :int|None=None
    insu :int|None=None
    bmi:float|None=None
    pedi :float|None=None
    # height:float|None=None
    # weight:float|None=None

# Output label return 
def output(n,for_use):
    if n==1:
        return "Positive,{f}".format(f=for_use)
    else:
        return "Negative, {f}".format(f=for_use)

def result_heart(age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal):
    colmn =["age","sex","cp","trestbps","chol","fbs","restecg","thalach","exang","oldpeak","slope","ca","thal"]
    data=[[age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal]]
    if len(data[0])%13==0 and  not(any(item is  None for item in data[0])):
        print(data)
        x=pd.DataFrame(data=data,columns=colmn)
        print(x)
        filename="models/HeartDIease.pickle"
        # loaded_model=pi.load(open(filename,'rb'))
        # result=output(loaded_model.predict(),"heart")
        result="check_1"
        return json.dumps(result)
    else:
        return json.dumps("Not Proper Value")

#  function  Diabeteis 

def result_Diabeties(Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age):
    colmn =['Pregnancies','Glucose','BloodPressure','SkinThickness','Insulin','BMI','DiabetesPedigreeFunction','Age']
    data=[[Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age]]
    if len(data[0])%8==0 and not(any(item is  None for item in data[0])):
        print(data)
        x=pd.DataFrame(data=data,columns=colmn)
        print(x)
        filename="models/Diabetes.pickle"
        # loaded_model=pi.load(open(filename,'rb'))
        # # return json.dump(output_label(loaded_model.predict(),"Diabetes"))
        result=output(loaded_model.predict(),"Diabetes")
        # result="check_2"
        return json.dumps(result)
    else:
        value="Not Proper Value"
        return json.dumps(value)

#   Parkison function 
def result_parkinson(MDVP_Fo_Hz,MDVP_Fhi_Hz,MDVP_Flo_Hz,MDVP_jitter_percentage,MDVP_Jitter_Abs,MDVP_RAP,MDVP_PPQ,Jitter_DDP,MDVP_Shimmer,MDVP_Shimmer_dB,Shimmer_APQ3,Shimmer_APQ5,MDVP_APQ,Shimmer_DDA,NHR,HNR,RPDE,DFA,spread1,spread2,D2,PPE):
    column =['MDVP_Fo_Hz','MDVP_Fhi_Hz','MDVP_Flo_Hz','MDVP_jitter_percentage','MDVP_Jitter_Abs','MDVP_RAP','MDVP_PPQ','Jitter_DDP','MDVP_Shimmer','MDVP_Shimmer_dB','Shimmer_APQ3','Shimmer_APQ5','MDVP_APQ','Shimmer_DDA','NHR','HNR','RPDE','DFA','spread1','spread2','D2','PPE']
    data=[[MDVP_Fo_Hz,MDVP_Fhi_Hz,MDVP_Flo_Hz,MDVP_jitter_percentage,MDVP_Jitter_Abs,MDVP_RAP,MDVP_PPQ,Jitter_DDP,MDVP_Shimmer,MDVP_Shimmer_dB,Shimmer_APQ3,Shimmer_APQ5,MDVP_APQ,Shimmer_DDA,NHR,HNR,RPDE,DFA,spread1,spread2,D2,PPE]]
    print(any(item is None for item in data[0]))
    if len(data[0])%22==0 and any(item is not None for item in data[0]):
        print(data)
        x=pd.DataFrame(data=data,columns=column)
        print(x)
        filename="models/Parkison.pickle"
        # loaded_model=pi.load(open(filename,'rb'))
        # result=output(loaded_model.predict(),"Parkinson")
        result="check_3"
        return json.dumps("check_3")
    else:
        return json.dumps("Not Proper Value")
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

@app.post("/parkinson")
async def prediction_parkinson(input_parameters:model_input):
    MDVP_Fo_Hz=input_parameters.MDVP_Fo_Hz
    MDVP_Fhi_Hz=input_parameters.MDVP_Fhi_Hz
    MDVP_Flo_Hz=input_parameters.MDVP_Flo_Hz
    MDVP_jitter_percentage=input_parameters.MDVP_jitter_percentage
    MDVP_Jitter_Abs=input_parameters.MDVP_Jitter_Abs
    MDVP_RAP=input_parameters.MDVP_RAP
    MDVP_PPQ=input_parameters.MDVP_PPQ
    Jitter_DDP=input_parameters.Jitter_DDP
    MDVP_Shimmer=input_parameters.MDVP_Shimmer
    MDVP_Shimmer_dB=input_parameters.MDVP_Shimmer_dB
    Shimmer_APQ3=input_parameters.Shimmer_APQ3
    Shimmer_APQ5=input_parameters.Shimmer_APQ5
    MDVP_APQ=input_parameters.MDVP_APQ
    Shimmer_DDA=input_parameters.Shimmer_DDA
    NHR=input_parameters.NHR
    HNR=input_parameters.HNR
    RPDE=input_parameters.RPDE
    DFA=input_parameters.DFA
    spread1=input_parameters.spread1
    spread2=input_parameters.spread2
    D2=input_parameters.D2
    PPE=input_parameters.PPE
    return result_parkinson(MDVP_Fo_Hz,MDVP_Fhi_Hz,MDVP_Flo_Hz,MDVP_jitter_percentage,MDVP_Jitter_Abs,MDVP_RAP,MDVP_PPQ,Jitter_DDP,MDVP_Shimmer,MDVP_Shimmer_dB,Shimmer_APQ3,Shimmer_APQ5,MDVP_APQ,Shimmer_DDA,NHR,HNR,RPDE,DFA,spread1,spread2,D2,PPE)

@app.post("/Diabeties")
async def prediction_diabeties(input_parameters:model_input):
    Pregnancies=input_parameters.preg               
    Glucose=input_parameters.plas                     
    BloodPressure=input_parameters.pres               
    SkinThickness=input_parameters.skin               
    Insulin=input_parameters.insu                     
    BMI=input_parameters.bmi                         
    DiabetesPedigreeFunction=input_parameters.pedi    
    Age=input_parameters.age   
    return result_Diabeties(Pregnancies,Glucose,BloodPressure,SkinThickness,Insulin,BMI,DiabetesPedigreeFunction,Age)                      

# configuring the server host and port
if __name__=="__main__":
    uvicorn.run(app,"0.0.0.0","10000")