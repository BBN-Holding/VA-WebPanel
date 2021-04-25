const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GuildUser = new Schema(
    {
        userid: { type: String, required: true },
        guildid: { type: String, required: true },
        conversations: { type: Object, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('GuildUser', GuildUser)
