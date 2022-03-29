import { getType, Type } from "tst-reflect";
import IoC from './IoC';
import IMovable from './IMovable';

interface IAnimal {
	name: string;
}
class Animal implements IAnimal {
	constructor(public name: string)
	{}
}
const typeOfIAnimal: Type = getType<IAnimal>();
const typeOfAnimal: Type = getType<Animal>();
console.log(typeOfAnimal.isAssignableTo(typeOfIAnimal)); // true





//console.log(reflect<IMovable>().as('interface').reflectedInterface.properties)






// interface IMovable2 {
// 	position: IMovable
// 	readonly movementVelocity: string
// }
// console.log(reflect<IMovable2>().as('interface').reflectedInterface)
// console.log(reflect<IMovable2>().as('interface').reflectedInterface.properties)





// IoC.register('Adapter', (reflectedInterface: ReflectedClass) => {
// 	const {properties, class: {name: interfaceName}} = reflectedInterface
//
// 	console.log('properties',properties)
//
// 	return `
// 		class implements ${interfaceName} {
// 			constructor(universalObject) {this.universalObject = universalObject}
// 			${
// 				properties.map(property => {
// 					return `
// 						get ${property.name}() {
// 							return IoC.resolve('${interfaceName}.${property.name}', this.universalObject)
// 						}
// 					`
// 				})
// 			}
// 			${
// 				properties.map(property => {
// 					return `
// 						set ${property.name}(${property.name}) {
// 							return IoC.resolve('${interfaceName}.${property.name}.set', this.universalObject).execute()
// 						}
// 					`
// 				})
// 			}
// 		}
// 	`
// })
//
//
// console.log(
// 	IoC.resolve<string>('Adapter', reflect<IMovable>().as('interface').reflectedInterface)
// )