from datetime import datetime

class ReservoirParameters:
    def __init__(self, id, height, alert_limit_1, alert_limit_2, alert_limit_3):
        self.id = id
        self.height = height
        self.alert_limit_1 = alert_limit_1
        self.alert_limit_2 = alert_limit_2
        self.alert_limit_3 = alert_limit_3

    
class ReservoirStatus:
    def __init__(self, id, water_flow_in, water_flow_out, water_humidity, water_height, water_voltage, time_stamp, bomb_hours):
        self.id = id
        self.water_flow_in = water_flow_in
        self.water_flow_out = water_flow_out
        self.water_humidity = water_humidity
        self.water_height = water_height
        self.water_voltage = water_voltage
        self.time_stamp = time_stamp
        self.bomb_hours = bomb_hours