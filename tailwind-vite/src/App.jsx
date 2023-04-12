import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Team } from "./components/Team";

export const App = () => {
  const team = [
    {
      id: "ronnie",
      image: "ronnie.jpg",
      name: "Ronnie Gregory",
      title: "CMO",
      cv: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque fuga itaque delectus consequatur molestias suscipit assumenda, eaque eum est accusantium atque esse ipsam dolore quasi earum, nostrum at excepturi.",
    },
    {
      id: "margie",
      image: "margie.jpg",
      name: "Margie Watson",
      title: "CTO",
      cv: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque fuga itaque delectus consequatur molestias suscipit assumenda, eaque eum est accusantium atque esse ipsam dolore quasi earum, nostrum at excepturi.",
    },
    {
      id: "laura",
      image: "laura.jpg",
      name: "Laura Finney",
      title: "CFO",
      cv: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque fuga itaque delectus consequatur molestias suscipit assumenda, eaque eum est accusantium atque esse ipsam dolore quasi earum, nostrum at excepturi.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <Team team={team} />

      <Footer />
    </main>
  );
};
