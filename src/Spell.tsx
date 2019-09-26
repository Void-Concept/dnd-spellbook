import React, { useState } from 'react';
import "./spell.css";
import CameraTimerIcon from "mdi-react/CameraTimerIcon";
import BullseyeArrowIcon from "mdi-react/BullseyeArrowIcon";
import TimerSandIcon from "mdi-react/TimerSandIcon";
import FlaskOutlineIcon from "mdi-react/FlaskOutlineIcon";
import ThoughtBubbleIcon from "mdi-react/ThoughtBubbleIcon";
import BookOpenPageVariantIcon from "mdi-react/BookOpenPageVariantIcon";

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
    const infoIconSize = "16px";
    const statsIconSize = "16px";

    const [showDescription, setShowDescription] = useState(false);

    const onSpellClick = () => {
        setShowDescription(!showDescription);
    }

    return (
        <div className="spell" onClick={onSpellClick}>
            <div className="spell-info">
                <span className="spell-name">{spell.name}</span>
                <span className="spell-school">{spell.school}</span>
                <span className="spell-level">
                    {spell.concentration ? <ThoughtBubbleIcon size={infoIconSize} className="spell-info-icon" /> : null}
                    {spell.ritual ? <BookOpenPageVariantIcon size={infoIconSize} className="spell-info-icon" /> : null}
                    {spell.level}
                </span>
            </div>
            <hr />
            <div className="spell-stats">
                <span className="spell-cast-time">
                    <CameraTimerIcon size={statsIconSize} className="spell-stats-icon" />
                    {spell.castTime}
                </span>
                <span className="spell-range">
                    <BullseyeArrowIcon size={statsIconSize} className="spell-stats-icon" />
                    {spell.range}
                </span>
                <span className="spell-components">
                    <FlaskOutlineIcon size={statsIconSize} className="spell-stats-icon" />
                    {spell.components}
                </span>
                <span className="spell-duration">
                    <TimerSandIcon size={statsIconSize} className="spell-stats-icon" />
                    {spell.duration}
                </span>
            </div>
            {showDescription && <>
                <hr />
                <div className="spell-description">
                    {spell.description}
                </div>
            </>}
        </div>
    );
};
