(function(document) {
    document._currentScript = document._currentScript || document.currentScript;
    const thisDocument = document._currentScript.ownerDocument,
        size = Symbol(),
        enabled = Symbol(),
        opacity = Symbol();

    class XStar extends HTMLElement {
        constructor() {
            super();
        }

        createdCallback() {
            let root = this.createShadowRoot(),
                template = thisDocument.querySelector('#x-star-template'),
                clone = thisDocument.importNode(template.content, true);
            for (let attr of this.attributes) {
                this.attributeChangedCallback(attr.name, null, attr.value);
            }
            root.appendChild(clone);
        }

        attributeChangedCallback(attrName, oldVal, newVal) {
            if (oldVal != newVal && ['size', 'enabled', 'opacity'].indexOf(attrName) >= 0) {
                this[attrName] = newVal;
            }
        }

        set size(size) {
            if (this.size != size) {
                this.shadowRoot.querySelector('svg').setAttribute('height', size);
                this.shadowRoot.querySelector('svg').setAttribute('width', size);
            }
        }

        get size() {
            return this[size];
        }

        set enabled(enabled) {
            if (this.enabled != enabled) {
                let color = enabled ? 'url(#enabled)' : 'url(#disabled)';
                this.shadowRoot.querySelector('polygon').style['fill'] = color;
            }
        }

        get enabled() {
            return this[enabled];
        }

        set opacity(val) {
            if (this.opacity != val) {
                this[opacity] = val;
                let stops = this.shadowRoot.querySelectorAll('stop');
                Array.prototype.forEach.call(stops, stop => stop.setAttribute('stop-opacity', val));
            }
        }

        get opacity() {
            return this[opacity];
        }
    }

    document.registerElement('x-star', XStar);
})(document);
