
(function(global) {
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d');
               
 
    canvas.width = 500;
    canvas.height = 500;
    
    //append the canvas to the DOM
    doc.body.appendChild(canvas);


 global.Resources.load([ 
'http://dupontcours.free.fr/Games/images/char-boy.png',
'http://dupontcours.free.fr/Games/images/stone-block.png'
    ]);

    // after the resources have been loaded, start the game
   Resources.onReady(function(){
           
 for (var row = 0; row < 5; row++) {
            for (var col = 0; col < 5; col++) {
                ctx.drawImage(Resources.get('http://dupontcours.free.fr/Games/images/stone-block.png'), col * 100, row * 80);
            }
        }
     ctx.font="30px Verdana";
     ctx.fillText("Click on me !",30,30);
     document.addEventListener('click', function(e){ 

       ctx.drawImage(Resources.get('http://dupontcours.free.fr/Games/images/char-boy.png'),e.pageX-70,e.pageY-100);
    
}, false);

      
   });

})(this);