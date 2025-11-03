import HTML from "/src/assets/HTML.svg";
import CSS from "/src/assets/CSS.svg";
import Javascript from "/src/assets/Javascript.svg";
import Python from "/src/assets/Python.svg";
import Tailwind from "/src/assets/Tailwind.svg";
import ReactIcon from "/src/assets/React.svg";
import NodeJS from "/src/assets/NodeJS.svg";
import Webpack from "/src/assets/Webpack.svg";
import Vite from "/src/assets/Vite.svg";
import Git from "/src/assets/Git.svg";
import React from 'react';


export default function PanelContent({ currentIndex }) {
  const ProgrammingLanguages = [
    { name: "HTML", image: HTML },
    { name: "CSS", image: CSS },
    { name: "Javascript", image: Javascript },
    { name: "Python", image: Python },
  ];

  const Frontend = [
    { name: "Tailwind", image: Tailwind },
    { name: "React", image: ReactIcon },
  ];

  const Backend = [{ name: "NodeJS", image: NodeJS }];

  const Tools = [
    { name: "Webpack", image: Webpack },
    { name: "Vite", image: Vite },
    { name: "Git", image: Git },
  ];

  const ProgrammingLanguageIndividualContent = ProgrammingLanguages.map(
    (language) => (
      <div className="flex rounded-xl bg-gray-200 p-3 middle-align gap-2 hover:scale-105 border-4 border-gray-200 hover:border-red-400 hover:shadow-2xl transition">
        <img className="xl:size-10 max-xl:size-7" src={language.image} />
        <p className="xl:text-xl max-xl:text-md font-medium my-auto">
          {language.name}
        </p>
      </div>
    ),
  );

  const FrontendIndividualContent = Frontend.map((framework) => (
    <div className="flex rounded-xl bg-gray-200 p-3 middle-align gap-2 hover:scale-105 border-4 border-gray-200 hover:border-red-400 hover:shadow-2xl transition">
      <img className="xl:size-10 max-xl:size-7" src={framework.image} />
      <p className="xl:text-xl max-xl:text-md font-medium my-auto">
        {framework.name}
      </p>
    </div>
  ));

  const BackendIndividualContent = Backend.map((framework) => (
    <div className="flex rounded-xl bg-gray-200 p-3 middle-align gap-2 hover:scale-105 border-4 border-gray-200 hover:border-red-400 hover:shadow-2xl transition">
      <img className="xl:size-10 max-xl:size-7" src={framework.image}></img>
      <p className="xl:text-xl max-xl:text-md font-medium my-auto">
        {framework.name}
      </p>
    </div>
  ));

  const ToolsIndividualContent = Tools.map((tools) => (
    <div className="flex rounded-xl bg-gray-200 p-3 middle-align gap-2 hover:scale-105 border-4 border-gray-200 hover:border-red-400 hover:shadow-2xl transition">
      <img className="xl:size-10 max-xl:size-7" src={tools.image}></img>
      <p className="xl:text-xl max-xl:text-md font-medium my-auto">
        {tools.name}
      </p>
    </div>
  ));

  const ProgrammingLanguageContent = (
    <div className="grid 4xl:grid-cols-3 930px:grid-cols-2 4xl:w-7/10 xl:w-8/10 mx-auto max-xl:mx-4 xl:gap-15 max-xl:gap-5">
      {ProgrammingLanguageIndividualContent}
    </div>
  );

  const FrontendContent = (
    <div className="grid 4xl:grid-cols-3 930px:grid-cols-2 4xl:w-7/10 xl:w-8/10 xl:mx-auto max-xl:mx-4 xl:gap-15 max-xl:gap-5">
      {FrontendIndividualContent}
    </div>
  );

  const BackendContent = (
    <div className="grid 4xl:grid-cols-3 930px:grid-cols-2 4xl:w-7/10 xl:w-8/10 mx-auto max-xl:mx-4 xl:gap-15 max-xl:gap-5">
      {BackendIndividualContent}
    </div>
  );

  const ToolsContent = (
    <div className="grid 4xl:grid-cols-3 930px:grid-cols-2 4xl:w-7/10 xl:w-8/10 mx-auto max-xl:mx-4 xl:gap-15 max-xl:gap-5">
      {ToolsIndividualContent}
    </div>
  );

  if (currentIndex === 0) {
    return ProgrammingLanguageContent;
  } else if (currentIndex === 1) {
    return FrontendContent;
  } else if (currentIndex === 2) {
    return BackendContent;
  } else if (currentIndex === 3) {
    return ToolsContent;
  }
}
