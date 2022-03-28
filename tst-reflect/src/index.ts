import { getType, Type } from "tst-reflect";

interface IAnimal
{
	name: string;
}

class Animal implements IAnimal
{
	constructor(public name: string)
	{
	}
}

const typeOfIAnimal: Type = getType<IAnimal>();
const typeOfAnimal: Type = getType<Animal>();

console.log(typeOfAnimal.isAssignableTo(typeOfIAnimal)); // true