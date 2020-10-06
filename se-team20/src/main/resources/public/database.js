import { createConnection } from 'mysql';

var con = createConnection({
    host: "ec2-23-20-168-40.compute-1.amazonaws.com",
    user: "fgltmkgurkvrcy",
    password: "db66c2b072423e5956ec608256cd4a64a56ac5d9c796065f5bcc08eaa90f38e4"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });