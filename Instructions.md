Hi! Thank you for taking the time to review my code.
Instructions to run the App
To run this app you will need Node.js in your system. You can get it at https://nodejs.org/en/. Once you are there, select the LTS option. After that, follow the installation options.
with Node installed let's proceed to download the application. You can find it at https://github.com/Lazzolla/Patagonian-Challenge.
Assuming you know your way through Github. You can clone the project in a preference folder in your system.
If you aren't familiar with Github, don't worry! Just go to the repository link and find the green button that says Code(with an arrow pointing down) There select Download ZIP and save it in a folder.
With the project in your system, let's install our dependencies. For this, open a terminal wherever you want and navigate to the project folder. In there, type the command: npm install
Wait for the install to complete.
The app accepts three commands.
Commands
< npm run start > will start the app and allow you to work in the client. 
< npm run saveSongs > will save in the database all the songs from artist wich Ids are saved in a JSON file named artistList.json that you will find in the project folder.
<npm run importJSON > will create a JSON file in the folder: public/imports/ with all the songs stored in the database
Commands description
If you run the npm run start commando, you will be able to open the app client in any browser by typing http://localhost:8080/ in the navigation bar. Here you would be able to review the functionality of the endpoints required for the challenge instructions.
If you wish to check the script to export and import songs from a database you can do it this way: 
First: kill the process if you run npm run start. To do so, make click in terminal and press Ctrl + c twice.
Second: Use the < npm run saveSongs > command to save all the songs from the artists in the database. If you wish to remove, add or change artists, just modify the artistList.json. (You will need artist ID from Spotify API to do this.)
Third: run < npm run importJSON > to create a JSON file with all the data in the database.
Some notes
For the simplicity sake of this exercise, the database connection is allowed to every IP address. Which, of course, its a really bad practice. Therefore, you will need to set nothing more than your Spotify Client Id and Secret to run the app. You can do this by modifying the file spotifyAPI.js located in the folder /config/
I pay, almost none attention to the client-side since this is an exercise for backend skills. If you wish to measure my frontend skill I'll be more than happy to submit a test. My expertise area is React.js.
That it! Thanks again for your time. Looking forward to your feedback.
