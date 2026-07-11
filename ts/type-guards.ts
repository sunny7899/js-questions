// function isAdmin(user: User | Admin): user is Admin

// type User = {
//   name: string;
// };

// type Admin = {
//   name: string;
//   role: string;
// };

// function print(user: User | Admin) {
//   console.log(user.role);
// }

function log(value: string | number) {
  if (typeof value === "string") {
    value.toUpperCase(); // string
  }
}

function print(user: User | Admin) {
  if ("role" in user) {
    console.log(user.role); // Admin
  }
}

// if (animal instanceof Dog) {
//   animal.bark();
// }

// function isAdmin(user: User | Admin): user is Admin {
//   return "role" in user;
// }

// function print(user: User | Admin) {
//   if (isAdmin(user)) {
//     console.log(user.role); // fully typed Admin // still an error
//   }
// }

function isAdmin(user: User | Admin): boolean {
  return "role" in user;
}

// (user as Admin).role

function assertAdmin(user: User | Admin): asserts user is Admin {
  if (!("role" in user)) {
    throw new Error("Not admin");
  }
}

// assertAdmin(user);
// user.role; // Admin

type User = {
  type: "user";
  name: string;
};

type Admin = {
  type: "admin";
  name: string;
  role: string;
};

// if (person.type === "admin") {
//   person.role; // auto narrowed
// }