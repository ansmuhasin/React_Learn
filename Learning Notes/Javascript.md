## Javascript
#### Let and Const
let is new var. variable values.
const - constant values

#### Arrow functions
```js
const myFn = () => {
	return 0;
}
```
fix problems with `this` keyword. if we use this inside the arrow function, then it will not change the this value surprisingly.
```js
const printMyName = name => console.log(name);
```
#### Exports and Imports (Modules)
`person.js`
```js
const person = {
	name: 'Max'
}

export default person
```
`utility.js`
```js
export const clean = () => {}
export const baseData = 10;
```
`app.js`
```js
import person from './person.js' // can give any name if default is used
import prs from './person.js'

import {baseData} from './utility.js'  // we should use exactly same name defined by export
import {clean} from './utility.js'
import {smth as smth} from './utility.js'
import * as bundled from './utility.js'
```

#### Classes
```js
class Person {
	name = 'Max'
	call = () => {}
}

const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);

class Person extends Master{
	constructor()
	{
		super();
		this.name = 'Ans';
	}
}
```

ES7syntax
```js
class Person{
	myProperty = 'value'
	myMethod = () => {}
}
```
 