//using RabbitMQ.Client;
using System;
//using RabbitMQ.Client.Events;
using System.Collections.Generic;
using System.Text;
namespace RabbitMQ.Consumer
{
    static class Program
    {
        static void Main(string[] args)
        {
            //var factory = new ConnectionFactory
            //{
            //    Uri = new Uri("amqps://gxtsnvrg:W1Paf_bB1m5og1b-llWs2kJZl8DDcw7K@elephant.rmq.cloudamqp.com/gxtsnvrg")
            //};
            //using var connection = factory.CreateConnection();
            //using var channel = connection.CreateModel();
            //channel.QueueDeclare("codingtest",
            //    durable: true,
            //    exclusive: false,
            //    autoDelete: false,
            //    arguments: null);

            //var consumer = new EventingBasicConsumer(channel);
            //consumer.Received += (sender, e) => {
            //    var body = e.Body.ToArray();
            //    var message = Encoding.UTF8.GetString(body);
            //    Console.WriteLine(message);
            //};

            //channel.BasicConsume("codingtest", true, consumer);
            //Console.WriteLine("Consumer started");
            //Console.ReadLine();

            ////FanoutExchangeConsumer.Consume(channel);
        }
    }
}
