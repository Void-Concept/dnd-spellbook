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
    defaultPrepared?: boolean
}

interface SpellComponentProps {
    spell: Spell

    prepared?: boolean
    onPrepare?: (spell: Spell) => void

    concentrating?: boolean
    onConcentrate?: (spell: Spell) => void
}

interface ConcentrationIconProps {
    className?: string
    size?: number | string
}

const ConcentrationIcon = ({ size, className }: ConcentrationIconProps) => {
    return (
        <div className={className} title="Concentration">
            <ThoughtBubbleIcon size={size} />
        </div>
    );
}

interface RitualIconProps {
    className?: string
    size?: number | string
}

const RitualIcon = ({ size, className }: RitualIconProps) => {
    return (
        <div className={className} title="Ritual">
            <BookOpenPageVariantIcon size={size} />
        </div>
    );
}

export const SpellComponent = ({ spell, prepared, concentrating, onPrepare, onConcentrate }: SpellComponentProps) => {
    const infoIconSize = "16px";
    const statsIconSize = "16px";

    const [showDescription, setShowDescription] = useState(false);

    // const [prepared, setPrepared] = useState(spell.level === "Cantrip" || spell.defaultPrepared);

    // const [concentrating, setConcentrating] = useState(false);

    const onSpellClick = () => {
        setShowDescription(!showDescription);
    }
    return (
        <div>
            <div className="spell" onClick={onSpellClick}>
                <div className="spell-info">
                    <span className="spell-name">{spell.name}</span>
                    <span className="spell-school">{spell.school}</span>
                    <span className="spell-level">
                        {spell.concentration ? <ConcentrationIcon size={infoIconSize} className="spell-info-icon" /> : null}
                        {spell.ritual ? <RitualIcon size={infoIconSize} className="spell-info-icon" /> : null}
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
            <div className="spell-buttons">
                <button className={`spell-button ${prepared && "spell-button-selected"}`}
                    onClick={() => {
                        onPrepare && onPrepare(spell);
                        // setPrepared(!prepared);
                    }}>
                    Prepare
                </button>
                {spell.concentration && (
                    <button className={`spell-button ${concentrating && "spell-button-selected"}`}
                        onClick={() => {
                            const newConcentrate = !concentrating
                            // setConcentrating(newConcentrate)
                            onConcentrate && onConcentrate(spell)
                        }}>
                        Concentrate
                    </button>
                )}
            </div>
        </div>
    );
};
