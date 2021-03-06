var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]

                    }
             },

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

  printPlaylists: function() {
    for(var playlist in this.playlists) {
      console.log(playlist + ': ' + this.playlists[playlist].name + " - " + this.playlists[playlist].tracks.length + " tracks");
    }
  },

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function() {
    for(var songInfo in this.tracks) {
      console.log(songInfo + ': ' + this.tracks[songInfo].name + " by " + this.tracks[songInfo].artist + "(" + this.tracks[songInfo].album + ")");
    }
  },

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {
    for(var playlist in this.playlists) {
      if (playlist === playlistId) {
      console.log(playlist + ': ' + this.playlists[playlist].name + " - " + this.playlists[playlist].tracks.length + " tracks");
        //Loop through each key in tracks object
        for(var songInfo in this.tracks) {
          //Loop through tracks array of playlistId object
          for (i = 0; i < this.playlists[playlistId].tracks.length; i++) {
          //If key in tracks object matches array item in tracks array of playlistId object, log
            if (songInfo === this.playlists[playlistId].tracks[i]){
              console.log(songInfo + ': ' + this.tracks[songInfo].name + " by " + this.tracks[songInfo].artist + "(" + this.tracks[songInfo].album + ")");
            }
          }
        }
      }
    }
  },

// adds an existing track to an existing playlist

  addTrackToPlaylist: function(trackId, playlistId) {
    var lengthOfTracksArray = this.playlists[playlistId].tracks.length
    this.playlists[playlistId].tracks[lengthOfTracksArray] = trackId;
    console.log(this.playlists[playlistId]);
  },

// generates a unique id
// (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

// adds a track to the this

  addTrack: function (name, artist, album) {
    var lengthOfthis = 0;
    for (key in this.tracks) {
      lengthOfthis += 1;
    }
    this.tracks["t"+ Number(lengthOfthis + 1)] = {
      'id': this.uid(),
      'name': name,
      'artist' : artist,
      'album': album
    };
    console.log(this.tracks);
  },

// adds a playlist to the library

  addPlaylist: function(name) {
    var lengthOfPlaylist = 0;
    for (key in this.playlists) {
      lengthOfPlaylist += 1;
    }
    this.playlists["p" + Number(lengthOfPlaylist + 1)] = {
      id: this.uid(),
      name: name,
      tracks: []
    }
    console.log(this.playlists);
  }
}


library.printPlaylists();

library.printTracks();

library.printPlaylist("p01");

library.addTrackToPlaylist("t02", "p02");

library.addTrack("Small Town Southern Man", "Alan Jackson", "Good Time");

library.addPlaylist("Sweet Country Tunes");


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}