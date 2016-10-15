angular.module('devMtn').service('dataService',
function() {


  this.mainProfile = []

  this.friendsList = [{
        name: 'Mark Ferris',
        tagline: 'I am awesome!',
        image: "https://lh3.ggpht.com/EaoEf2uSk3CFAhPw9Fk-mbkU7c_qdBMlF5myx1ocDx4cHw54G21wDokRZSySJ3pd4iw=w300",
        desc: 'I am a very laid back dude who likes to eat.',
        id: 1
    }, {
        name: 'Oliver Ferris',
        tagline: 'I am really awesome!',
        image: "https://i.imgflip.com/2/db5xf.jpg",
        desc: 'I am a very laid back dude who likes to sleep.',
        id: 2
    },{
        name: 'Daren Murphy',
        tagline: 'I am kinda Awesome!',
        image: "https://i.ytimg.com/vi/gxmHOwWh-i4/maxresdefault.jpg",
        desc: 'I am a very laid back dude who likes to camp.',
        id: 3
      },{
          name: 'Harambe',
          tagline: 'I just wanted to play!',
          image: "http://i2.mirror.co.uk/incoming/article8075004.ece/ALTERNATES/s615b/Harambe.jpg",
          desc: 'I am a very laid back dude who likes to camp.',
          id: 3
    }]


  this.addProfile = function(profile) {
      this.mainProfile.push(profile);
      console.log(this.mainProfile);

    }

  this.getLoggedinUserProfile = function () {
    for (var i = 0; i < this.mainProfile.length; i++) {
      if(this.mainProfile[i].isLoggedInUser) {
        return this.mainProfile[i];
      }
    }
    return null;
  }




});
