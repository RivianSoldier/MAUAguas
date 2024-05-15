import json
import os
from twilio.rest import Client

account_sid = "AC245b2eb78f11ea5d58e7d3705342636d"
auth_token = '68fdb232905b47a60db7e64ca3a8a9ca'
client = Client(account_sid, auth_token)

class Alerts:

    @staticmethod
    def alert2(id: str, limit_2: str):
        new_ticket = {
            'id': id,
            'alert': limit_2,
            'message': f"Caixa D'Água {id} está abaixo do limite 2 {limit_2}"
        }
        
        try:
            with open('ticket.json', 'r') as json_file:
                data = json.load(json_file)
            
            ticket_key = f"Ticket Caixa D'Agua {id}"
            if ticket_key in data:
                return "Já existe um ticket aberto para esta caixa d'água"
            
            data[ticket_key] = new_ticket
            with open('ticket.json', 'w') as json_file:
                json.dump(data, json_file, indent=4)
        except Exception as e:
            return f"Erro ao criar o ticket; {e}"
        
        return "Ticket criado com sucesso"

    @staticmethod
    def remove_alert2(id:str):
        ticket_key = f"Ticket Caixa D'Agua {id}"
        try:
            with open('ticket.json', 'r') as json_file:
                data = json.load(json_file)
            if ticket_key in data:
                del data[ticket_key]
                
                with open('ticket.json', 'w') as json_file:
                    json.dump(data, json_file, indent=4)
                
                return "Ticket removido com sucesso"
            else:
                return "Ticket não encontrado"
    
        except Exception as e:
            return f"Não foi possível apagar o ticket: {e}"

    
    @staticmethod
    def alert3(id:str,limit_3:str):
        from_whatsapp_number = 'whatsapp:+14155238886:'  
        to_whatsapp_number = 'whatsapp:+5511989323635'
        
        message_body = f"Caixa D'Água {id} está abaixo do limite 3 de {limit_3}"
        
        message = client.messages.create(
                    body=message_body,
                    from_=from_whatsapp_number,
                    to=to_whatsapp_number
                )
        
        print(f"Message sent with SID: {message.sid}")