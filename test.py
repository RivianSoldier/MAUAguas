from back.api.database import DataBase
import json
from back.api.models import ReservoirParameters
import datetime

def test_get():
    dados_test = DataBase.get_reservoir_by_id("teste")

    assert dados_test["id"] == "teste"

def test_post():
    json_teste = {
        "id": "testando",
    "water_height": 10.0,
    "water_flow_in": 12.0,
    "water_flow_out": 9.6,
    "water_humidity": 1.0,
    "water_voltage": 12.0,
    "time_stamp": "2024-05-15 21:40:41.025032670",
    "bomb_hours": 50.0
    }

    mensagem = DataBase.post_reservoir_status(json_teste)

    assert mensagem == "Reservoir status posted successfully."

def test_id_existe():
    existe = DataBase.id_exists("teste")

    assert existe == True

def test_status_caixa():
    status = DataBase.get_reservoir_status_by_id("teste")

    assert status["id"] == "teste"

def test_lastest_reservoir():
    result = DataBase.get_lastest_reservoir_status_by_id("teste")

    assert result["id"] == "teste"

def test_id_caixa():
    caixa = DataBase.id_exists("teste")

    assert caixa == True

def test_high_caixa():
    alto = DataBase.update_height(10.0,"teste")

    assert alto == "Height updated successfully"

def test_nome_caixa():
    nome = DataBase.update_name("caixa1","teste")

    assert nome == "Name updated successfully"

def test_alerta1():
    alert1 = DataBase.update_alert_limit_1(10.0,"teste")

    assert alert1 == "Alert Limit 1 updated successfully"

def test_alerta2():
    alert2 = DataBase.update_alert_limit_2(10.0,"teste")

    assert alert2 == "Alert Limit 2 updated successfully"

def test_alerta3():
    alert3 = DataBase.update_alert_limit_3(10.0,"teste")

    assert alert3 == "Alert Limit 3 updated successfully"