from back.api.database import DataBase
from back.api.models import ReservoirParameters, ReservoirStatus
from datetime import datetime
import pyarrow as pa
from decimal import Decimal

class RecordsDB:
    @staticmethod
    def post_reservoir_parameters(params: ReservoirParameters):
        id_exists = DataBase.id_exists(params.id)
        if id_exists:
            return "Erro: ID already exists"
        else:
            DataBase.post_reservoir_parameters(params)
        
    @staticmethod
    def post_reservoir_status(params: ReservoirStatus):
        response = DataBase.post_reservoir_status(params)
        return response
        
    @staticmethod
    def update_height(height:float, id:str):
        response = DataBase.update_height(height,id)
        if response == None or response == False:
            return 'ERRO! Altura não atualizada'
        else:
            return response
        
    @staticmethod
    def update_name(name:str, id:str):
        response = DataBase.update_name(name,id)
        if response == None or response == False:
            return 'ERRO! Nome não atualizada'
        else:
            return response
        
    @staticmethod
    def update_records_limit_1(limit:float, id:str):
        response = DataBase.update_alert_limit_1(limit, id)
        if response == None or response == False:
            return 'ERRO! Alert Limit 1 não atualizada'
        else:
            return response
    
    @staticmethod
    def update_records_limit_2(limit:float, id:str):
        response = DataBase.update_alert_limit_2(limit, id)
        if response == None or response == False:
            return 'ERRO! Alert Limit 2 não atualizada'
        else:
            return response
    
    
    @staticmethod
    def update_records_limit_3(limit:float, id:str):
        response = DataBase.update_alert_limit_3(limit, id)
        if response == None or response == False:
            return 'ERRO! Alert Limit 3 não atualizada'
        else:
            return response
        
    @staticmethod
    def get_reservoir_by_id(id:str):
        reservoir = DataBase.get_reservoir_by_id(id)
        return reservoir
    
    @staticmethod
    def get_reservoir_status_by_date(id:str, start_date: datetime, end_date:datetime):
        status = DataBase.get_reservoir_status_by_date(id,start_date,end_date)
        return status
    
    @staticmethod
    def get_reservoir_status_by_id(id: str):
        status = DataBase.get_reservoir_status_by_id(id)
        data = {}
        for col in status.column_names:
            values = status[col].to_pylist()
            if values and isinstance(values[0], pa.TimestampScalar):
                data[col] = [RecordsDB._convert_timestamp_to_datetime(val.as_py()) for val in values]
            else:
                data[col] = values
        
        dados = []
        
        for valores in range(len(data["water_height"])):
            dic = {}
            for chaves in data.keys():
                dic[chaves] = data[chaves][valores]
            dados.append(dic)

        return dados

    @staticmethod
    def _convert_timestamp_to_datetime(timestamp):
        if timestamp is not None:
            timestamp_seconds = timestamp // 10**9
            return datetime.utcfromtimestamp(timestamp_seconds)
        else:
            return None
        
    @staticmethod
    def get_lastest_reservoir_status_by_id(id: str):
        last_status = DataBase.get_lastest_reservoir_status_by_id(id)
        # Extracting values from nested lists
        bomb_hours = float(str(last_status["bomb_hours"][0]))
        id_value = (str(last_status["id"][0]))
        time = str(last_status["time"][0])
        time_stamp = str(last_status["time_stamp"][0])
        water_flow_in = float(str(last_status["water_flow_in"][0]))
        water_flow_out = float(str(last_status["water_flow_out"][0]))
        water_height = float(str(last_status["water_height"][0]))
        water_humidity = float(str(last_status["water_humidity"][0]))
        water_voltage = float(str(last_status["water_voltage"][0]))
        
        # Constructing a dictionary with extracted values
        serialized_status = {
            "bomb_hours": bomb_hours,
            "id": id_value,
            "time": time,
            "time_stamp": time_stamp,
            "water_flow_in": water_flow_in,
            "water_flow_out": water_flow_out,
            "water_height": water_height,
            "water_humidity": water_humidity,
            "water_voltage": water_voltage
        }

        return serialized_status
        
    @staticmethod
    def get_reservoirs():
        reservoirs = DataBase.get_reservoirs()
        return reservoirs   
    
    @staticmethod
    def id_existis(id:str):
        is_id = DataBase.id_exists(id)
        return is_id     