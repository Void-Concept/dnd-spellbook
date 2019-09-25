import React from 'react';
import { SpellComponent, Spell } from './Spell';
import "./spellbook.css";

const spells: Spell[] = [{
    name: "Guidance",
    level: "Cantrip",
    school: "Divination",
    castTime: "1 Action",
    components: "V, S",
    description: "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.",
    duration: "1 Minute",
    higherLevel: "",
    range: "60 ft",
    concentration: true,
}];

export const Spellbook = () => {
    return (
        <div className="spellbook">
            {spells.map((spell, index) => {
                return <SpellComponent key={index} spell={spell} />;
            })}
        </div>
    )
}