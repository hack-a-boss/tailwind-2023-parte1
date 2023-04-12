import { TeamCard } from "./TeamCard";

export const Team = ({ team }) => {
  return (
    <section className="grow p-4 bg-orange-300">
      <ul>
        {team.map((person) => (
          <li key={person.id} className="mb-4 drop-shadow-lg">
            <TeamCard person={person} />
          </li>
        ))}
      </ul>
    </section>
  );
};
