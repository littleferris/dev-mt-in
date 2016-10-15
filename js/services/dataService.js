angular.module('devMtn').service('dataService',
function() {

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
    }]


  this.addUser = function(newUser) {
    if(newUser.name && newUser.tagline && newUser.image && newUser.desc) {
      this.friendsList.push(newUser);
      return true;
    }
    return false;

    }





});
