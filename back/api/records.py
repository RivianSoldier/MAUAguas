from back.api.database import DataBase
from back.api.models import ReservoirParameters, ReservoirStatus
from datetime import datetime

class RecordsDB:
    @staticmethod
    def post_reservoir_parameters(params: ReservoirParameters):
        id_exists = DataBase.id_exists(params.id)
        if id_exists:
            print("Erro: ID already exists")
        else:
            DataBase.post_reservoir_parameters(params)
        
    @staticmethod
    def post_reservoir_status(params: ReservoirStatus):
        DataBase.post_reservoir_status(params)
        
    @staticmethod
    def update_height(height:float, id:str):
        DataBase.update_height(height,id)
        
    @staticmethod
    def update_name(name:str, id:str):
        DataBase.update_name(name,id)
        
    @staticmethod
    def update_records_limit_1(limit:float, id:str):
        DataBase.update_alert_limit_1(limit, id)
    
    @staticmethod
    def update_records_limit_2(limit:float, id:str):
        DataBase.update_alert_limit_2(limit, id)
    
    @staticmethod
    def update_records_limit_3(limit:float, id:str):
        DataBase.update_alert_limit_3(limit, id)
        
    @staticmethod
    def get_reservoir_by_id(id:str):
        reservoir = DataBase.get_reservoir_by_id(id)
        return reservoir
    
    @staticmethod
    def get_reservoir_status_by_date(id:str, start_date: datetime, end_date:datetime):
        status = DataBase.get_reservoir_status_by_date(id,start_date,end_date)
        return status
    
    @staticmethod
    def get_reservoir_status_by_id(id:str):
        status = DataBase.get_reservoir_status_by_id(id)
        return status
    
    def get_lastest_reservoir_status_by_id(id:str):
        last_status = DataBase.get_lastest_reservoir_status_by_id(id)
        return last_status