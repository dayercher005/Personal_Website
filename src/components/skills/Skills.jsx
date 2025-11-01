import Panel from './Panel.jsx'
import PanelContent from './PanelContent.jsx'
import { useState } from 'react'

import ProgrammingLanguage from '/src/assets/ProgrammingLanguage.svg'
import Frontend from '/src/assets/Frontend.svg'
import Backend from '/src/assets/Backend.svg'
import Tools from '/src/assets/Tools.svg'

export default function Skills() {

    const [activeIndex, setActiveIndex] = useState(0)

    return(
        <div id="Skills" className="xl:w-5/10 w-8/10 xl:min-w-280 mx-auto pb-60 max-lg:text-center">
            <h1 className="inline-block text-3xl font-bold mb-15 border-b-5 border-b-blue-400 max-lg:">Skills</h1>

            <div className="xl:block sm:flex max-xl:gap-4">
                <div className="4xl:flex xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:justify-evenly max-xl:justify-center max-sm:text-center rounded-2xl bg-slate-200 py-5 xl:mx-auto mb-5">
                    <Panel title="Programming Languages" imageURL={ProgrammingLanguage} isActive = {() => setActiveIndex(0)} ></Panel>
                    <Panel title="Frontend Development" imageURL={Frontend} isActive = {() => setActiveIndex(1)}></Panel>
                    <Panel title="Backend Development" imageURL={Backend} isActive = {() => setActiveIndex(2)}></Panel>
                    <Panel title="Tools" imageURL={Tools} isActive = {() => setActiveIndex(3)}></Panel>
                </div>
                <div className="bg-stone-300 py-20 xl:mx-auto rounded-4xl min-h-100 flex-grow">
                    <PanelContent currentIndex = {activeIndex}></PanelContent>
                </div>
            </div>
        </div>
    )
}