/*
mongodb+srv://connortehhall:<password>@cluster0.nqvl5.mongodb.net/<dbname>?retryWrites=true&w=majority
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://connortehhall:<password>@cluster0.nqvl5.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
*/

async function main() {
    const {MongoClient} = require('mongodb');
    const uri = "mongodb+srv://connortehhall:stRa2ned@cluster0.nqvl5.mongodb.net/test_data?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {useNewURLParser: true});
    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
    dbList = await client.db().admin().listDatabases();

    console.log("Databases");
    dbList.databases.forEach(db => console.log(' - ${db.name}'));
}

/**
 * function for users to login to the website
 */
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;
    alert(username + " " + password)
}

/**
 * function for users to register
 */
function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var password2 = document.getElementById("pwd2").value;

    /**
     * if username already exists in database
     * give alert "user already exists" and
     * refresh page
     */
    if (username) {

    }
    /**
     * if passwords do not match, give alert
     * "passwords do not match" and refresh the
     * page
     */
    if (password !== password2) {
        location.reload();
        var pwdAlert = document.getElementById("incorrectPasswords");
        pwdAlert.style.visibility = "visible";
    }
}

main().catch(console.error);

