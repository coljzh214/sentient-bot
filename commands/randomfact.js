module.exports = {
    name = 'randomfact',
    description = '',
    execute(message, args) {
        const num = Math.floor(Math.random() * 10);
        switch(num) {
            case 0:
                message.channel.send('Did you know that Tohsaka Rin is the number one ranked waifu in the history of mankind?')
                break;
            case 1:
                message.channel.send('As of May 2018, there are over 130 million unique Discord users!');
                break;
            case 2:
                message.channel.send('The last emperor of China ruled until 1911!');
                break;
            case 3:
                message.channel.send('I am in love in Donald Trump\'s ratchet orange skin.');
                break;
            case 4:
                message.channel.send('The \'Squrriels of UBC \' page has more likes than any other university animal-themed page in the country');
                break;
            case 5:
                message.channel.send('The creator of this bot was born on the year of the tiger.');
                break;
            case 6:
                message.channel.send('Cave Story is one of the best gaming experiences of all time. Don\'t even deny it.');
                break;
            case 7:
                message.channel.send('Conan O\' Brien is currently the greatest late night host.');
                break;
            case 8:
                message.channel.send('Tianjin is one of the four municipalities in China. Facing the Bohai Sea, the city, one time imperial port, serves as Beijing\'s vital gateway to the sea.');
            default:
                message.channel.send('Yuto Kamei went to Japan and he ain\'t coming back');
                break;
        } 
    }
}