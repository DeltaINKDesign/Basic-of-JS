const personalInformation = {
    firstName: 'Dave',
    lastName: 'Kowalsky',
    city: 'Warsaw',
    zipCode: 123456
};

const {firstName: fn, lastName: ln} = personalInformation;

console.log(`${fn} ${ln}`);