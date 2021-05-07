class Character {
    constructor(name, charClass) {
        this.name = name;
        this.charClass = charClass;
    }

    describe() {
        return `Characters Name: ${this.name} \nCharacters Class: ${charClass}`
    }
}

class Guild {
    constructor(name) {
        this.name = name;
        this.characters = [];
    }

    addCharacter(character) {
        if (character instanceof Character) {
            this.characters.push(character);
        } else {
            throw new Error(`You can only add an instance of a Character. Argument is not a character: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.characters.length} characters.`;
    }
}

class Menu {
    constructor() {
        this.guilds = [];
        this.selectedGuild = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createGuild();
                    break;
                case '2':
                    this.viewGuild();
                    break;
                case '3':
                    this.deleteGuild();
                    break;
                case '4':
                    this.displayGuilds();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodby!')
    }

    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create New Guild
        2) View Guild
        3) Delete Guild
        4) Display All Guilds
        `);
    }

    showGuildMenuOptions(guildInfo) {
        return prompt(`
        0) Back
        1) Create Character
        2) Delete Character
        -----------------------------
        ${guildInfo}
        `);
    }

    displayGuilds() {
        let guildString = '';
        for (let i = 0; i < this.guilds.length; i++) {
            guildString += i + ') ' + this.guilds[i].name + '\n';
        }
        alert(guildString);
    }

    createGuild() {
        let name = prompt('Type in your Guilds name: ')
        this.guilds.push(new Guild(name));
    }

    viewGuild() {
        let index = prompt('Enter the index of the Guild you wish to view: ')
        if (index > -1 && index < this.guilds.length) {
            this.selectedGuild = this.guilds[index];
            let description = 'Guild Name: ' + this.selectedGuild.name + '\n';

            for (let i = 0; i < this.selectedGuild.characters.length; i++) {
                description += i + ') ' + this.selectedGuild.characters[i].name + ' - ' + this.selectedGuild.characters[i].charClass + '\n';
            }

            let selection = this.showGuildMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createCharacter();
                    break;
                case '2':
                    this.deleteCharacter();
            }
        }
    }

    deleteGuild() {
        let index = prompt('Enter the index of the Guild you wish to delete: ');
        if (index > -1 && index < this.guilds.length) {
            this.guilds.splice(index, 1);
        }
    }

    createCharacter() {
        let name = prompt('Enter the name of the Character you want to add to the Guild: ');
        let charClass = prompt('Enter the characters class: ');
        this.selectedGuild.characters.push(new Character(name, charClass));
    }

    deleteCharacter() {
        let index = prompt('Enter the index of the character you wish to delete: ');
        if (index > -1 && index < this.selectedGuild.characters.length) {
            this.selectedGuild.characters.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();