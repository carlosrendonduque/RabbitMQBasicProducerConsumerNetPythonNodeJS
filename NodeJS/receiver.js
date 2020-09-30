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
        // Step 4: Receive Messages

        channel.consume(QUEUE, (msg) => {
            var data = JSON.parse(msg.content);
            console.log(data);
            console.log(`Message received: ${JSON.parse(msg.content)}`)
            
            
        }, {
            noAck: true
        })
    })
})