export default function Title({ name }) {
  const LinkReference = "#" + name;

  return (
    <a
      href={LinkReference}
      className="hover:scale-105 flex items-center text-xl font-medium px-5 rounded-2xl hover:bg-gray-300 transition transition-300"
    >
      {name}
    </a>
  );
}
