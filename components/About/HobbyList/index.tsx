import Hobby from "../Hobby";

export default function HobbyList() {
  return (
    <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 pb-16 pt-5">
      <Hobby title="Cinéma" icon="movie" theme="dark">
        <p className="text-md text-gray-200 py-4">
          Depuis la réouverture des cinémas après le confinement, je vais 2 à 3
          fois au ciné par mois. Vous avez vu le dernier{" "}
          <a
            href="https://www.youtube.com/watch?v=hWRSJlp50rQ"
            target="_blank"
            rel="noreferrer"
            className="underline font-bold text-white hover:text-purple-400"
          >
            The Batman
          </a>{" "}
          ? Wow, il était incroyable ! 🤩
        </p>
      </Hobby>

      <Hobby title="Informatique" icon="info" theme="light" alignCenter>
        <p className="text-md text--gray-800 py-4">
          Passionné depuis le collège, je me suis vite autoformé puis inscrit
          pour un master expert informatique pour enfin en faire mon{" "}
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
            className="underline font-bold text-black hover:text-purple-400"
          >
            métier
          </a>
          . 🤭
        </p>
      </Hobby>

      <Hobby title="Jeux vidéos" icon="video-games" theme="purple">
        <p className="text-md  text-gray-800 py-4">
          Je suis bon public, que ce soit en solo ou en multi, jeux indés ou
          triple A, je peux y passer pas mal d&#39;heures dessus. Préférence
          pour les{" "}
          <a
            href="https://www.youtube.com/watch?v=jPlWnCE4Edo"
            target="_blank"
            rel="noreferrer"
            className="underline font-bold text-black hover:text-purple-900"
          >
            Dark Souls
          </a>
          . 😏
        </p>
      </Hobby>
    </div>
  );
}
