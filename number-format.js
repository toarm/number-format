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
        return ["number", "minDigits", "maxDigits", "currency", "locale"];
    }

    constructor() {
        super();
        this.minDigits = 2;
        this.maxDigits = 2;
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
        const {minDigits, maxDigits, currency} = this;
        return {
            minimumFractionDigits: minDigits,
            maximumFractionDigits: maxDigits,
            style: this.getStyle(),
            currency
        };
    }

    getStyle() {
        return this.currency !== void 0 ? "currency" : "decimal";
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