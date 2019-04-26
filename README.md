# number-format
A simple ultra lightweight VanillaJS Webcomponent to display numbers including currencies.

* **No dependencies**
* **1.87 kb Source Code**
* **800 Bytes zipped**

## Usage 
See the [demo.html](https://toarm.github.io/number-format/demo.html) for the results.

### Default - Browser Locale
```html
<number-format number="5.2136"></number-format>
```

### British Currency Style
```html
<number-format number="5.2136" locale="en-GB" currency="GBP"></number-format>
```

### German Number - Using ,
```html
<number-format number="5.2136" locale="de-DE"></number-format>
```

### German Currency
```html
<number-format number="5.2136" locale="de-DE" currency="EUR"></number-format>
```

### 4 Digits
```html
<number-format number="5.2136" min-digits="4" max-digits="4"></number-format>
```