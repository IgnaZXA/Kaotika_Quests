export const quests = [
  {
    "quest": {
      "id": "QST-0001",
      "title": "The Siege of Blackthorn Keep",
      "description": "The fortress of Blackthorn Keep groans under the shadow of the Wyrmking.",
      "isActive": true,
      "levelRequirement": 15,
      "rewards": {
        "gold": 1250,
        "experience": 4800,
        "items": [
          { "id": "itm-0012", "name": "Runeblade of Dawn", "type": "sword", "isUnique": true },
          { "id": "itm-0034", "name": "Potion of Emberheart", "type": "consumable", "quantity": 2 }
        ]
      },
      "objectives": [
        { "id": "obj-01", "description": "Speak with Captain Elric", "completed": false },
        { "id": "obj-02", "description": "Defeat Orc Marauders at Blackthorn Field", "completed": false },
        { "id": "obj-03", "description": "Confront the Wyrmking", "completed": false }
      ],
      "location": { "zone": "Blackthorn Vale", "coordinates": { "x": 304, "y": 512 } }
    }
  },
  {
    "quest": {
      "id": "QST-0002",
      "title": "Echoes of the Fallen Monastery",
      "description": "An ancient monastery lies in ruins, haunted by monks who defied the gods.",
      "isActive": true,
      "levelRequirement": 12,
      "rewards": {
        "gold": 900,
        "experience": 3600,
        "items": [
          { "id": "itm-0040", "name": "Scroll of Silent Prayer", "type": "scroll" },
          { "id": "itm-0042", "name": "Relic Fragment", "type": "quest_item" }
        ]
      },
      "objectives": [
        { "id": "obj-01", "description": "Cleanse the outer chapel", "completed": false },
        { "id": "obj-02", "description": "Banish the Abbot’s spirit", "completed": false }
      ],
      "location": { "zone": "Ashen Highlands", "coordinates": { "x": 211, "y": 134 } }
    }
  },
  {
    "quest": {
      "id": "QST-0003",
      "title": "The Hunt for the Ironfang Alpha",
      "description": "The Ironfang wolves terrorize villages. Their Alpha must fall.",
      "isActive": false,
      "levelRequirement": 10,
      "rewards": {
        "gold": 650,
        "experience": 2700,
        "items": [{ "id": "itm-0055", "name": "Alpha’s Fang", "type": "dagger", "isUnique": true }]
      },
      "objectives": [
        { "id": "obj-01", "description": "Track the wolf pack through Frostpine Forest", "completed": true },
        { "id": "obj-02", "description": "Defeat the Ironfang Alpha", "completed": false }
      ],
      "location": { "zone": "Frostpine Forest", "coordinates": { "x": 77, "y": 333 } }
    }
  },
  {
    "quest": {
      "id": "QST-0004",
      "title": "Shadows Over Silverport",
      "description": "Smugglers and cultists conspire beneath the merchant city of Silverport.",
      "isActive": true,
      "levelRequirement": 14,
      "rewards": {
        "gold": 1400,
        "experience": 5000,
        "items": [
          { "id": "itm-0060", "name": "Cloak of the Hidden Dagger", "type": "armor" }
        ]
      },
      "objectives": [
        { "id": "obj-01", "description": "Uncover the smuggler’s network", "completed": false },
        { "id": "obj-02", "description": "Defeat the cult leader in the catacombs", "completed": false }
      ],
      "location": { "zone": "Silverport", "coordinates": { "x": 504, "y": 201 } }
    }
  },
  {
    "quest": {
      "id": "QST-0005",
      "title": "The Curse of Emberpeak",
      "description": "A volcano has awakened, spewing forth fire elementals bound by a curse.",
      "isActive": false,
      "levelRequirement": 18,
      "rewards": {
        "gold": 2200,
        "experience": 8200,
        "items": [
          { "id": "itm-0075", "name": "Emberpeak Core", "type": "artifact" }
        ]
      },
      "objectives": [
        { "id": "obj-01", "description": "Survive the lava floods", "completed": true },
        { "id": "obj-02", "description": "Destroy the cursed firelord", "completed": false }
      ],
      "location": { "zone": "Emberpeak Crater", "coordinates": { "x": 612, "y": 478 } }
    }
  },
  {
    "quest": {
      "id": "QST-0006",
      "title": "The Whispering Grove",
      "description": "The trees whisper madness. Spirits devour the minds of trespassers.",
      "isActive": true,
      "levelRequirement": 11,
      "rewards": {
        "gold": 780,
        "experience": 3100,
        "items": [
          { "id": "itm-0080", "name": "Amulet of Verdant Echo", "type": "amulet" }
        ]
      },
      "objectives": [
        { "id": "obj-01", "description": "Rescue the missing rangers", "completed": false },
        { "id": "obj-02", "description": "Cleanse the Heart Tree", "completed": false }
      ],
      "location": { "zone": "Whispering Grove", "coordinates": { "x": 144, "y": 290 } }
    }
  },
  {
    "quest": {
      "id": "QST-0007",
      "title": "Chains of the Forgotten King",
      "description": "The long-dead King Malrik rises, bound in chains of cursed steel.",
      "isActive": true,
      "levelRequirement": 20,
      "rewards": {
        "gold": 2500,
        "experience": 9000,
        "items": [
          { "id": "itm-0095", "name": "Crown of Rust", "type": "helm", "isUnique": true }
        ]
      },
      "objectives": [
        { "id": "obj-01", "description": "Shatter the cursed chains", "completed": false },
        { "id": "obj-02", "description": "Defeat King Malrik", "completed": false }
      ],
      "location": { "zone": "Forgotten Catacombs", "coordinates": { "x": 403, "y": 654 } }
    }
  },
  {
    "quest": {
      "id": "QST-0008",
      "title": "The Drowned Cathedral",
      "description": "Beneath the waves lies a cathedral where sirens guard forbidden relics.",
      "isActive": false,
      "levelRequirement": 17,
      "rewards": {
        "gold": 1800,
        "experience": 7600,
        "items": [
          { "id": "itm-0101", "name": "Trident of the Abyss", "type": "weapon", "isUnique": true }
        ]
      },
      "objectives": [
        { "id": "obj-01", "description": "Navigate the sunken tunnels", "completed": true },
        { "id": "obj-02", "description": "Defeat the Siren Queen", "completed": false }
      ],
      "location": { "zone": "Drowned Bay", "coordinates": { "x": 812, "y": 97 } }
    }
  }
]
