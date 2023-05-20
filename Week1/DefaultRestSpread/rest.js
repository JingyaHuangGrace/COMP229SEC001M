function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
 }
 // ...friends parameter is a rest parameter that allows you to pass any number of additional arguments
 userFriends('User', 'Bob', 'Alice');
