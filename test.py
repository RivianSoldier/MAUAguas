from back.api.database import DataBase
import json
from back.api.models import ReservoirParameters,ReservoirStatus
import pytest

# Restante do código...


@pytest.fixture
def mock_reservoir_params():
    return ReservoirParameters(
        id=1,
        name="Reservoir 1",
        well="Well 1",
        height=10,
        alert_limit_1=5,
        alert_limit_2=8,
        alert_limit_3=12
    )

def test_post_reservoir_parameters(mock_reservoir_params, mocker):
    # Mocking file operations
    mock_open = mocker.mock_open()
    mocker.patch("builtins.open", mock_open)

    # Call the function
    DataBase.post_reservoir_parameters(mock_reservoir_params)

    # Assert that the file was opened twice, once for reading and once for writing
    mock_open.assert_has_calls([
        mocker.call('reservoir.json', 'r'),
        mocker.call('reservoir.json', 'w')
    ])

    # Check if data was written correctly
    expected_data = {
        1: {
            "id": 1,
            "name": "Reservoir 1",
            "well": "Well 1",
            "height": 10,
            "alert_limit_1": 5,
            "alert_limit_2": 8,
            "alert_limit_3": 12
        }
    }
    mock_open().write.assert_called_once_with(
        json.dumps(expected_data, indent=4)
    )

    # Get all expected calls
    expected_calls = [
        mocker.call('Reservoir parameters posted successfully.')
    ]

    # Check if all expected calls are present
    if all(call in mocker.stdout.mock_calls for call in expected_calls) and \
            len(mocker.stdout.mock_calls) == len(expected_calls):
        print("Test was successful!")
    else:
        print("Test failed!")
