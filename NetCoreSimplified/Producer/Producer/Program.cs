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
            Employee employee = new Employee
            {
                Cedula = "75876844",
                Nombre = "Juan Luis",
                Salario = 1250000
            };
            string data = JsonConvert.SerializeObject(employee, Formatting.Indented);

            byte[] messageBodyBytes = System.Text.Encoding.UTF8.GetBytes(data);
            channel.BasicPublish("", "codingtest", null, messageBodyBytes);


        }


    }

    public class Employee
    {
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public Decimal Salario { get; set; }

    }
}
