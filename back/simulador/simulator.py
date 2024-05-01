from back.api.records import RecordsDB as RDB

def simulacao(id):
    status = RDB.get_lastest_reservoir_status_by_id(id)