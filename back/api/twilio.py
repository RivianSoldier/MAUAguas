from twilio.rest import Client


def twilio(id, alert_value):

    account_sid = ''
    auth_token = ''
    client = Client(account_sid, auth_token)
    message = client.messages.create(
    from_='whatsapp:+14155238886',
    body=f"Alerta para ID {id} com valor de alerta {alert_value}.",
    to='whatsapp:+5511998081809'
    )

    print(message.sid)