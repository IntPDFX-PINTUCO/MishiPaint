tablero=document.getElementById("tablero")
colores=tablero.getContext("2d")
colores.strokeStyle="Black"
colores.lineWidth=3
colores.beginPath()
colores.strokeStyle="Blue"
colores.arc(200,200,40,0,2*Math.PI)
colores.stroke()
colores.beginPath()
colores.strokeStyle="Yellow"
colores.arc(243,255,40,0,2*Math.PI)
colores.stroke()
colores.beginPath()
colores.strokeStyle="Black"
colores.arc(285,200,40,0,2*Math.PI)
colores.stroke()
colores.beginPath()
colores.strokeStyle="Green"
colores.arc(330,255,40,0,2*Math.PI)
colores.stroke()
colores.beginPath()
colores.strokeStyle="orangered"
colores.arc(370,200,40,0,2*Math.PI)
colores.stroke()
var xi=0
var yi=0
var xf=0
var yf=0
var dibujando=false
tablero.addEventListener("mousedown",micli) 
tablero.addEventListener("mousemove",mimov) 
tablero.addEventListener("mouseup",miu) 
function micli(info){
    xi=info.clientX-tablero.offsetLeft
    yi=info.clientY-tablero.offsetTop
dibujando=true
}
function mimov(info){
    xi=info.clientX-tablero.offsetLeft
    yi=info.clientY-tablero.offsetTop+8
    if(dibujando==true){

        colores.beginPath()
        colores.strokeStyle="orangered"
        colores.moveTo(xi,yi)
        colores.lineTo(xf,yf)
        colores.stroke()
    }
    xf=xi
    yf=yi
}
function miu(info){
dibujando=false
}