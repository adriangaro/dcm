export const MODULE_NAME = "dnd5e-content-manager"
export const MODULE_LABEL = "DnD Content Manager"

export const SETTINGS = {

    itemtypes: [
        "class",
        "subclass",
        "race",
        "background",
        "feat",
        "spelllist"
    ],

    spelllist: {
        label: "Spell Lists",
        icon: "systems/dnd5e/icons/svg/items/spell.svg",
        sources: "spellListSources",
        content: "spellLists",
        enabled: "filterSpellLists",
        type: "JournalEntry",
        subtype: "spells",
        groups: [
            {groupLabel: "Module", valuePath: "module", itemLabelPath: "moduleName"},
            {groupLabel: "Compendium", valuePath: "compendium", itemLabelPath: "compendiumName"},
            {groupLabel: "Journal", valuePath: "source", itemLabelPath: "sourceName"},
            {groupLabel: "Class", valuePath: "metadata"},
        ]
    },

    class: {
        label: "Classes",
        icon: "systems/dnd5e/icons/svg/items/class.svg",
        sources: "classSources",
        content: "classes",
        enabled: "filterClasses",
        type: "Item",
        subtype: "class",
        compendium: `${MODULE_NAME}-classes`,
        groups: [
            {groupLabel: "Module", valuePath: "module", itemLabelPath: "moduleName"},
            {groupLabel: "Compendium", valuePath: "compendium", itemLabelPath: "compendiumName"},
            {groupLabel: "Source", valuePath: "source", itemLabelPath: "sourceName"}
        ]
    },

    subclass: {
        label: "Subclasses",
        icon: "systems/dnd5e/icons/svg/items/subclass.svg",
        sources: "subclassSources",
        content: "subclasses",
        enabled: "filtersubClasses",
        type: "Item",
        subtype: "subclass",
        compendium: `${MODULE_NAME}-subclasses`,
        groups: [
            {groupLabel: "Module", valuePath: "module", itemLabelPath: "moduleName"},
            {groupLabel: "Compendium", valuePath: "compendium", itemLabelPath: "compendiumName"},
            {groupLabel: "Source", valuePath: "source", itemLabelPath: "sourceName"},
            {groupLabel: "Class", valuePath: "metadata"},
        ]
    },

    feat: {
        label: "Feats",
        icon: "systems/dnd5e/icons/svg/items/feature.svg",
        sources: "featSources",
        content: "feats",
        enabled: "filterFeats",
        type: "Item",
        subtype: "feature",
        compendium: `${MODULE_NAME}-feats`,
        groups: [
            {groupLabel: "Module", valuePath: "module", itemLabelPath: "moduleName"},
            {groupLabel: "Compendium", valuePath: "compendium", itemLabelPath: "compendiumName"},
            {groupLabel: "Source", valuePath: "source", itemLabelPath: "sourceName"},
            {groupLabel: "Feat Type", valuePath: "metadata"},
        ]
        
    },

    race: {
        label: "Species",
        icon: "systems/dnd5e/icons/svg/items/race.svg",
        sources: "speciesSources",
        content: "species",
        enabled: "filterSpecies",
        type: "Item",
        subtype: "race",
        compendium: `${MODULE_NAME}-species`,
        groups: [
            {groupLabel: "Module", valuePath: "module", itemLabelPath: "moduleName"},
            {groupLabel: "Compendium", valuePath: "compendium", itemLabelPath: "compendiumName"},
            {groupLabel: "Source", valuePath: "source", itemLabelPath: "sourceName"}
        ]
    },

    background: {
        label: "Backgrounds",
        icon: "systems/dnd5e/icons/svg/items/background.svg",
        sources: "backgroundSources",
        content: "backgrounds",
        enabled: "filterBackgrounds",
        type: "Item",
        subtype: "background",
        compendium: `${MODULE_NAME}-backgrounds`,
        groups: [
            {groupLabel: "Module", valuePath: "module", itemLabelPath: "moduleName"},
            {groupLabel: "Compendium", valuePath: "compendium", itemLabelPath: "compendiumName"},
            {groupLabel: "Source", valuePath: "source", itemLabelPath: "sourceName"}
        ]
    },

    lastLoadedVersion: "lastLoadedVersion"
}