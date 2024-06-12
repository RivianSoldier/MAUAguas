from back.api.records import RecordsDB
from random import random, randint
from datetime import datetime
import time

class simulador:
    @staticmethod
    def start_simulador(id):
        ultimo = RecordsDB.get_lastest_reservoir_status_by_id(id)
        altura_nova = ultimo["water_height"] - (
            ultimo["water_flow_in"] - ultimo["water_flow_out"]
        ) * (random() - 0.5)
        entrada_nova = ultimo["water_flow_in"] * (randint(500, 2000) / 1000)
        saida_nova = ultimo["water_flow_out"] * (randint(500, 2000) / 1000)

        if not simulador.is_well(id):
            horas_novo = 0
        else:
            horas_novo = simulador.bomb_hours_simulator(
                ultimo["bomb_hours"], saida_nova
            )

        status = {
            "id": f"{id}",
            "water_height": altura_nova,
            "water_flow_in": entrada_nova,
            "water_flow_out": saida_nova,
            "water_humidity": ultimo["water_humidity"],
            "water_voltage": ultimo["water_voltage"],
            "time_stamp": datetime.now(),  # Set the current datetime for the time_stamp
            "bomb_hours": float(horas_novo)
        }
        print(status)
        response = RecordsDB.post_reservoir_status(status)
        return response

    @staticmethod
    def bomb_hours_simulator(horas, saida):
        if saida > 0:
            hora_nova = horas + 0.25
        else:
            hora_nova = 0
        return hora_nova

    @staticmethod
    def is_well(id: str):
        reservoir = RecordsDB.get_reservoir_by_id(id)
        is_well = reservoir["well"]
        return is_well

# while True:
#         ids = RecordsDB.get_resorvoirs_ids()
#         for id in ids:
#             response = simulador.start_simulador(id)
#             print(response)
#         print("Esperando 5 minutos para a proxima leitura")  
#         time.sleep(300)