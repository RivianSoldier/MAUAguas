from influxdb import InfluxDBClient
from back.api.models import ReservoirParameters, ReservoirStatus


client=InfluxDBClient(host="localhost",port="8086")
client.switch_database("water_tank")

#Linha para testar a conexão com o banco, apenas mostrar as databases criadas
#É necessário ter o influxDB baixado de forma local, com um server rodando
#Tenha a database water_tank criada no seu influxDB local

#print(client.get_list_database())

#print(client.get_list_measurements())

class DataBase:
    
    @staticmethod
    def post_reservoir_parameters(params: ReservoirParameters):
        json_body = [
            {
                "measurement": "reservoir_parameters",
                "tags": {
                    "id": params.id
                },
                "fields": {
                    "height": params.height,
                    "alert_limit_1": params.alert_limit_1,
                    "alert_limit_2": params.alert_limit_2,
                    "alert_limit_3": params.alert_limit_3
                }
            }
        ]
        client.write_points(json_body)
        print("Reservoir parameters posted successfully.")
    
    @staticmethod
    def post_reservoir_status(status: ReservoirStatus):
        time_stamp_str = status.time_stamp.isoformat()  # Converter para ISO 8601
        json_body = [
            {
                "measurement": "reservoir_status",
                "tags": {
                    "id": status.id
                },
                "fields": {
                    "water_flow_in": status.water_flow_in,
                    "water_flow_out": status.water_flow_out,
                    "water_humidity": status.water_humidity,
                    "water_height": status.water_height,
                    "water_voltage": status.water_voltage,
                    "time_stamp": time_stamp_str,  # Usar a string formatada ISO 8601
                    "bomb_hours": status.bomb_hours
                }
            }
        ]
        client.write_points(json_body)
        print("Reservoir status posted successfully.")


