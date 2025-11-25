import { FighterDetailCard } from "@/components/FighterDetailCard";

async function getAFighter() {
  const res = await fetch(`${process.env.BASE_URI}/fighters/get/allFighter`);
  return res.json();
}

const Fighter = async () => {
  const fighter = await getAFighter();

  if (fighter == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {fighter.map((f: any) => (
        <FighterDetailCard key={f._id} fighter={f} />
      ))}
    </div>
  );
};

export default Fighter;
