# flappy-bird-and-doodle-jump

Practicing JavaScript logic creating building two classic games.

Logic

1. We need five randomly placed platforms
2. These platforms are vertically and equally spaced apart
3. It has the doodler who automatically lands wherever the first platform is. He can not be landing wherever we start the game otherwise he will fall to the bottom and die.
4. We have the platforms moving once the doodler is at certain height, that means they are not always moving it is only if he moves past a certain heigh.
5. The platforms are also disappearing if they pass the floor and then we add a new one to the top once that happens

Doodler logic

1. He jumps up and down if he is on any platform at any height
2. He moves left and rifht
3. He stops if he hits the left or right hand edge
4. The game is over once he hits the floor

Score

1. Once the doodle die the score would be the amouny of platforms he had jumped over
2. We will store store this score somewhere

.html (Defition of some attributes we will be using)

lang: specofies the language of the element's content

dir: especifies the text direction of the element's content

rel: defines the relationship between a linked resource and the current documet.
