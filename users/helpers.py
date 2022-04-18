import requests
import json
import pandas as pd
import math
def bank_statement(bankcsv):
    response_api=requests.get(bankcsv)
    data=response_api.text
    parse_json=json.loads(data)
    df=pd.json_normalize(parse_json)

    # data_types_dict={"balance":int}
    # dv=df.astype(data_types_dict)

    df=df.astype({"balance":float,"amount":float})
    df_new=df[df["balance"]<df["amount"]]
    return df_new.shape[0]



def sentimental_analysis(senticsv):
    response_api=requests.get(senticsv)
    data=response_api.text
    parse_json=json.loads(data)
    df=pd.json_normalize(parse_json)
    df_new=df[df["Sentiment"]!=df["added"]]
    return df_new.shape[0]


def bill_default(billcsv):
    response_api=requests.get(billcsv)
    data=response_api.text
    parse_json=json.loads(data)
    df=pd.json_normalize(parse_json)
    df=df.astype({"amount_paid":float,"ave_monthly_income":float,"able":float})
    df_new=df[df["able"]<0]
    return df_new.shape[0]

def bill_score(bill_defaults):
    notdefault=12-bill_defaults
    per_target=(notdefault/12)*100
    final_score=(per_target/100)*5
    return final_score

def senti_score(senti_defaults):
    notdefault=31-senti_defaults
    per_target=(notdefault/31)*100
    final_score=(per_target/100)*5
    return final_score

def bank_score(bank_defaults):
    installment=(0.66*bank_defaults)
    bounce=(0.33*bank_defaults)
    sum2=0
    sum1=0
    if bounce==0:
        sum1=2.5
    elif bounce==1:
        sum1=2
    elif bounce==2:
        sum1=1
    elif bounce>2:
        sum1=0
    
    if installment<=1:
        sum2=2.5
    elif installment==2:
        sum2=2
    elif installment==3:
        sum2=1
    else:
        sum2=0
    return(sum1+sum2)


def sales_score(pan_obj):
    pro=(pan_obj.net_profit/pan_obj.gross_profit)*100
    
    if pro>=14:
        return 5
    elif (pro>=8  and pro<14):
        return 4
    elif (pro>=5  and pro<8):
        return 3.5
    elif (pro>=3.5  and pro<5):
        return 2
    elif (pro>=2  and pro<3.5):
        return 1
    return 0

def asset_score(pan_obj):
    assets=pan_obj.assets
    lendings=pan_obj.loans
    ratio=(assets/lendings)*100
    if ratio <25:
        return 0
    elif ratio>=25 and ratio<=35:
        return 3
    elif ratio>35:
        return 5

# def debt_score(pan_obj):
#     ratio=(pan_obj.assets-pan_obj.loans/pan_obj.assets)*100
#     debt_score
#     if pan_obj.assets>pan_obj.loans or :
#         pan_score=5
#     elif (pro>=8  and pro<14):
#         pan_score=4
#     elif (pro>=5  and pro<8):
#         pan_score=3.5
#     elif (pro>=3.5  and pro<5):
#         pan_score=2
#     elif (pro>=2  and pro<3.5):
#         pan_score=1
#     return pan_score





