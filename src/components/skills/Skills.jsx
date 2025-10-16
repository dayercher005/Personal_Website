import Panel from './Panel.jsx'
import PanelContent from './PanelContent.jsx'
import { useState } from 'react'

export default function Skills() {

    const [activeIndex, setActiveIndex] = useState(0)

    return(
        <div>
            <h1 className="inline-block text-3xl font-bold ml-135 mb-15 border-b-5 border-b-blue-400">Skills</h1>

            <div>
                <div className="flex justify-evenly rounded-2xl bg-slate-200 py-3 w-1/2 mx-auto mb-20">
                    <Panel title="Programming Languages" isActive = {() => setActiveIndex(0)} ></Panel>
                    <Panel title="Frontend Development" isActive = {() => setActiveIndex(1)}></Panel>
                    <Panel title="Backend Development" isActive = {() => setActiveIndex(2)}></Panel>
                    <Panel title="Tools" isActive = {() => setActiveIndex(3)}></Panel>
                </div>
                <div>
                    <PanelContent currentIndex = {activeIndex}></PanelContent>
                </div>
            </div>
        </div>
    )
}