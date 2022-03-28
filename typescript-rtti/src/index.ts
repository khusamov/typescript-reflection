import "reflect-metadata" // Обязательный для использования typescript-rtti импорт!
import {reflect, ReflectedClass, ReflectedInterfaceRef} from 'typescript-rtti'
import IMovable from './IMovable';

interface IMovable2 {
	position: string
	readonly movementVelocity: string
}

console.log(reflect<IMovable2>())
console.log(reflect<IMovable>())
console.log(reflect<IMovable>().as('interface').reflectedInterface)




//
// class Class1 {
// 	static resolve(a: Array<string>): number {
// 		return 0
// 	}
// }
//
// Class1.resolve(['text'])
//
//
// IoC.register('Adapter', (reflectedInterface: ReflectedClass) => {
// 	const {properties, class: {name: interfaceName}} = reflectedInterface
// 	const code = `
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
// 	return code;
// })
//
// console.log(
// 	IoC.resolve<string>('Adapter', reflect<IMovable>().as('interface').reflectedInterface)
// )