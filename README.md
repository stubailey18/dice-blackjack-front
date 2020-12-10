# Dice Blackjack (Front)

This is the Angular front-end of a version of Blackjack played with dice. During an Angular course I delivered recently one of my delegates asked if we might build a simple game. That version contained all of the game logic within the app. This version uses web sockets enabling multiple players to play remotely and so the bulk of the logic now sits in the back-end. 

You can see the app in action [here](https://affectionate-ride-7883fd.netlify.app/). Note that it sends messages to and receives updated game data from a Spring Boot app hosted on Heroku using free web dynos. As a consequence it may take a few seconds before you're prompted to input your name. Thereafter you can play against anyone else currently on the app.

