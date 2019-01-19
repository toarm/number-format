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
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }

    render() {
        requestAnimationFrame(() => {
            if (this.number) {
                this.innerText = Number(this.number).toLocaleString(this.locale, this.getLocaleProperties())
            } else {
                this.innerText = "";
            }
        });
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

customElements.define(NumberFormat.is, NumberFormat);