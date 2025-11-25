import Image from "next/image";

export const FighterDetailCard = ({ fighter }: { fighter: any }) => {
  const { name, nickname, nationality, age, weightClass, wins, losses, draws, koWins, submissionWins, height, reach } = fighter;

  return (
    <div className="p-4 rounded-2xl bg-white/7 border border-[#ffffff36]">
      <span className="py-1 px-3 bg-gray-700 text-white text-xs rounded-2xl mb-2 inline-block">{weightClass}</span>
      <h1 className="font-bold text-[18px] sm:text-[28px]">{name}</h1>
      <span>aka: {nickname == null || nickname === "" ? "-" : nickname}</span>
      <div className="relative w-full h-96 mt-5 mb-5 border-b border-[#ffffff36]">
        <Image
          src={"https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/7/MAKHACHEV_ISLAM_L_BELT_01-18.png?itok=DyL2OO9I"}
          alt={name}
          fill={true}
          className="object-contain"
        />
      </div>

      <ul>
        <li className="pb-1.5">
          <span className="font-bold">Nationality: </span>
          {nationality}
        </li>
        <li className="pb-1.5">
          <span className="font-bold">Age: </span>
          {age}
        </li>
        <li className="pb-1.5">
          <span className="font-bold">Height: </span>
          {height}
        </li>
        <li className="pb-1.5">
          <span className="font-bold">Reach: </span>
          {reach}
        </li>

        <li className="pb-1.5">
          <span className="font-bold">Record (W-L-D): </span>
          {wins}-{losses}-{draws}
        </li>
        <li className="pb-1.5">
          <span className="font-bold">KO Wins: </span>
          {koWins}
        </li>
        <li className="pb-1.5">
          <span className="font-bold">Submission Wins: </span>
          {submissionWins}
        </li>
      </ul>
    </div>
  );
};
