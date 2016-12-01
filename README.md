# NodeSounds
Plays sound.

## Usage
> npm install nodesounds

```
var NodeSounds = require('nodesounds')
var Sounds = new NodeSounds('/pathtosoundfolder')
Sounds.add('test','file.mp3') // you can add sounds so you dont have to remember them
Sounds.play('test')

Sounds.play('anotherfile.mp3') // or you can just play by their file


// other things
Sounds.clear() // clear sounds

```
