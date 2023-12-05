let username: string = "John Doe";

console.log(username);

// export {};

interface Person {
  name: string;
  getDetails(): string;
}

class Student implements Person {
  name: string;

  getDetails(): string {
    return "";
  }
}
