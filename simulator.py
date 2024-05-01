from back.api.records import RecordsDB
from random import random,randint
from back.api.models import ReservoirStatus
from datetime import datetime

class simulador:
    @staticmethod
    def start_simulador(ids:list):
        for id in ids:
            ultimo= RecordsDB.get_lastest_reservoir_status_by_id(id)

            altura_nova = ultimo["water_height"][0].as_py()-(ultimo["water_flow_in"][0].as_py()-ultimo["water_flow_out"][0].as_py())*(random()-0.5)
            entrada_nova = ultimo["water_flow_in"][0].as_py()*(randint(0,2000)/1000)
            saida_nova = ultimo["water_flow_out"][0].as_py()*(randint(0,2000)/1000)

            if not simulador.is_well(id):
                horas_novo = ultimo["bomb_hours"][0].as_py()
            else:
                horas_novo = simulador.bomb_hours_simulator( ultimo["bomb_hours"][0].as_py() , saida_nova)

            status = ReservoirStatus(
                    id=f"{id}",
                    water_height=altura_nova,
                    water_flow_in=entrada_nova,
                    water_flow_out=saida_nova,
                    water_humidity=ultimo["water_humidity"][0].as_py(),
                    water_voltage=ultimo["water_voltage"][0].as_py(),
                    time_stamp=datetime.now(),
                    bomb_hours=horas_novo
                )
            RecordsDB.post_reservoir_status(status)
                

            
    @staticmethod
    def bomb_hours_simulator(horas, saida):
        if saida > 0:
            hora_nova = horas+0.25
        else:
            hora_nova = 0
        return hora_nova
    
    @staticmethod
    def is_well(id:str):
        reservoir = RecordsDB.get_reservoir_by_id(id)
        is_well = reservoir["well"]
        return is_well


simulador.start_simulador(["teste"])
