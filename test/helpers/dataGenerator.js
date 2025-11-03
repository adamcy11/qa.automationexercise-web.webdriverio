import { faker } from '@faker-js/faker';


export function buildUser(base = {}) {
  return {
  
    
    name: base.name ?? faker.person.firstName(),
    email: base.email ?? faker.internet.email({ provider: 'test.com' }),
    password: base.password ?? 'Senha@123',

   
    title: base.title ?? 'Mr',
    birthDay: base.birthDay ?? faker.number.int({ min: 1, max: 28 }),
    birthMonth: base.birthMonth ?? 'May',              
    birthYear: base.birthYear ?? faker.number.int({ min: 1985, max: 2005 }),

    
    newsletter: base.newsletter ?? true,
    optin: base.optin ?? true,

    
    firstName: base.firstName ?? faker.person.firstName(),
    lastName:  base.lastName  ?? faker.person.lastName(),
    company:   base.company   ?? faker.company.name(),
    address1:  base.address1  ?? faker.location.streetAddress(),
    address2:  base.address2  ?? 'Andress 2',
    country:   base.country   ?? 'Canada',
    state:     base.state     ?? 'ON',
    city:      base.city      ?? 'Toronto',
    zipcode:   base.zipcode   ?? '323575',
    mobile:    base.mobile    ?? faker.phone.number('119########')
  };
}