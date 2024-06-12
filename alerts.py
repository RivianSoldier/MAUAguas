import json
import os
import pywhatkit

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
    def alert3(id:str,alert_value:str):
        phone_number ="+5511998030023"
        try:
            pywhatkit.sendwhatmsg_instantly(phone_number,f"A caixa d'água de ID: \n \"{id}\" \n Está em estado critíco abaixo do limite: \n \"{alert_value}\"")
            return "Mensagem enviada com sucesso"
        except:
            return "Erro ao enviar a mensagem"
