# example_consumer
import pika, os, time

def codingtest_process_function(msg):
  print(" codingtest processing")
  print(" [x] Received " + str(msg))

  time.sleep(5) # delays for 5 seconds
  print(" codingtest processing finished");
  return;

# Access the CLODUAMQP_URL environment variable and parse it (fallback to localhost)
""" url = os.environ.get('CLOUDAMQP_URL', 'amqp://guest:guest@localhost:5672/%2f') """
url='amqps://gxtsnvrg:W1Paf_bB1m5og1b-llWs2kJZl8DDcw7K@elephant.rmq.cloudamqp.com/gxtsnvrg'
params = pika.URLParameters(url)
connection = pika.BlockingConnection(params)
channel = connection.channel() # start a channel
channel.queue_declare(queue='codingtest', durable=True) # Declare a queue

# create a function which is called on incoming messages
def callback(ch, method, properties, body):
  codingtest_process_function(body)

# set up subscription on the queue
""" channel.basic_consume(queue='codingtest',
  callback,
  auto_ack=True) """
channel.basic_consume(queue='codingtest',
  on_message_callback=callback, auto_ack=True)
# start consuming (blocks)
channel.start_consuming()
connection.close()