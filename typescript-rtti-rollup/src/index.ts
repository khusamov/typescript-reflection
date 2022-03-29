import "reflect-metadata" // Обязательный для использования typescript-rtti импорт!
import {reflect, ReflectedClass} from 'typescript-rtti'
import {format} from 'prettier/standalone'
import {Options} from 'prettier';
declare var window: Window & {prettierPlugins: any}
import prettierOptions from './prettier.options.json'
import IoC from './IoC';
import IMovable from './IMovable';

const getterTemplate = (name: string, interfaceName: string) => `
	get ${name}() {
		return IoC.resolve('${interfaceName}.${name}', this.universalObject)
	}
`

const setterTemplate = (name: string, interfaceName: string) => `
	set ${name}(${name}) {
		return IoC.resolve('${interfaceName}.${name}.set', this.universalObject).execute()
	}
`

const constructorTemplate = () => `
	constructor(universalObject) {
		this.universalObject = universalObject
	}
`

const formatOptions = {
	parser: 'typescript',
	plugins: window.prettierPlugins,
	...prettierOptions as Options
}

IoC.register(
	'Adapter',
	(reflectedInterface: ReflectedClass) => {
		const {properties, class: {name: interfaceName}} = reflectedInterface
		return (
			format(
				`
					// implements ${interfaceName}
					class {
						${constructorTemplate()}
						${properties.map(property => getterTemplate(property.name, interfaceName)).join('')}
						${properties.map(property => setterTemplate(property.name, interfaceName)).join('')}
					}
				`, formatOptions
			)
		)
	}
)

console.log(
	IoC.resolve<string>(
		'Adapter',
		reflect<IMovable>().as('interface').reflectedInterface
	)
)