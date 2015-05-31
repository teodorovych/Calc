;
function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    }
};
if (document.documentElement.hidden === undefined) {
    Object.defineProperty(Element.prototype, "hidden", {
        set: function(value) {
            this.setAttribute('hidden', value);
        },
        get: function() {
            return this.getAttribute('hidden');
        }
    });
};