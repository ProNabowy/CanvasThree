//======================================================================== Selector Element

let c = document.querySelector("#canvas");

let ctx = c.getContext("2d");

let counter = 0;

let array = [];

let arrTwo = [];

let width = window.innerWidth;

let height = window.innerHeight;

//======================================================================== Set Size To Elment

c.width = width;

c.height = height;

//======================================================================== Set Width When window resize

this.addEventListener("resize" , function() {

    c.width = this.innerWidth;

    c.height = this.innerHeight;

});


class Particle   {

    constructor(x , y , size , speedX , speedY , color) {

        this.x = c.width / 1.8;

        this.y = c.height / 2;

        this.size = Math.random() * 25;

        this.speedX = Math.random() * 3 - 1.5;

        this.speedY = Math.random() * 3 - 1.5;

        this.color = 'hsl(' + counter + ', 100% , 50%)';

    };

    update() {

        this.x += this.speedX;

        this.y += this.speedY;

        if (this.size > 0.3) this.size -= 0.1;
    }
    darw() {

        ctx.beginPath();

        ctx.save();

        ctx.fillStyle = this.color;

        ctx.arc(this.x , this.y , this.size , 0 , Math.PI * 2);

        ctx.fill();

        ctx.restore();

    }

};
//======================================================================== Node From Class Particle
class NodeOne extends Particle {

    constructor(x, y, size , speedX , speedY , color) {

        super(x , y , size , speedX , speedY , color);

        this.x = c.width / 1.2;

    };
};
class NodeTwo extends Particle {

    constructor(x, y, size , speedX , speedY , color) {
        
        super(x , y , size , speedX , speedY , color);

        this.x = c.width / 3.1;

    }

};
class NodeThree extends Particle {

    constructor(x, y, size , speedX , speedY , color) {

        super(x , y , size , speedX , speedY , color);

        this.x = c.width / 8;

    }
}
//======================================================================== Nodes For Small Media
class NodeFour extends Particle {

    constructor(x, y, size , speedX , speedY , color) {

        super(x , y , size , speedX , speedY , color);

        this.y = c.height / 1.3;

    }
}

class NodeFive extends Particle {

    constructor(x, y, size , speedX , speedY , color) {

        super(x , y , size , speedX , speedY , color);
        
        this.y = c.height / 2.5;

    }
}
class NodeSix extends Particle {

    constructor(x, y, size , speedX , speedY , color) {

        super(x , y , size , speedX , speedY , color);

        this.y = c.height / 8;
        
    }
}
//======================================================================== Create Funtion To push shapes in array

let pushShapsSmallMedia = function() {
    
    for (let i = 0; i < 300; i++) {

        arrTwo.push(new NodeFour);

        arrTwo.push(new NodeFive);

        arrTwo.push(new NodeSix);
        
    };
};
pushShapsSmallMedia();

//======================================================================== Create Funtion To push shapes in array

let pushShaps = function() {

    for (let i = 0; i < 300; i++) {

        array.push(new Particle);

        array.push(new NodeOne);

        array.push(new NodeTwo);

        array.push(new NodeThree);

    };
};
pushShaps();

//======================================================================== Create Function To update And darw Shaps

let updateSmallMedia = function() {

    for (let i = 0; i < arrTwo.length; i++) {

        arrTwo[i].update();
        
        arrTwo[i].darw();

        //======================================================================== Hidden Shaps If it less than 0.2
        
        if(arrTwo[i].size < 0.3) {

            arrTwo.splice(i , 1);

            i--;

        }
    };
};
//======================================================================== Create Function To update And darw Shaps

let updateDarw = function() {

    for (let i = 0; i < array.length; i++) {

        array[i].update();

        array[i].darw();

        //======================================================================== Hidden Shaps If it less than 0.2

        if(array[i].size < 0.3) {

            array.splice(i , 1);

            i--;
            
        }
    };
};

//======================================================================== Create Function To Animait 

let animaitSmallScrean = function() {

    ctx.fillStyle = 'rgba(0 , 0 , 0 , 0.3)';

    ctx.fillRect(0 , 0 , c.width , c.height);

    counter += 41;

    requestAnimationFrame(animaitSmallScrean);

    updateSmallMedia();

}
// Create Function To Animait 

let animait = function() {

    ctx.fillStyle = 'rgba(0 , 0 , 0 , 0.3)';

    ctx.fillRect(0 , 0 , c.width , c.height);

    counter += 2;

    requestAnimationFrame(animait);

    updateDarw();

}
    function Media() {
        if(window.innerWidth >= 700 ) {

            animait();
      
         let interval = setInterval( pushShaps, 6000);
      
          }else {
      
              let interval = setInterval( pushShapsSmallMedia, 6000);
      
              animaitSmallScrean();
              
          }
      
    }

    Media();