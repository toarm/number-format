const DEFAULT_DIGITS = 2;

class NumberFormat extends HTMLElement {
    static get is() {
        return "number-format";
    }

    static get properties() {
        return {
            number: String,
            minDigits: {
                attribute: "min-digits"
            },
            maxDigits: {
                attribute: "max-digits"
            },
            currency: String,
            locale: String
        };
    }

    static get observedAttributes() {
        return ["number", "min-digits", "max-digits", "currency", "locale"];
    }

    constructor() {
        super();
        this.locale = navigator.language;

        this.render = debounce(() => {
            requestAnimationFrame(() => {
                if (this.number) {
                    this.innerText = Number(this.number).toLocaleString(this.locale, this.getLocaleProperties())
                } else {
                    this.innerText = "";
                }
            })
        }, 0);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }

    getLocaleProperties() {
        const {currency} = this;
        return {
            minimumFractionDigits: this._getIntAttribute("min-digits"),
            maximumFractionDigits: this._getIntAttribute("max-digits"),
            style: this.getStyle(),
            currency
        };
    }

    getStyle() {
        return this.currency !== void 0 ? "currency" : "decimal";
    }

    _getIntAttribute(name) {
        const value = parseInt(this.getAttribute(name));
        return isNaN(value) ? DEFAULT_DIGITS : value;
    }
}


const debounce = (fn, time) => {
    let key;
    return function() {
        const functionCall = () => fn.apply(this, arguments);
        clearTimeout(key);
        key = setTimeout(functionCall, time);
    }
};

customElements.define(NumberFormat.is, NumberFormat);