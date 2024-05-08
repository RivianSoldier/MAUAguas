from back.api.records import RecordsDB
from flask import Blueprint, make_response, jsonify, request
from datetime import datetime
from back.api.models import ReservoirStatus, ReservoirParameters
from simulator import Simulador

bp = Blueprint('rotas', __name__)

@bp.route("/")
def index():
    return 'API MAUAguas UP and RUNNING'

@bp.route("/get/reservoirs", methods=['GET'])
def get_reservoirs():
    reservoirs = RecordsDB.get_reservoirs()
    return make_response(
        jsonify(reservoirs)
    )
    
@bp.route("/get/reservoir_by_id/<string:id>", methods=['GET'])
def get_reservoir_by_id(id:str):
    reservoir = RecordsDB.get_reservoir_by_id(id)
    return make_response(
        jsonify(reservoir)
    )

@bp.route("/get/reservoir_status_by_id/<string:id>", methods=['GET'])
def get_reservoir_status_by_id(id:str):
    status = RecordsDB.get_reservoir_status_by_id(id)
    return make_response(
        jsonify(status)
    )
    
@bp.route("/get/lastest_reservoir_status_by_id/<string:id>", methods=['GET'])
def get_lastest_reservoir_status_by_id(id:str):
    status = RecordsDB.get_lastest_reservoir_status_by_id(id)
    return make_response(
        jsonify(status)
    )

@bp.route("/post/resevoir_status", methods=['POST'])
def post_resevoirs_status():
    data = request.json
    reservoir_status = ReservoirStatus(
        id=data.get('id'),
        water_height=data.get('water_height'),
        water_flow_in=data.get('water_flow_in'),
        water_flow_out=data.get('water_flow_out'),
        water_humidity=data.get('water_humidity'),
        water_voltage=data.get('water_voltage'),
        time_stamp=datetime.fromisoformat(data.get('time_stamp')),
        bomb_hours=data.get('bomb_hours')
    )
    RecordsDB.post_reservoir_status(reservoir_status)
    return 'Status do reservatório enviado com sucesso!', 201

@bp.route("/post/resevoir_parameters", methods=['POST'])
def post_resevoir_parameters():
    data = request.json
    reservoir_parameters = ReservoirParameters(
        id=data.get('id'),
        name=data.get('name'),
        well=data.get('well'),
        height=data.get('height'),
        alert_limit_1=data.get('alert_limit_1'),
        alert_limit_2=data.get('alert_limit_2'),
        alert_limit_3=data.get('alert_limit_3')
    )
    response = RecordsDB.post_reservoir_parameters(reservoir_parameters)
    
    if response == None:
        return 'Parâmetros do reservatório enviados com sucesso!', 201
    else:
        return response
    
@bp.route("/update/height/<string:id>/<float:height>", methods=['PUT'])
def update_height(id:str,height:float):
    response = RecordsDB.update_height(height,id)
    return response

@bp.route("/update/name/<string:id>/<string:name>", methods=['PUT'])
def update_name(id:str,name:str):
    response = RecordsDB.update_name(name,id)
    return response

@bp.route("/update/alert_limit_1/<string:id>/<float:limit>", methods=['PUT'])
def update_record_limit_1(id:str,limit:float):
    response = RecordsDB.update_records_limit_1(limit,id)
    return response

@bp.route("/update/alert_limit_2/<string:id>/<float:limit>", methods=['PUT'])
def update_record_limit_2(id:str,limit:float):
    response = RecordsDB.update_records_limit_2(limit,id)
    return response

@bp.route("/update/alert_limit_3/<string:id>/<float:limit>", methods=['PUT'])
def update_record_limit_3(id:str,limit:float):
    response = RecordsDB.update_records_limit_3(limit,id)
    return response

@bp.route("/start_simulator/<string:id>", methods=['GET'])
def start_simulator(id:str):
    is_id = RecordsDB.id_existis(id)
    if is_id:
        response = Simulador.start_simulador(id)
        print(response)
        return response
    return "ID not exists on the database"