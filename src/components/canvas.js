require('styles/Title.scss');

import React from 'react';


var globalTick = 0,blips, c, ch, clear, ctx, cw, divider, initialBlips, pi2, rand, run;

rand =function(min,max){
      return Math.floor((max-min+1)*Math.random())+min;
}

clear = function() {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'hsla(0, 0%, 0%, .05)';
    ctx.fillRect(0, 0, cw, ch);
    return ctx.globalCompositeOperation = 'lighter';
  };

run = function() {
    var i;
    window.requestAnimationFrame(run);
    clear();
    i = blips.length;
    while (i--) {
      blips[i].update(i);
    }
    i = blips.length;
    while (i--) {
      blips[i].render(i);
    }
    blips.push(new Blip(rand(0, cw), rand(0, ch),cw,ch,blips,ctx));
    return globalTick++;
  };

window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    return window.setTimeout(function() {
      return callback(+new Date());
    }, 1000 / 60);
});

class Blip{
  constructor(x,y,cw,ch,parent,ctx){
      this.x=x;
      this.y=y;
      this.r=.1;
      this.cw=cw;
      this.ch=ch;
      this.rGrowthBase = 1;
      this.rGrowth = this.rGrowthBase;
      this.rMax = (cw + ch) / 7;
      this.alpha = 1;
      this.parent = parent;
      this.ctx = ctx;
  }

  update(i){
    let percent = (this.rMax-this.r)/this.rMax;
    this.rGrowth = .1+this.rGrowthBase*percent;
    this.r += this.rGrowth;
    this.alpha = percent;
    if(this.r>this.rMax){
      return this.parent.splice(i,1);
    }
  }

  render(){
    let pi2 = Math.PI * 2;
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y,this.r,0,pi2,false);
    this.ctx.fillStyle = 'hsla(' + rand(globalTick - 80, globalTick + 80) + ', 50%, 1%, ' + this.alpha + ')';
    this.ctx.fill();
  }
}

class CanvasComponent extends React.Component{
    componentDidMount(){      
    c = document.getElementById('c');
    ctx = c.getContext('2d');
    divider = 4;
    cw = c.width = window.innerWidth / divider;
    ch = c.height = window.innerHeight / divider;
    blips = [];
    initialBlips = 30;

    window.addEventListener('resize',function(){
      cw = c.width = window.innerWidth / divider;
    return ch = c.height = window.innerHeight / divider;
    })
    run();
}
    render(){
        return(
           <canvas id="c"></canvas>
        )
    }
}

export default CanvasComponent;