from influxdb_client_3 import InfluxDBClient3
from back.api.models import ReservoirParameters, ReservoirStatus
import json
from datetime import datetime

host = "us-east-1-1.aws.cloud2.influxdata.com"
org = "MAUAguas"
token = "NylhL3I74w3vMM8kOScKhZ_BB4K-E1TKyLM2KkmWdPnvPLJwz78BuE-SpPjMEeXQuydo0YtnT_56-_iKnG-ejA=="
client=InfluxDBClient3(host=host,org=org,token=token)
# client.switch_database("water_tank")

# Linha para testar a conexão com o banco, apenas mostrar as databases criadas
# É necessário ter o influxDB baixado de forma local, com um server rodando
# Tenha a database water_tank criada no seu influxDB local

# print(client.get_list_database())

# print(client.get_list_measurements())

class DataBase:

    @staticmethod
    def post_reservoir_parameters(params: ReservoirParameters):
        try:
            with open('reservoir.json','r') as json_file:
                data = json.load(json_file)
        except FileNotFoundError:
            data = {}
        info = {
            "id" : params.id,
            "name" : params.name,
            "well" : params.well,
            "height" : params.height,
            "alert_limit_1": params.alert_limit_1,
            "alert_limit_2": params.alert_limit_2,
            "alert_limit_3": params.alert_limit_3
        }
        data[params.id] = info
        with open('reservoir.json', 'w') as json_file:
            json.dump(data, json_file, indent=4) 
        print("Reservoir parameters posted successfully.")

    def post_reservoir_status(status: ReservoirStatus):
        try:
            time_stamp_str = status.time_stamp.isoformat()  # Converter para ISO 8601
            json_body = [
                {
                    "measurement": "reservoir_status",
                    "tags": {
                        "id": status.id
                    },
                    "fields": {
                        "water_height" : status.water_height,
                        "water_flow_in": status.water_flow_in,
                        "water_flow_out": status.water_flow_out,
                        "water_humidity": status.water_humidity,
                        "water_voltage": status.water_voltage,
                        "time_stamp": time_stamp_str,  # Usar a string formatada ISO 8601
                        "bomb_hours": status.bomb_hours
                    }
                }
            ]
            client.write(database='water_tank', record=json_body)
            return "Reservoir status posted successfully."
        except Exception as e: 
            return f"Failed to post status: {str(e)}"

    @staticmethod
    def id_exists(id:str):
        try:
            with open('reservoir.json', 'r') as json_file:
                data = json.load(json_file)
                if id in data:
                    return True
                else:
                    return False
        except FileNotFoundError:
            return False

    @staticmethod
    def update_height(height: float, id: str):
        try:
            with open('reservoir.json', 'r') as json_file:
                data = json.load(json_file)
        except FileNotFoundError:
            return False
        
        if id in data:
            data[id]["height"] = height
            with open('reservoir.json', 'w') as json_file:
                json.dump(data, json_file, indent=4)
            return "Height updated successfully"
            
    def update_name(name: str, id: str):
        try:
            with open('reservoir.json', 'r') as json_file:
                data = json.load(json_file)
        except FileNotFoundError:
            return False
        
        if id in data:
            data[id]["name"] = name
            with open('reservoir.json', 'w') as json_file:
                json.dump(data, json_file, indent=4)
            return "Name updated successfully"

    @staticmethod
    def update_alert_limit_1(alert_limit_1:float, id:str):
        try:
            with open('reservoir.json', 'r') as json_file:
                data = json.load(json_file)
        except FileNotFoundError:
            return False
        
        if id in data:
            data[id]["alert_limit_1"] = alert_limit_1
            with open('reservoir.json', 'w') as json_file:
                json.dump(data, json_file, indent=4)
            return "Alert Limit 1 updated successfully"

    
    @staticmethod
    def update_alert_limit_2(alert_limit_2:float, id:str):  
        try:
            with open('reservoir.json', 'r') as json_file:
                data = json.load(json_file)
        except FileNotFoundError:
            return False
        
        if id in data:
            data[id]["alert_limit_2"] = alert_limit_2
            with open('reservoir.json', 'w') as json_file:
                json.dump(data, json_file, indent=4)
            return "Alert Limit 2 updated successfully"
    
    @staticmethod
    def update_alert_limit_3(alert_limit_3:float, id:str):
        try:
            with open('reservoir.json', 'r') as json_file:
                data = json.load(json_file)
        except FileNotFoundError:
            return False
        
        if id in data:
            data[id]["alert_limit_3"] = alert_limit_3
            with open('reservoir.json', 'w') as json_file:
                json.dump(data, json_file, indent=4)
            return"Alert Limit 3 updated successfully"
            
    @staticmethod
    def get_reservoir_by_id(id:str):
        try:
            with open('reservoir.json', 'r') as json_file:
                data = json.load(json_file)
        except FileNotFoundError:
            return False
        if id in data:
            return data[id]
    
    @staticmethod
    def get_reservoir_status_by_date(id:str, start_date: datetime, end_date:datetime):
        pass
    
    @staticmethod
    def get_reservoir_status_by_id(id:str):
        query = f'SELECT * FROM "reservoir_status" WHERE "id"=\'{id}\' ORDER BY time DESC'
        result = client.query(query=query, database="water_tank", language="sql")
        print(result)
        return result


    
    @staticmethod
    def get_lastest_reservoir_status_by_id(id:str):
        query = f'SELECT * FROM "reservoir_status" WHERE "id"=\'{id}\' ORDER BY time DESC LIMIT 1'
        result = client.query(query=query, database="water_tank", language="sql")
        return result
    
    @staticmethod
    def get_reservoirs():
        try:
            with open('reservoir.json', 'r') as json_file:
                data = json.load(json_file)
        except FileNotFoundError:
            return False
        return data
    
    @staticmethod
    def get_reservoirs_ids():
        try:
            with open('reservoir.json', 'r') as json_file:
                data = json.load(json_file)
                return list(data.keys())
        except FileNotFoundError:
            return False