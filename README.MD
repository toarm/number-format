# number-format
A simple ultra lightweight VanillaJS Webcomponent to display numbers including currencies.

## Usage 
See the demo.html for the results.
### Default - Browser Locale
`<number-format number="5.2136"></number-format>`

### British Currency Style
`<number-format number="5.2136" locale="en-GB" currency="GBP"></number-format>`

### German Number - Using ,
`<number-format number="5.2136" locale="de-DE"></number-format>`

### German Currency
`<number-format number="5.2136" locale="de-DE" currency="EUR"></number-format>`

### 4 Digits
`<number-format number="5.2136" min-digits="4" max-digits="4"></number-format>`
