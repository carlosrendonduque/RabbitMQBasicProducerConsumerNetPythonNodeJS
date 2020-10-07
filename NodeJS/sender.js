const amqp = require('amqplib/callback_api');

// Step 1: Create Connection
amqp.connect('amqps://gxtsnvrg:W1Paf_bB1m5og1b-llWs2kJZl8DDcw7K@elephant.rmq.cloudamqp.com/gxtsnvrg', (connError, connection) => {
    if (connError) {
        throw connError;
    }
    // Step 2: Create Channel
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        // Step 3: Assert Queue
        const QUEUE = 'codingtest'
        channel.assertQueue(QUEUE);
        // Step 4: Send message to queue
        var data = [{
            name: 'Ruben',
            company: 'ZenIT',
            designation: 'Frontend developer'
         }];
        //channel.sendToQueue(QUEUE, Buffer.from('Hola steven. Cedula: 12345, Salario:350'));
        channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(data)));
        console.log(`Message send ${QUEUE}`);
    })
})