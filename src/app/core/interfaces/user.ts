export interface User {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  address: Address;
  phoneNumber: string;
}

export interface Address {
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
}
