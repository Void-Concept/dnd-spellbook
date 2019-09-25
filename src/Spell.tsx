import React from 'react';
import "./spell.css";
import CameraTimerIcon from "mdi-react/CameraTimerIcon";
import BullseyeArrowIcon from "mdi-react/BullseyeArrowIcon";
import TimerSandIcon from "mdi-react/TimerSandIcon";
import FlaskOutlineIcon from "mdi-react/FlaskOutlineIcon";

export type SpellLevel = "Cantrip" | "1st" | "2nd" | "3rd" | "4th" | "5th" | "6th" | "7th" | "8th" | "9th"

export type SpellSchool = string //TODO: list schools of magic

export type Spell = {
    name: string
    level: SpellLevel
    school: SpellSchool
    castTime: string
    range: string
    areaOfEffect?: string
    components: string
    materials?: string
    duration: string
    description: string
    higherLevel?: string
    concentration?: boolean
    ritual?: boolean
}

interface SpellProps {
    spell: Spell
}

export const SpellComponent = ({ spell }: SpellProps) => {

    return (
        <div className="spell">
            <div className="spell-info">
                <span className="spell-name">{spell.name}</span>
                <span className="spell-school">{spell.school}</span>
                <span className="spell-level">{spell.level}</span>
            </div>
            <hr />
            <div className="spell-stats">
                <span className="spell-cast-time">
                    <CameraTimerIcon size="12px" /> {spell.castTime}
                </span>
                <span className="spell-range">
                    <BullseyeArrowIcon size="12px" /> {spell.range}
                </span>
                <span className="spell-components">
                    <FlaskOutlineIcon size="12px" /> {spell.components}
                </span>
                <span className="spell-duration">
                    <TimerSandIcon size="12px" /> {spell.duration}
                </span>
            </div>
        </div>
    );
};
