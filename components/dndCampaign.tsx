import Image from "next/image";

type campaignProps = {
  campaign: {
    name: string;
    imageUrl: string;
    session: number;
    character: {
      name: string;
      class: string;
      race: string;
      gender: string;
      level: number;
    };
    dm: boolean;
  };
};

function DndCampaign({ campaign }: campaignProps) {
  const { name, imageUrl, session, character } = campaign;
  return (
    <article className="rounded-lg border-2 border-gray-200">
      <Image
        src={imageUrl}
        alt={name}
        width={600}
        height={314}
        className="rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-4">
        <div className="mb-4">
          <h3 className="mb-2 font-serif text-2xl font-bold">{name}</h3>
          <p className="text-slate-500">Session {session}</p>
        </div>
        <div className="">
          <h3 className="mb-2 font-serif text-xl font-bold">Character</h3>
          <p>
            <a href="https://www.dndbeyond.com/characters/63271024">
              {character.name}
            </a>
          </p>
          <p className="text-slate-500">{character.class}</p>
          <p className="text-slate-500">
            {character.gender} {character.race}
          </p>
          <p className="">Level {character.level}</p>
        </div>
      </div>
    </article>
  );
}

export default DndCampaign;
