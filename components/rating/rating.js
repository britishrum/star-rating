(function (document) {
    document._currentScript = document._currentScript || document.currentScript;
    const thisDocument = document._currentScript.ownerDocument,
          maxvalueDefault = 5,
          value = Symbol(),
          starsize = Symbol(),
          maxvalue = Symbol(),
          opacity = Symbol(),
          disabled = Symbol();

    class XRating extends HTMLElement {
        constructor() {
            super();
        }

        createdCallback() {
            let root = this.createShadowRoot(),
                template = thisDocument.querySelector('#x-rating-template'),
                clone = thisDocument.importNode(template.content, true);

            for (let i = 0; i < (this.getAttribute('maxvalue') || maxvalueDefault); i++) {
                let star = document.createElement('x-star');
                this.shadowRoot.appendChild(star);
                star.addEventListener('click', e => {
                    if (!this.disabled) {
                        enableStars(this.shadowRoot.querySelectorAll('x-star'), i + 1);
                        this.value = i + 1;
                    }
                });
            }
            for (let attr of this.attributes) {
                this.attributeChangedCallback(attr.name, null, attr.value);
            }
            root.appendChild(clone);
        }

        attributeChangedCallback(attrName, oldVal, newVal) {
            if (oldVal != newVal && ['starsize', 'value', 'disabled', 'maxvalue', 'opacity'].indexOf(attrName) >= 0) {
                this[attrName] = newVal;
            }
        }

        set starsize(val) {
            if (this.starsize != val) {
                this[starsize] = val;
                let stars = this.shadowRoot.querySelectorAll('x-star');
                Array.prototype.forEach.call(stars, star => star.size = val);
                this.style['min-height'] = val;
            }
        }

        get starsize() {
            return this[starsize];
        }

        set value(val) {
            if (this.value != val) {
                this[value] = val;
                let stars = this.shadowRoot.querySelectorAll('x-star');
                enableStars(stars, val);
            }
        }

        get value() {
            return this[value];
        }

        set disabled(val) {
            if (this.disabled != val) {
                this[disabled] = val;
            }
        }

        get disabled() {
            return this[disabled];
        }

        set maxvalue(val) {
            if (this.maxvalue != val) {
                this[maxvalue] = val;
            }
        }

        get maxvalue() {
            return this[maxvalue];
        }

        set opacity(val) {
            if (this.opacity != val) {
                this[opacity] = val;
                let stars = this.shadowRoot.querySelectorAll('x-star');
                Array.prototype.forEach.call(stars, star => star.opacity = val);
            }
        }

        get opacity() {
            return this[opacity];
        }
    }

    function enableStars(stars, value) {
        Array.prototype.forEach.call(stars, (star, idx) => star.enabled = idx < value);
    }

    document.registerElement('x-rating', XRating);
})(document);
//# sourceMappingURL=rating.js.map
