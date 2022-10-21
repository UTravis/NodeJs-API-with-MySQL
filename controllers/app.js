const db = require("../database/db")


const post = async (req, res) => {
    // SQL query
    let sql = 'INSERT INTO people SET ?';
    await db.query(sql, req.body, (err, result) => {
        if(err) throw err;
        res.json(result)
    })

    //ends mysql connection
    //db.end()
}

const getPost = async (req, res) => {
    //SQL query
    let sql ="SELECT * FROM people";
    await db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
}

const getPostById = async (req, res) => {
    //SQL Query
    let sql = `SELECT * FROM people WHERE id = ${req.params.id}`;
    await db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
}

const updatePost = async (req, res) => {
    //SQL Query
    let sql = `UPDATE people SET name = '${req.body.name}' WHERE id = ${req.params.id}`;
    await db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
}

const deletePost = async (req, res) => {
    //SQL Query
    let sql = `DELETE FROM people WHERE id = ${req.params.id}`;
    await db.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result)
    })
}

module.exports.post = post;
module.exports.getPost = getPost;
module.exports.getPostById = getPostById;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;