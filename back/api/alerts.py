import json
import os

class Alerts:
    
    @staticmethod
    def alert2(id, alert_value):
        new_entry = {
            f"Ticket Caixa D'Agua {id}": {
                "id": id,
                "alert": alert_value,
                "message": f"Caixa D'Agua {id} esta abaixo do limite 2 {alert_value}"
            }
        }
        if os.path.exists('ticket.json'):
            with open('ticket.json', 'r', encoding='utf-8') as json_file:
                ticket_data = json.load(json_file)
        else:
            ticket_data = {}
        ticket_data.update(new_entry)
        try:
            with open('ticket.json', 'w', encoding='utf-8') as json_file:
                json.dump(ticket_data, json_file, ensure_ascii=False, indent=4)
            return f"Registro para {id} com alert {alert_value} foi bem-sucedido."
        except Exception as e:
            return f"Falha ao registrar para {id} com alert {alert_value}: {e}"

    @staticmethod
    def alert3(id,alert_value):
        pass
