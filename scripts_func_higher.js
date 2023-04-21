const createMessage = logger => message => {
    logger(message.toUpperCase());
};

const printLog = createMessage(message => console.log(message))

printLog('anton')