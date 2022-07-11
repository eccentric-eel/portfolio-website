<template>
    <canvas style="position: absolute"></canvas>
</template>

<script>
    export default { 
        name: 'mainCanvas',
        mounted() {
            let pageType   = null;
            let squaresNum = null;
            let side       = null;
            let multiplier = null;

            let canvas = document.querySelector("canvas");
            let c = canvas.getContext('2d');
            let squares = [];
            let colors = ['rgb(253, 73, 177)', 'rgb(220, 66, 227)', 'rgb(198, 85, 250)', 'rgb(132, 66, 227)', 'rgb(98, 73, 253)'];
            let mousePos = { x: null, y: null }

            canvas.width = document.documentElement.clientWidth;
            canvas.height = document.documentElement.clientHeight;

            if(canvas.width < 600) {
                pageType = 'mobile';
                multiplier = 3;
                squaresNum = 200;
                side = 5;
            }
            else {
                pageType = 'desktop';
                multiplier = 3
                squaresNum = 300;
                side = 20;
            }

            window.addEventListener('resize', resize);
            window.addEventListener('mousemove', interact);

            for(let i = 0; i < squaresNum; i++) {
                
                let xpos =  Math.random() * (document.documentElement.clientWidth - side);
                let ypos =  Math.random() * (document.documentElement.clientHeight - side);
                let dx   = (Math.random() - 0.5) * multiplier;
                let dy   = (Math.random() - 0.5) * multiplier;

                squares.push(new Square(xpos, ypos, dx, dy));
            }
            
            animate();

            function interact(event) {
                mousePos.x = event.x;
                mousePos.y = event.y;
            }
            function resize() {
                canvas.width = document.documentElement.clientWidth;
                canvas.height = document.documentElement.clientHeight;
            }
            function animate() {
                requestAnimationFrame(animate);
                c.clearRect(0 , 0, document.documentElement.clientWidth, document.documentElement.clientHeight);   

                for(let i=0; i<squares.length; i++)
                    squares[i].update();
            }
            function Square(x, y, dx, dy) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.side = side;
                this.color = colors[Math.floor(Math.random() * colors.length)];

                this.draw = () => {
                    c.fillStyle = this.color;
                    c.fillRect(this.x, this.y, this.side, this.side);

                    c.shadowColor = "black";
                    c.shadowBlur = 10;
                    c.shadowOffsetX = 3;
                    c.shadowOffsetY = 3;
                }
                this.update = ()=>{
                    if(this.x > (document.documentElement.clientWidth - side) || this.x < 0)
                        this.dx = -this.dx;
                    if(this.y > (document.documentElement.clientHeight - side) || this.y < 0)
                        this.dy = -this.dy;

                    this.x += this.dx;
                    this.y += this.dy;

                    //---------mutate squares based on current mouse position for desktop-----------
                    if(pageType !== 'mobile') { 
                    
                        if(mousePos.x - this.x < 100 && mousePos.x - this.x > -100 &&
                           mousePos.y - this.y < 100 && mousePos.y - this.y > -100) {
                            
                            if(this.side < 60) 
                                this.side += 2;
                        }
                        else if (this.side > 20) 
                            this.side -= 1;
                    }
                    //------------------------------------------------------------------------------

                    this.draw();
                }
            }
        }
    }
</script>