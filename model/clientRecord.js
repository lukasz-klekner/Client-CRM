const { ValidationError } = require("../utils/errors");

class ClientRecord {
    constructor({ id, name, email, nextContactAt, notes}){
        if(!id || typeof id !== "string"){
            throw new ValidationError("id must be an unempty string");
        }

        if(!name || typeof name !== 'string' || name.length < 2){
            throw new ValidationError('ClientRecord name must be a string and at least 2 characters long');
        }

        if(!email || typeof email !== "string" || email.indexOf('@') === -1){
            throw new ValidationError("Email must be a string and have @ characters");
        }

        if(typeof nextContactAt!== "string"){
            throw new ValidationError("Date must be an unempty string");
        }

        if(typeof notes!== "string"){
            throw new ValidationError("Notes must be an unempty string");
        }

        this.id = id;
        this.name = name;
        this.email = email;
        this.nextContactAt = nextContactAt;
        this.notes = notes;
    }
}

module.exports = {
    ClientRecord
}