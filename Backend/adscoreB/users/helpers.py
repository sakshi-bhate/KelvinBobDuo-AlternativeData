import requests
import json
import pandas as pd
def bank_data(apitocall):
    response_api=requests.get(apitocall)
    data=response_api.text
    parse_json=json.loads(data)
    df=pd.json_normalize(parse_json)

    # data_types_dict={"balance":int}
    # dv=df.astype(data_types_dict)

    df=df.astype({"balance":float,"amount":float})
    df_new=df[df["balance"]<df["amount"]]
    return df_new.shape[0]