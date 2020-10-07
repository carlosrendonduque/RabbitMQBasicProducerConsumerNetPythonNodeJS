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
            Cedula: '7894656',
            Nombre: 'Luis Duque',
            Salario: '$800.000',
            Recargos: {
                HED: '3',
                HEN: '2',
                HFD: '1',
                HFN: '1',
                RN: '2',
                HEFD: '2',
                HEFN: '2',
             }
         }];
        //channel.sendToQueue(QUEUE, Buffer.from('Hola steven. Cedula: 12345, Salario:350'));
        channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(data)));
        console.log(`Message send ${QUEUE}`);
        var data = [{
            Cedula: '71554327',
            Nombre: 'Juan Perez',
            Salario: '$1.200.000',
            Recargos: {
                HED: '6',
                HEN: '1',
                HFD: '0',
                HFN: '0',
                RN: '3.5',
                HEFD: '0',
                HEFN: '0',
             }
         }];
        //channel.sendToQueue(QUEUE, Buffer.from('Hola steven. Cedula: 12345, Salario:350'));
        channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(data)));
        console.log(`Message send ${QUEUE}`);
        var data = [{
            Cedula: '71554327',
            Nombre: 'Pedro Suarez',
            Salario: '$1.150.000',
            Recargos: {
                HED: '3',
                HEN: '2',
                HFD: '1',
                HFN: '0',
                RN: '1.5',
                HEFD: '0',
                HEFN: '0',
             }
         }];
        //channel.sendToQueue(QUEUE, Buffer.from('Hola steven. Cedula: 12345, Salario:350'));
        channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(data)));
        console.log(`Message send ${QUEUE}`);
        var data = [{
            Cedula: '71554327',
            Nombre: 'Martha Fernandez',
            Salario: '$1.350.000',
            Recargos: {
                HED: '4',
                HEN: '2',
                HFD: '1',
                HFN: '0',
                RN: '5',
                HEFD: '0',
                HEFN: '0',
             }
         }];
        //channel.sendToQueue(QUEUE, Buffer.from('Hola steven. Cedula: 12345, Salario:350'));
        channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(data)));
        console.log(`Message send ${QUEUE}`);
        var data = [{
            Cedula: '98345276',
            Nombre: 'Oscar Lopez',
            Salario: '$1.550.000',
            Recargos: {
                HED: '8',
                HEN: '1',
                HFD: '0',
                HFN: '0',
                RN: '6',
                HEFD: '3',
                HEFN: '2',
             }
         }];
        //channel.sendToQueue(QUEUE, Buffer.from('Hola steven. Cedula: 12345, Salario:350'));
        channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(data)));
        console.log(`Message send ${QUEUE}`);
    })
})