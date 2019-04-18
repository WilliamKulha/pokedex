const vulnerabilitiesHash = {};
vulnerabilitiesHash['normal'] = ['fighting'];
vulnerabilitiesHash['fighting'] = ['flying', 'psychic', 'fairy'];
vulnerabilitiesHash['flying'] = ['rock', 'electric', 'ice'];
vulnerabilitiesHash['poison'] = ['ground', 'psychic'];
vulnerabilitiesHash['ground'] = ['water', 'grass', 'ice'];
vulnerabilitiesHash['rock'] = ['fighting', 'steel', 'ground', 'water', 'grass'];
vulnerabilitiesHash['bug'] = ['flying', 'rock', 'fire'];
vulnerabilitiesHash['ghost'] = ['ghost', 'dark'];
vulnerabilitiesHash['steel'] = ['fighting', 'ground', 'fire'];
vulnerabilitiesHash['fire'] = ['ground', 'rock', 'water'];
vulnerabilitiesHash['water'] = ['grass', 'electric'];
vulnerabilitiesHash['grass'] = ['flying', 'poison', 'bug', 'fire', 'ice'];
vulnerabilitiesHash['electric'] = ['ground'];
vulnerabilitiesHash['psychic'] = ['bug', 'ghost', 'dark'];
vulnerabilitiesHash['ice'] = ['fighting', 'rock', 'steel', 'fire'];
vulnerabilitiesHash['dragon'] = ['ice', 'dragon', 'fairy'];
vulnerabilitiesHash['fairy'] = ['poison', 'steel'];
vulnerabilitiesHash['dark'] = ['fighting', 'bug', 'fairy'];


export default vulnerabilitiesHash;