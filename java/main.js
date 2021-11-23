let currentElem = null;

flex_cont1.onmouseover = function(event) {
    if (currentElem) return;
    let target = event.target.closest('nav');
    if (!target) return;
    if (!flex_cont1.contains(target)) return;
    currentElem = target;
    onEnter(currentElem)
};

flex_cont1.onmouseout = function(event) {
    if (!currentElem) return;
    let relatedTarget = event.relatedTarget;
    while (relatedTarget) {
        if (relatedTarget == currentElem) return;
        relatedTarget = relatedTarget.parentNode;
    }
    onLeave(currentElem);
    currentElem = null;
}
function onEnter(elem) {
    elem.style.background = 'transparent';
}
function onLeave(elem) {
    elem.style.background = 'blue';
}