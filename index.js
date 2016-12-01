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
        switch (this.platform) {
        case "win32":
            this.player = "start"
            break;
        case "darwin":
            this.player = "afplay";
            break;

        }
    }
    play(name) {
        if (this.sounds[name]) return this._play(this.sounds[name])
        return this._play(name)
    }
    _play(dir) {
        if (!this.player) return false;
        try {
        var a = child.spawn(this.player, [dir], {
            cwd: this.cwd
 
        })
a.on('error',function() {
    
})
        } catch (e) {
            
        }
        return true;
    }
    add(name, dir) {
        this.sounds[name] = dir

    }
    clear() {
        this.sounds = {};
    }



}
