// The DOMContentLoaded event will fire as soon as the DOM hierarchy has been fully constructed.
document.addEventListener('DOMContentLoaded', () => {
    // ALL VARIAbLES DECLARATION
    // Storing the element <div> with the .grid class
    const grid = document.querySelector('.grid')

    // Storing and creating our Doodler
    // 1. Creating the element <div> to storing the dooler later 
    const doodler = document.createElement('div')

    //Gettinng the Doodler to move around with an initial value 
    let doodlerLeftSpace = 50

    //Getting the Doodler some buttom space with an initial value 
    let doodlerBottomSpace = 150
       
    //Storing game over
    let isGameOver = false

    //Counting the platforms
    let platformCount = 5

    //Storing the platforms in an empty array 
    let platforms = []

    let upTimerId
    let downTimerId
    let isJumping = true






    //2. Creating the Doodler with a function
    function createDooler() {
        //Putting the Dooler inside of the yellow box
        grid.appendChild(doodler)
        //Styling the Doodler with classList property and the method add()
        doodler.classList.add('doodler')
        doodlerLeftSpace = platforms[0].left
        //Moving the Dooler to the left with HTML DOM Style Object
        doodler.style.left = doodlerLeftSpace + 'px' 
        //Giving the the doodler some buttom space with the same method
        doodler.style.bottom = doodlerBottomSpace + 'px'

    }


    //Using classes to store our platforms

    class Platform {
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom
            this.left = Math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }


    }
    
    //Creating the platforms
    function createPlatforms() {
        //Since we need 5 platfomrs we are going to use a for loop
        for (let i = 0; i < platformCount; i++){
            //Making the gap between platforms with the height of my grid class
            let platGap = 600 / platformCount
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new Platform(newPlatBottom)
            platforms.push(newPlatform)
            console.log(platforms)



        }

    }
    

    function movePlatforms() {
        if (doodlerBottomSpace > 200) {
            platforms.forEach(platform => {
                platform.bottom -= 4
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'
            })
        }


    }


    function jump() {
        clearInterval(downTimerId)
        isJumping = true
        upTimerId = setInterval(function () {
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace > 350) {
                fall()
            }
        },30)
    }

    function fall() {
        clearInterval(upTimerId)
        isJumping = false
        downTimerId = setInterval(function () {
            doodlerBottomSpace -= 5
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace <= 0) {
                gameOver()
            }

        },30)
    }

    function gameOver() {
        console.log('game over')
        isGameOver = true
        clearInterval(upTimerId)
        clearInterval(downTimerId)


    }

    function control(e) {
        if (e.key === "ArrowLeft"){
            //move left
        } else if (e.key === "ArrowRight"){
            //move right
        } else if (e.key === "ArrowUp") {
            //moveStraight
        }
    }

    //Making the Doodler to appear 
    function start() {
        //If the game is not over we create our Doodler
        if (!isGameOver) {
            // 3. calling the doodler function in order to appear on the yellow box
            createPlatforms();
            createDooler();
            setInterval(movePlatforms,30);
            jump();
        }
       
    }

   //attach to button (to do)
    start()








})