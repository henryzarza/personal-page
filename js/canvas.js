"use strict";

var drawCanvas = () => {
  var containerCanvas = document.querySelector('.section-canvas'),
      canvas = document.querySelector('.section-canvas canvas'),
      context = canvas.getContext('2d'),
      lineColor = '#fff';
  
  canvas.width = containerCanvas.offsetWidth;
  canvas.height = containerCanvas.offsetHeight;

  var mousePosition = { x: 0, y: 0 };

  var stars = {
    quantity: 350,
    distance: 75,
    radius: 75,
    data: []
  };

  function Star() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = -.5 + Math.random();
    this.vy = -.5 + Math.random();
    this.color = 'rgba(200,199,204,'+ (.2 + Math.random()) +')';
    this.width = 3;
  }

  Star.prototype = {
    drawStar: function() {
      var peak = 5, bulk = .4;
      context.save();
      context.beginPath();
      context.translate(this.x, this.y);
      context.moveTo(0,-this.width);
      
      for (let i = 0; i < peak; i++) {
        context.rotate(Math.PI / peak);
        context.lineTo(0,-(this.width * bulk));
        context.rotate(Math.PI / peak);
        context.lineTo(0,-this.width);
      }

      context.fillStyle = this.color;
      context.fill();
      context.restore();
    },

    drawLine: function() {
      context.lineWidth = .1;
      context.strokeStyle = lineColor;

      for (let i = 0; i < stars.quantity; i++) {
        for (let j = 0; j < stars.quantity; j++) {
          let starOuter = stars.data[i];
          let starInner = stars.data[j];
          
          let distanceX = Math.abs(starOuter.x - starInner.x) < stars.distance;
          let distanceY = Math.abs(starOuter.y - starInner.y) < stars.distance;
          
          if (distanceX && distanceY) {
            let distanceMouseX = Math.abs(starOuter.x - mousePosition.x) < stars.radius;
            let distanceMouseY = Math.abs(starOuter.y - mousePosition.y) < stars.radius

            if (distanceMouseX && distanceMouseY) {
              context.beginPath();
              context.moveTo(starOuter.x, starOuter.y);
              context.lineTo(starInner.x, starInner.y);
              context.stroke();
              context.closePath();
            }
          }
        }
      }
    },

    animate: function() {
      for (let i = 0; i < stars.quantity; i++) {
        let star = stars.data[i];

        if (star.y < 0 || star.y > canvas.height) {
          star.vx = star.vx;
          star.vy = - star.vy;
        } else if (star.x < 0 || star.x > canvas.width) {
          star.vx = - star.vx;
          star.vy = star.vy;
        }
        star.x += star.vx;
        star.y += star.vy;
      }
    }
  };

  function inicializate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    var star;
    for(let i = 0; i < stars.quantity; i++){
      stars.data.push(new Star());
      star = stars.data[i];
      star.drawStar();
    }
    star.drawLine();
    star.animate();
  }

  containerCanvas.onmousemove = (event) => {
    mousePosition.x = event.pageX - containerCanvas.offsetLeft;
    mousePosition.y = event.pageY - containerCanvas.offsetTop;
  };

  window.onresize = (event) => {
    canvas.width = containerCanvas.offsetWidth;
    canvas.height = containerCanvas.offsetHeight;    
  };

  mousePosition.x = containerCanvas.offsetWidth / 2;
  mousePosition.y = containerCanvas.offsetHeight / 2;

  setInterval(inicializate, 1000/20);  
};