import HTML from '/public/HTML.svg'
import CSS from '/public/CSS.svg'
import Javascript from '/public/Javascript.svg'
import Python from '/public/Python.svg'
import Tailwind from '/public/Tailwind.svg'
import React from '/public/React.svg'
import NodeJS from '/public/NodeJS.svg'
import Webpack from '/public/Webpack.svg'
import Vite from '/public/Vite.svg'
import Git from '/public/Git.svg'

export default function PanelContent({currentIndex}) {

    const ProgrammingLanguages = [
        {name: 'HTML', image: HTML},
        {name: 'CSS', image: CSS},
        {name: 'Javascript', image: Javascript},
        {name: 'Python', image: Python}
    ]

    const Frontend = [
        {name: 'Tailwind', image: Tailwind},
        {name: 'React', image: React}
    ]

    const Backend = [
        {name: 'NodeJS', image: NodeJS}
    ]

    const Tools = [
        {name: 'Webpack', image: Webpack},
        {name: 'Vite', image: Vite},
        {name: 'Git', image: Git}
    ]

    const ProgrammingLanguageIndividualContent = ProgrammingLanguages.map(language => 
        <div className = "flex rounded-xl bg-gray-200 p-3 middle-align gap-2 hover:scale-105 border-4 border-gray-200 hover:border-red-400 hover:shadow-2xl transition">
            <img className = "size-10" src={language.image}/>
            <p className = "text-xl font-medium my-auto">{language.name}</p>
        </div>
    )

    const FrontendIndividualContent = Frontend.map(framework => 
        <div className="flex rounded-xl bg-gray-200 p-3 middle-align gap-2 hover:scale-105 border-4 border-gray-200 hover:border-red-400 hover:shadow-2xl transition">
            <img className = "size-10" src={framework.image}/>
            <p className = "text-xl font-medium my-auto">{framework.name}</p>
        </div>
    )

    const BackendIndividualContent = Backend.map(framework => 
        <div className="flex rounded-xl bg-gray-200 p-3 middle-align gap-2 hover:scale-105 border-4 border-gray-200 hover:border-red-400 hover:shadow-2xl transition">
            <img className = "size-10" src={framework.image}></img>
            <p className = "text-xl font-medium my-auto">{framework.name}</p>
        </div>
    )

    const ToolsIndividualContent = Tools.map(tools => 
        <div className="flex rounded-xl bg-gray-200 p-3 middle-align gap-2 hover:scale-105 border-4 border-gray-200 hover:border-red-400 hover:shadow-2xl transition">
            <img className = "size-10" src={tools.image}></img>
            <p className = "text-xl font-medium my-auto">{tools.name}</p>
        </div>
    )

    const ProgrammingLanguageContent = (
        <div className="grid grid-cols-3 w-7/10 mx-auto gap-15">
            {ProgrammingLanguageIndividualContent}
        </div>
    )

    const FrontendContent = (
        <div className="grid grid-cols-3 w-7/10 mx-auto gap-15">
            {FrontendIndividualContent}
        </div>
    )

    const BackendContent = (
        <div className="grid grid-cols-3 w-7/10 mx-auto gap-15">
            {BackendIndividualContent}
        </div>
    )

    const ToolsContent = (
        <div className="grid grid-cols-3 w-7/10 mx-auto gap-15">
            {ToolsIndividualContent}
        </div>
    )

    if (currentIndex === 0){
        return (
            ProgrammingLanguageContent
        )
    } else if (currentIndex === 1){
        return (
            FrontendContent
        )
    } else if (currentIndex === 2){
        return (
            BackendContent
        )
    } else if (currentIndex === 3){
        return (
            ToolsContent
        )
    }
    
}