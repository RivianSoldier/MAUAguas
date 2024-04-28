from confluent_kafka import Producer

# Configurações do Kafka
kafka_config = {
    'bootstrap.servers': 'localhost:9092',  # Endereço do servidor Kafka
}

# Função para callback de entrega
def delivery_report(err, msg):
    if err is not None:
        print(f'Erro ao enviar a mensagem: {err}')
    else:
        print(f'Mensagem enviada: {msg.value().decode("utf-8")}')

# Criar produtor
producer = Producer(kafka_config)

# Tópico para enviar os dados
topic = 'dados_simulados'

# Simulação de dados e envio para o Kafka
for i in range(10):
    # Simulação de dados (substitua por seus próprios dados)
    data = f'Dado {i}'

    # Enviar dados para o Kafka
    producer.produce(topic, value=data.encode('utf-8'), callback=delivery_report)

# Flushing para garantir que todas as mensagens sejam entregues
producer.flush()
