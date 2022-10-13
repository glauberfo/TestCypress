const gmail = process.env.gmail
const encrypt = require('node-file-encrypt');

function operatorOne() {

//Operador 1    

    // Arquivo 1
    const firstPathOperatorOne = 'cypress/plugins/30b5e31b855a873cdbda885edb587979e242d200.crypt'
    let firstEncrypt = new encrypt.FileEncrypt(firstPathOperatorOne)
    firstEncrypt.openSourceFile();
    firstEncrypt.decrypt(gmail);
    console.log(firstEncrypt);

    // Arquivo 2
    const secondPathOperatorOne = 'cypress/plugins/718a7f312ee5559ebddcd749536887206da19c5a.crypt'
    let secondEncrypt = new encrypt.FileEncrypt(secondPathOperatorOne);
    secondEncrypt.openSourceFile();
    secondEncrypt.decrypt(gmail);
    console.log(secondEncrypt);
    console.log("decrypt first operator done");
        
}

function operatorTwo() {

// Operador 2

    // Arquivo 1
    const firstPathOperatorTwo = 'cypress/plugins/e1b2e7f146c5e697987fec9a23438210376d7d8e.crypt'
    let thirdEncrypt = new encrypt.FileEncrypt(firstPathOperatorTwo);
    thirdEncrypt.openSourceFile();
    thirdEncrypt.decrypt(gmail);
    console.log(thirdEncrypt);

    // Arquivo 2
    const secondPathOperatorTwo = 'cypress/plugins/80dbc8fdb8cad521e637a6005f2f4d7593c92faf.crypt'
    let fourthEncrypt = new encrypt.FileEncrypt(secondPathOperatorTwo);
    fourthEncrypt.openSourceFile();
    fourthEncrypt.decrypt(gmail);
    console.log("decrypt second operator done");
            
}
            
function operatorThree() {

//Operador 3

    // Arquivo 1
    const firstPathOperatorThree = 'cypress/plugins/8f851aaab6a40623a32355d40323173dd370bc19.crypt'
    let fifthEncrypt = new encrypt.FileEncrypt(firstPathOperatorThree);
    fifthEncrypt.openSourceFile();
    fifthEncrypt.decrypt(gmail);
    console.log(fifthEncrypt);

    // Arquivo 2
    const secondPathOperatorThree = 'cypress/plugins/8f0a49bedbc6082f443ad23fe49f510c8a2f48cb.crypt'
    let sixthEncrypt = new encrypt.FileEncrypt(secondPathOperatorThree);
    sixthEncrypt.openSourceFile();
    sixthEncrypt.decrypt(gmail);
    console.log(sixthEncrypt);
    console.log("decrypt third operator done");

}    

function operatorGmail() {
    let operatorDataPath = 'cypress/plugins/fc5b20ec80c4a14e8b57f432690a9f24b4718a72.crypt'
    let encryptData = new encrypt.FileEncrypt(operatorDataPath);
    encryptData.openSourceFile();
    encryptData.decrypt(gmail);
    console.log(encryptData)
    console.log("decrypt gmail file operators done");
}
        
operatorOne();
operatorTwo();
operatorThree();
operatorGmail();
