from back.api.database import DataBase
from back.api.records import RecordsDB
from back.api.models import ReservoirParameters, ReservoirStatus
from datetime import datetime
# Criar um objeto ReservoirParameters com os valores desejados
params = ReservoirParameters(
    id="teste",
    height=10.5,
    name="teste_water_tank",
    well=False,
    alert_limit_1=20.0,
    alert_limit_2=30.0,
    alert_limit_3=40.0
)
params_2 = ReservoirParameters(
    id="teste2",
    height=10.5,
    name="teste_water_tank",
    well=False,
    alert_limit_1=20.0,
    alert_limit_2=30.0,
    alert_limit_3=40.0
)
status = ReservoirStatus(
    id="teste",
    water_height=223.0,
    water_flow_in=100.0,
    water_flow_out=50.0,
    water_humidity=70.0,
    water_voltage=12.0,
    time_stamp=datetime.now(),
    bomb_hours=10.0
)

# Chamar o método post_reservoir_parameters e passar o objeto params como argumento
RecordsDB.post_reservoir_parameters(params)
RecordsDB.post_reservoir_parameters(params_2)
RecordsDB.post_reservoir_status(status)

RecordsDB.update_height(7,"teste")
RecordsDB.update_records_limit_1(60,"teste")
RecordsDB.update_records_limit_2(70,"teste")
RecordsDB.update_records_limit_3(80,"teste")
RecordsDB.update_name("Caixa do Daniel","teste")
print(RecordsDB.get_reservoir_by_id("teste"))

print(RecordsDB.get_reservoir_status_by_id("teste"))
print(RecordsDB.get_lastest_reservoir_status_by_id("teste"))

print(RecordsDB.get_lastest_reservoir_status_by_id("teste"))