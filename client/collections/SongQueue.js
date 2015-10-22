// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },

  playFirst: function() {
    this.at(0).play();
    this.dequeue();
  },

  dequeue: function() {
    // unsure of synatx for removing first item with remove()
    this.remove(this.at(0));
  }

});