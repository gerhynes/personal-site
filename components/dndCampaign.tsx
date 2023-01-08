import Image from "next/image";

function DndCampaign() {
  return (
    <article className="rounded-lg border-2 border-gray-200">
      <Image
        src="/images/dnd/wild-beyond-the-witchlight.jpg"
        alt="The Wild Beyond the Witchlight"
        width={600}
        height={314}
        className="rounded-tl-lg rounded-tr-lg"
      />
      <div className="p-4">
        <div className="mb-4">
          <h3 className="mb-2 font-serif text-2xl font-bold">
            The Wild Beyond the Witchlight
          </h3>
          <p className="text-slate-500">Session ???</p>
        </div>
        <div className="">
          <h3 className="mb-2 font-serif text-xl font-bold">Character</h3>
          <p>
            <a href="https://www.dndbeyond.com/characters/63271024">
              Njal Bergþórasson
            </a>
          </p>
          <p className="text-slate-500">Paladin (Oath of Devotion)</p>
          <p className="text-slate-500">Male Half-Orc</p>
          <p className="">Level 4</p>
        </div>
      </div>
    </article>
  );
}
export default DndCampaign;
