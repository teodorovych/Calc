;

function getCoords(elem) {

    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    }

// https://learn.javascript.ru/attributes-and-custom-properties#��������-���-��������-hidden
// ��������, ��������/������� hidden �� �������������� � IE11. (c) �. ������
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
};
