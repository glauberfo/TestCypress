const fs = require('fs');


function removeArquivos() {
    
    const paths = [
        'cypress/plugins/credentials.json', 'cypress/plugins/auth_token.json', 
        'cypress/plugins/credentials_second_operator.json', 'cypress/plugins/auth_token_second_operator.json',
        'cypress/plugins/credentials_third_operator.json', 'cypress/plugins/auth_token_third_operator.json',
        'cypress/plugins/operators_data.json'
    ]
        for (const file of paths) {
            
             fs.unlinkSync(file, function (err) {
                if(err) throw err;
                else {
                    console.log('Deleted file')
                }
             });
        }
}

removeArquivos()

