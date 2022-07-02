const { json } = require("express");
const fs = require("fs");
const path = require("path");
const { monitorEventLoopDelay } = require("perf_hooks");

module.exports = app => {
    fs.readFile("db/db.json", "utf-8", (err, data) => {
        if (err) throw err:

        var notes = json.parse(data);
    })
}