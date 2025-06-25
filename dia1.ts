interface User {
  readonly id: number;
  name: string;
  role: "admin" | "user";
}

const useres: User[] = [
  { id: 1, name: "Ryan", role: "admin" },
  { id: 2, name: "Lara", role: "admin" },
  { id: 3, name: "Jose", role: "user" },
];

function getAdmin(useres: User[]): User[] {
  // const filter = useres.filter(useres.role === "admin");
  //   const filter = useres.filter((user) => user.role === "admin");
  return useres.filter((user) => user.role === "admin");
}

getAdmin(useres);
