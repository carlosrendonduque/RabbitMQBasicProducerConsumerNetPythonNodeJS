# example_producer
import pika, os, logging
logging.basicConfig()

# Parse CLODUAMQP_URL (fallback to localhost)
""" url = os.environ.get('CLOUDAMQP_URL', 'amqps://gxtsnvrg:W1Paf_bB1m5og1b-llWs2kJZl8DDcw7K@elephant.rmq.cloudamqp.com/gxtsnvrg') """
url = 'amqps://gxtsnvrg:W1Paf_bB1m5og1b-llWs2kJZl8DDcw7K@elephant.rmq.cloudamqp.com/gxtsnvrg'
params = pika.URLParameters(url)
params.socket_timeout = 5

connection = pika.BlockingConnection(params) # Connect to CloudAMQP
channel = connection.channel() # start a channel
channel.queue_declare(queue='codingtest', durable=True) # Declare a queue
# send a message

channel.basic_publish(exchange='', routing_key='codingtest', body='Hola Steven!!!')
print ("[x] Message sent to consumer")
connection.close()