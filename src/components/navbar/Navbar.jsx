import Title from "./Title.jsx";

export default function Navbar() {
  const portfolioName = "Dayer Cher";

  return (
    <nav className="flex justify-evenly p-5 sticky top-0 backdrop-blur-sm">
      <h1 className="basis-64 font-bold text-3xl">{portfolioName}</h1>

      <div className="flex basis-128 justify-evenly rounded-2xl gap-4">
        <Title name="Home"></Title>
        <Title name="About"></Title>
        <Title name="Projects"></Title>
        <Title name="Skills"></Title>
      </div>
    </nav>
  );
}
