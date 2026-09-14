const fs = require("fs");
const log = require("./modules/logger");

log("Creating File...");

// CREATE
fs.writeFile("test.txt", "Hello Node.js", (err) => {

    if (err) {
        log("Error creating file: " + err, "error");
        return;
    }

    log("File Created", "success");

    // READ
    log("Reading File");
    fs.readFile("test.txt", "utf8", (err, data) => {

        if (err) {
            log("Error reading file: " + err, "error");
            return;
        }

        console.log(data);

        // UPDATE
        fs.appendFile("test.txt", "\nLearning FS Module", (err) => {

            if (err) {
                log("Error updating file: " + err, "error");
                return;
            }

            log("File Updated", "success");

            // READ AGAIN to see updated content
            fs.readFile("test.txt", "utf8", (err, updatedData) => {

                if (err) {
                    log("Error reading updated file: " + err, "error");
                    return;
                }

                console.log(updatedData);

                // DELETE
                fs.unlink("test.txt", (err) => {

                    if (err) {
                        log("Error deleting file: " + err, "error");
                        return;
                    }

                    log("File Deleted", "success");
                });
            });
        });
    });
});