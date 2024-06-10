from twilio.rest import Client


def twilio(id, alert_value):

    account_sid = 'AC029b4069c50a254f056ee17016a92c82'
    auth_token = 'fc6603f7ccfce40849677a6bd7990c70'
    client = Client(account_sid, auth_token)
    message = client.messages.create(
    from_='whatsapp:+14155238886',
    body=f"Alerta para ID {id} com valor de alerta {alert_value}.",
    to='whatsapp:+5511998081809'
    )

    print(message.sid)