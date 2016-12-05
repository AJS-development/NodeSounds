"use strict"
var child = require('child_process')
module.exports = class Sounds {
    constructor(cwd) {
        this.cwd = cwd
        this.command = false;
        this.sounds = {};
        this.platform = require('os').platform()

        this.player = false;
        this.getPlayer()
    }
    getPlayer() {
 
    }
    play(name) {
     
    }
    _play(dir) {
 
    }
    add(name, dir) {


    }
    clear() {
        this.sounds = {};
    }



}
