interface User {
  login: string;
  password: string;
}

// We can assign type for arguments and return values of functions
function login(user: User): boolean {
  if (user.login === "admin" && user.password === "admin") {
    return true;
  }

  return false;
};

// For arrow functions
interface Mail {
  email: string;
  isSubscribed: boolean;
}
const filterMailsForMailing = (mails: Mail[]): Mail[] => {
  return mails.filter(mail => mail.isSubscribed);
}  

// Overload signatures
function askStudent(name: "Alex"|"Jill", question: string[]): void
function askStudent(name: "Luisa"|"Max", question: { question: string; answer: string} ): string

function askStudent(name: ("Alex"|"Jill")|("Luisa"|"Max"), question: string[]|{ question: string; answer: string} ): void|string {
  if ((name === "Luisa" || name === "Max") && !Array.isArray(question)) {
    return question.question;
  }

  console.log(question)
}

askStudent("Alex", ["How old is the Earth?"])
askStudent("Luisa", {question: "What is the name of the galaxy, where is the earth?", answer: "Milky Way"})
