let example1 = {
    firstName: 'Izabela',
    lastName: 'Michalak',
    address: {
        city: 'Poznan',
        state: 'Wielkopolska'
    }
	age: 30,
	dogs: ['Ivy','Royal','Nooah']
};

example1.age = 31;

console.log(example1.Object.keys(example1));