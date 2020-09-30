using RabbitMQ.Client;
using System;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace RabbitMQ.Producer
{
    static class Program
    {
        static void Main(string[] args)
        {
            var factory = new ConnectionFactory
            {
                Uri = new Uri("amqps://gxtsnvrg:W1Paf_bB1m5og1b-llWs2kJZl8DDcw7K@elephant.rmq.cloudamqp.com/gxtsnvrg")
            };
            //using var connection = factory.CreateConnection();
            IConnection conn = factory.CreateConnection();
            IModel channel = conn.CreateModel();
            //using var channel = connection.CreateModel();

            channel.QueueDeclare("codingtest",
                durable: true,
                exclusive: false,
                autoDelete: false,
                arguments: null);

            byte[] messageBodyBytes = System.Text.Encoding.UTF8.GetBytes("Hello, world!");
            channel.BasicPublish("", "codingtest", null, messageBodyBytes);
            
            //channel.Close();
            //conn.Close();

            //var message = new { Name = "Producer", Message = $"Hello! Count: {count}" };
            //var body = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(message));

            //var properties = channel.CreateBasicProperties();
            //properties.Headers = new Dictionary<string, object> { { "account", "update" } };

            //channel.BasicPublish("demo-fanout-exchange", "account.new", properties, body);


            //FanoutExchangePublisher.Publish(channel);

        }
    }
}
