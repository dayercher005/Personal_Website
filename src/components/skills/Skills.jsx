import Panel from './Panel.jsx'
import PanelContent from './PanelContent.jsx'
import { useState } from 'react'

import ProgrammingLanguage from '/public/ProgrammingLanguage.svg'
import Frontend from '/public/Frontend.svg'
import Backend from '/public/Backend.svg'
import Tools from '/public/Tools.svg'

export default function Skills() {

    const [activeIndex, setActiveIndex] = useState(0)

    return(
        <div id="Skills" className="w-5/10 mx-auto pb-60">
            <h1 className="inline-block text-3xl font-bold mb-15 border-b-5 border-b-blue-400">Skills</h1>

            <div>
                <div className="flex justify-evenly rounded-2xl bg-slate-200 py-5 mx-auto mb-5">
                    <Panel title="Programming Languages" imageURL={ProgrammingLanguage} isActive = {() => setActiveIndex(0)} ></Panel>
                    <Panel title="Frontend Development" imageURL={Frontend} isActive = {() => setActiveIndex(1)}></Panel>
                    <Panel title="Backend Development" imageURL={Backend} isActive = {() => setActiveIndex(2)}></Panel>
                    <Panel title="Tools" imageURL={Tools} isActive = {() => setActiveIndex(3)}></Panel>
                </div>
                <div className="bg-stone-300 py-20 mx-auto rounded-4xl min-h-100">
                    <PanelContent currentIndex = {activeIndex}></PanelContent>
                </div>
            </div>
        </div>
    )
}