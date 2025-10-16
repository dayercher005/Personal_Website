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
        <div className = "flex rounded-xl bg-gray-200 p-3 middle-align">
            <img className = "size-10" src={language.image}/>
            <p className = "text-xl font-medium">{language.name}</p>
        </div>
    )

    const FrontendContent = Frontend.map(framework => 
        <div className="flex">
            <img src={framework.image}/>
            <p>{framework.name}</p>
        </div>
    )

    const BackendContent = Backend.map(framework => 
        <div className="flex">
            <img src={framework.image}></img>
            <p>{framework.name}</p>
        </div>
    )

    const ToolsContent = Tools.map(tools => 
        <div className="flex">
            <img src={tools.image}></img>
            <p>{tools.name}</p>
        </div>
    )

    const ProgrammingLanguageContent = (
        <div className="grid grid-cols-3 w-1/3 mx-auto gap-15">
            {ProgrammingLanguageIndividualContent}
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