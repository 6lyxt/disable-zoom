const disableGlobalZoom = () => {
    let e = Math.ceil((window.outerWidth - 10) / window.innerWidth * 100);
    document.body.style.zoom = 100 / (e / 100) / 100
};

window.onload = () => disableGlobalZoom(); 
window.onresize = () => disableGlobalZoom(); 

window.onkeydown = function(e) {
    if ((e.ctrlKey || e.metaKey) && (61 == e.keyCode || 187 == e.keyCode || 171 == e.keyCode || 107 == e.keyCode || "+" == e.key || "=" == e.key || 54 == e.keyCode || 189 == e.keyCode || 173 == e.keyCode || 167 == e.keyCode || 109 == e.keyCode || 169 == e.keyCode || 219 == e.keyCode || "-" == e.key)) {
        e.preventDefault();
        return
    }
}; 

window.addEventListener("wheel", function(e) {
    (e.ctrlKey || e.metaKey) && e.preventDefault()
},{
    passive: false
});
