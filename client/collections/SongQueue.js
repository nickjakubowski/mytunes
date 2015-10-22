// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('dequeue', this.dequeue.bind(this));
  },

  playFirst: function() {
    if (this.length > 0) {
      this.at(0).play();
    }
  },

  dequeue: function(song) {
    console.log(song);
    var currentFirst = this.at(0);
    this.remove(song);
    if (song === currentFirst) {
      this.playFirst();
    }
  }

});