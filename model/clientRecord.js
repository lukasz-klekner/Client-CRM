class ClientRecord {
    constructor({ id, name, email, nextContactAt, notes}){
        if(!id || typeof id !== "string"){
            throw new Error("id must be an unempty string");
        }

        if(!name || typeof name !== 'string' || name.length < 2){
            throw new Error('ClientRecord name must be a string and at least 2 characters long');
        }

        if(!email || typeof email !== "string" || email.indexOf('@') === -1){
            throw new Error("Email must be a string and have @ characters");
        }

        if(typeof nextContactAt!== "string"){
            throw new Error("Date must be an unempty string");
        }

        if(typeof notes!== "string"){
            throw new Error("Notes must be an unempty string");
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