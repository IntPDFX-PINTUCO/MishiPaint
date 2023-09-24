tablero = document.getElementById("tablero")
colores = tablero.getContext("2d")
colores.strokeStyle = "black"
colores.lineWidth = 2.5
var xi = 0
var yi = 0
var xf = 0
var yf = 0
var dibujando = false
tablero.addEventListener("mousedown", micli)
tablero.addEventListener("mousemove", mimov)
tablero.addEventListener("mouseup", miu)
tablero.addEventListener("touchstart", touin)
tablero.addEventListener("touchmove", toumov)
function micli(info) {
    xf = info.clientX - tablero.offsetLeft
    yf = info.clientY - tablero.offsetTop
    dibujando = true
}
function mimov(info) {
    xi = info.clientX - tablero.offsetLeft
    yi = info.clientY - tablero.offsetTop + 0.5
    if (dibujando == true) {

        colores.beginPath()
        colores.strokeStyle = document.getElementById("color").value
        colores.moveTo(xi, yi)
        colores.lineTo(xf, yf)
        colores.stroke()
    }
    xf = xi
    yf = yi
}
function miu(info) {
    dibujando = false
}
function touin(info) {
    xf = info.touches[0].clientX - tablero.offsetLeft
    yf = info.touches[0].clientY - tablero.offsetTop
}
function toumov(info) {
    xi = info.touches[0].clientX - tablero.offsetLeft
    yi = info.touches[0].clientY - tablero.offsetTop + 0.5

    colores.beginPath()
    colores.strokeStyle = document.getElementById("color").value
    colores.moveTo(xi, yi)
    colores.lineTo(xf, yf)
    colores.stroke()
    xf = xi
    yf = yi
}
if (screen.width < 992) {
    tablero.width = screen.width - 70
    tablero.height = screen.height /2
    document.body.style.overflow = "hidden"
}