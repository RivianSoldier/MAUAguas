from datetime import datetime

class ReservoirParameters:
    id = str
    name = str
    well = bool
    height = float
    alert_limit_1 = float
    alert_limit_2 = float
    alert_limit_3 = float
    def __init__(self, id,name,well, height, alert_limit_1, alert_limit_2, alert_limit_3):
        self.id = id
        self.name = name
        self.well = well
        self.height = height
        self.alert_limit_1 = alert_limit_1
        self.alert_limit_2 = alert_limit_2
        self.alert_limit_3 = alert_limit_3

class ReservoirStatus:
    id: str
    water_flow_in: float
    water_flow_out: float
    water_humidity: float
    water_voltage: float
    time_stamp: datetime
    bomb_hours: float
    
    def __init__(self, id, water_flow_in, water_flow_out, water_humidity, water_voltage, time_stamp, bomb_hours):
        self.id = id
        self.water_flow_in = water_flow_in
        self.water_flow_out = water_flow_out
        self.water_humidity = water_humidity
        self.water_voltage = water_voltage
        self.time_stamp = time_stamp
        self.bomb_hours = bomb_hours