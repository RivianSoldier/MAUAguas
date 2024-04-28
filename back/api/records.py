from back.api.database import DataBase
from back.api.models import ReservoirParameters, ReservoirStatus

class RecordsDB:
    @staticmethod
    def post_reservoir_parameters(params: ReservoirParameters):
        DataBase.post_reservoir_parameters(params)
        
    @staticmethod
    def post_reservoir_status(params: ReservoirStatus):
        DataBase.post_reservoir_status(params)