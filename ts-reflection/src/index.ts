import {propertiesOf} from 'ts-reflection'

interface MyInterface {
	name: string
	hobbies: string[]
}

// You can now use propertiesOf utility to get properties of a type
const properties = propertiesOf<MyInterface>() // ['name', 'hobbies']

console.log(properties)