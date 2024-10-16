# syth-webserver-rpgapi

Express Route fuer: https://github.com/Istani/syth-webserver

## Aktuelle Schnittstelle:

http://[Server Adresse]:5000/rpg/api/[Channel ID]/

### /characters
```json
[
  {
    "owner": "2",
    "id": "24232085",
    "hp": 209,
    "hp_max": 209,
    "atk": 14,
    "threat": 28,
    "displayname": "Istani",
    "total_dmg": 28,
    "cooldown": "2024-10-02T19:48:46+02:00"
  }
]
```

### /monsters
```json
[
  {
    "owner": "2",
    "name": "Dark Istani",
    "hp": 9,
    "hp_max": 100,
    "atk": 0,
    "counter_attacks": 0,
    "hp_cap": 328,
    "dmg_cap": 30,
    "death_cooldown": "0",
    "picture": "https://static-cdn.jtvnw.net/jtv_user_pictures/46afe3ea-eca5-493a-beaf-8bdedfbe7584-profile_image-300x300.jpg"
  }
]
```

### /logs
```json
[
  {
    "owner": "2",
    "id": "1727808315022",
    "service": "twitch",
    "display_text": ":space_invader: Ein wildes \u003Cspan class='username'\u003EDark Istani\u003C/span\u003E erscheint! (\u003Cspan class='special'\u003E100\u003C/span\u003E HP)",
    "created_at": "2024-10-01T18:45:00.000Z",
    "updated_at": "0000-00-00 00:00:00"
  }
]
```

### /inventories
```json
[
  {
    "id": 7,
    "owner": "2",
    "char_id": "24232085",
    "item_name": "Heilkraut"
  },
  {
    "id": 8,
    "owner": "2",
    "char_id": "24232085",
    "item_name": "Heilkraut"
  }
]

``` 

### /items
```json
[
  {
    "icon": ":herb:",
    "name": "Heilkraut",
    "heal": 20
  }
]

``` 