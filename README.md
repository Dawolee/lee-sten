# Lee-sten

A web app version of a soundboard made with React/JavaScript. This was created with create-react-app and you should use npm start to run the app.

# To use

There are some default keys already mapped the way the Mac keyboard is laid out. You can record your own custom sounds and after downloading them, drag the files into the keys to populate them with your custom sounds. You can also click on the key to then browse a folder to drag in some sounds. You can also just download some audio files such as mp3/wav from other websites and use those.

There is also a YouTube player on the side, in which you just copy and paste a url and load the song to play as your backing track.

# Socket.io

There is a socket.io port listening on port 3001. You should run the server.js to start up the port and make sure that the port number matches your the port number in the App.js socket constant.
ex) const socket = socketIOClient('http://youripadddress:3001/')
If you don't update the ip address inside the socket constant in App.js, your console in the browser will log some socket related errors but it shouldn't affect the web app from running.
Other people can join your session and it will console log in the browser whenever someone has entered or left the room.
