import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: [
            {
                validator: function (value) {
                    return value.length >= 6;
                },
                message: 'A senha deve ter pelo menos 6 caracteres'
            },
            {
                validator: function (value) {
                    return /[A-Z]/.test(value);
                },
                message: 'A senha deve ter pelo menos um caractere maiúsculo'
            },
            {
                validator: function (value) {
                    return /[!@#$%^&*]/.test(value);
                },
                message: 'A senha deve ter pelo menos um caractere especial'
            }
        ]
    }
});


const Users = mongoose.model('Users', UsersSchema)

export default Users;