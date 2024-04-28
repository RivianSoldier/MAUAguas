from back.api.database import DataBase
from back.api.models import ReservoirParameters, ReservoirStatus
from datetime import datetime
# Criar um objeto ReservoirParameters com os valores desejados
params = ReservoirParameters(
    id="teste",
    height=10.5,
    alert_limit_1=20.0,
    alert_limit_2=30.0,
    alert_limit_3=40.0
)
status = ReservoirStatus(
    id="teste",
    water_flow_in=100.0,
    water_flow_out=50.0,
    water_humidity=70.0,
    water_height=8.0,
    water_voltage=12.0,
    time_stamp=datetime.now(),
    bomb_hours=10.0
)

# Chamar o método post_reservoir_parameters e passar o objeto params como argumento
#DataBase.post_reservoir_parameters(params)
#DataBase.post_reservoir_status(status)
