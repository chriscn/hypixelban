# hypixelban
A lightweight package that gets information about the unofficial hypixel ban api.
## Installing
`npm install hypixelban`
## Usage
To get started you will need 2 or 3 things depending on whether or not you have 2FA enabled on your hypixel account.
1. Go to [this page](https://hypixel.net/api/account) and open the Chrome Developer Window. Head to the **Application** tab.
2. On the left hand side head till you see **Cookies**; open that panel and the **hypixel.net** one that follows. You should then see 2 or 3 cookies `xfNew_session`, `xfNew_user` and if you have 2FA enabled `xfNew_tfa_trust`. 
3. With those three values, construct a string like this `xfNew_session=abcdef;xfNew_tfa_trust=abcdef;xfNew_user=abcdef` - replacing abcdef with your values from earlier.
4. Use `hypixelban.login()` with that String.
## Methods
#### `fetchPunishment.ban(id, playeruuid, callback)` - Gets ban information about a specific punishment.
The ID is the ban ID, and playeruuid is the uuid of the player with the punishment.  
```js
hypixelban.fetchPunishment.ban('8031B57D', '2bd003af4e1c4883a7015c0f914e3224', (err, res) => {
   if (err) console.error(err);
   console.log(res);
   /*
   { id: '5b9686cf8b6cafe08031b57d',
     partialId: '8031B57D',
     uuid: '2bd003af4e1c4883a7015c0f914e3224',
     type: 0,
     tags: [ 'FI' ],
     date: 1536591567388,
     reason: 'Account Security Alert',
     subType: 'COMPROMISED_ACCOUNT',
     punishment_type: 'ban' }
    */
});
```
The `id` can be either the partial or full ID.
#### `fetchPunishment.mute(id, playeruuid, callback)` - Gets mute information about a specific punishment.
Works in the exact same way as ban.
