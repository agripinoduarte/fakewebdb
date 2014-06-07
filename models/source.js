// Source Model: represents a web media source containing url, date of entry, responsible

schema = Schema({
    title: String,
    url: String,
    date: Date,
    responsible: String
});

// db is global
module.exports = db.model('Source', schema);
