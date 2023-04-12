export const TeamCard = ({ person }) => {
  return (
    <article className="bg-white">
      <header className="p-4 flex flex-col items-center">
        <img src={`/${person.image}`} alt={person.name} className="w-32 mb-4" />
        <h2 className="font-bold text-2xl">{person.name}</h2>
        <p className="text-xl font-bold">{person.title}</p>
      </header>
      <p className="p-4 text-white bg-purple-600">{person.cv}</p>
    </article>
  );
};
