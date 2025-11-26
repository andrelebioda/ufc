export const getFighterData = async (id: string) => {
  const res = await fetch(`${process.env.BASE_URI}/fighters/get/fighterBy/${id}`);
  return res.json();
};

const fighterDetail = async ({ params }: { params: any }) => {
  const { id } = await params;

  const { name, nickname, nationality, age, weightClass, wins, losses, draws, koWins, submissionWins, height, reach } = await getFighterData(id);

  return <div>{name}</div>;
};

export default fighterDetail;
