# Bruce's Beakers

## How To Play
```
1. Clone repo
2. Open index.html in your browser
```

## Technologies Used
* JavaScript
* Jasmine
* JQuery

## Screenshots
[insert screenshot here]

## My Approach

Due to time constraints, I only had 1.5 days to complete the application. As such, before starting, I had to pick my priorities and what I wanted to focus on. Ultimately, I decided my focus would be on the following key issues:

1. Writing logic for application in clean code
2. Making application as interactive as possible

Before beginning, I sketched out the JavaScript objects the programme would likely require and how they were going to interact with each other:

[insert diagram]

I wanted the Beaker object to only contain the properties of the beaker such as maximum and current capacity while it was decided that the Puzzle object would control the actual game methods such as ```fillup```, ```empty``` and ```pour```.

I also followed a TDD-approach in completing the backend (shown below), using unit tests to guide what I wanted each object to do. If you'd like to run my tests directly, open ```SpecRunner.html``` in your browser.

[insert Jasmine screenshot]

I spent considerable time on the frontend, mainly as I wanted the application to be highly interactive. In particular, I wanted an animated glass which would have its content changing according to its current volume as I thought it would enable the user to visualise what they were doing more clearly. A countdown timer and pop-ups which would automatically stop the game when the player had solved the puzzle or when time had run out were also other features I was keen on. I was able to achieve these with a combination of JQuery and CSS.

Regretfully, I ran out of time to include feature tests for the front end so I had to ensure everything was functioning by running the application several times. This would be a key thing to add given more time.

## Reflections

This was an interesting challenge, particularly as I got a chance to really get my hands dirty with CSS/JQuery. This was since the backend was fairly straightforward, and I was able to devote a lot more time to the frontend. It was an interesting change to what I normally do and I enjoyed fiddling with things a lot more than I thought and probably spent WAY too much time on styling my buttons. On the positive side, I learnt a lot more about styling such as 'animating' with CSS, creating pop-ups with pure CSS/HTML and making a countdown timer.

As for the negatives, lack of timing was an issue and put constraints on things I wanted to do. I had to scrap the initial goal of deploying it with Node.js on Heroku as configuring NPM and Node on my old Windows laptop (having returned my Mac to Makers) and setting up the project would have taken some time which I wanted to spend on making the puzzle more interactive.

I also wanted to add some sort of a high-score board with the use of a database to log user's previous timings and an API to fetch the data but this also had to be scrapped(or postponed for the future perhaps).

However, overall, the project was an important lesson in defining what I wanted my MVP to look like and creating a list of priorities of what to focus on and what to shelve for 'maybe later'. It was an exercise we had done several times as a group at Makers but it was interesting to apply it to a personal project.

## What Next?
* Deploy to server with Node.js.
* Add feature tests with Zombie/Phantom.
* Save high scores (timings) to database so player can assess their timings against other players.
* Sound effects!
