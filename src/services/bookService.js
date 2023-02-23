const Books = [
    {
        id: 1,
        title: 'Sapiens: A Brief History of Humankind',
        description: '**THE MILLION COPY BESTSELLER**\'Interesting and provocative... It gives you a sense of how briefly we\'ve been on this Earth\' Barack Obama What makes us brilliant? What makes us deadly? What makes us Sapiens? Yuval Noah Harari challenges everything we know about being human in the perfect read for these unprecedented times. Earth is 4.5 billion years old. In just a fraction of that time, one species among countless others has conquered it: us. In this bold and provocative book, Yuval Noah Harari explores who we are, how we got here and where we\'re going. \'I would recommend Sapiens to anyone who\'s interested in the history and future of our species\' Bill Gates **ONE OF THE GUARDIAN\'S 100 BEST BOOKS OF THE 21st CENTURY**',
        price: 250
    },
    {
        id: 2,
        title: 'The Code Breaker',
        description: 'The author of Leonardo da Vinci and Steve Jobs returns. In 2012, Nobel Prize winning scientist Jennifer Doudna hit upon an invention that will transform the future of the human race: an easy-to-use tool that can edit DNA. Known as CRISPR, it opened a brave new world of medical miracles and moral questions. It has already been deployed to cure deadly diseases, fight the coronavirus pandemic of 2020, and make inheritable changes in the genes of babies. But what does that mean for humanity Should we be hacking our own DNA to make us less susceptible to disease Should we democratise the technology that would allow parents to enhance their kids After discovering this CRISPR, Doudna is now wrestling these even bigger issues. THE CODE BREAKERS is an examination of how life as we know it is about to change and a brilliant portrayal of the woman leading the way.',
        price: 200
    },
    {
        id: 3,
        title: 'Blink',
        description: 'How can an art expert differentiate between a fake and an original piece of art within seconds? How can a marriage analyst know within minutes whether the couple will stay together or not? Some ideas like this and much more gain a true resolution in Blink: The Power of Thinking Without Thinking by Gladwell. The best selling author dissects and discusses the art of human intuition and elaborates on how humans can, by developing it to perfection, be able to make quick yet accurate and effective decisions. Termed as ‘snap judgements’ in the book, the author elaborates by using situations how ‘snap judgements’ can be more efficient than reasoned ones, which borders on deliberation. However, the book is not just an analysis of ‘snap judgement’; rather the book elaborates its usage in situations that happen on a daily basis for enabling a quick attention to the finer details from among a host of variables. Published by Penguin Publishers, this reprint edition was published on February 23, 2006 and is available in paperback. About the author: A speaker, journalist and a bestselling author, Malcolm Gladwell’s works revolve around academic findings on social psychology, sociology and psychology. His writing technique involves a thorough research and analysis on the subject along with fruitful interpretations. Born in Hampshire, England, his other works include ‘What the Dog Saw: And Other Adventures’ and ‘The Tipping Point: How Little Things Make a Big Difference’.',
        price: 300
    },
    {
        id: 4,
        title: 'Ikigai',
        description: 'THE INTERNATIONAL BESTSELLER We all have an ikigai. It\'s the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’. It’s the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer. Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it. Do that, and you can make every single day of your life joyful and meaningful. ‘I read it and it’s bewitched me ever since. I’m spellbound.’ Chris Evans \'Ikigai gently unlocks simple secrets we can all use to live long, meaningful, happy lives. Science-based studies weave beautifully into honest, straight-talking conversation you won’t be able to put down. Warm, patient, and kind, this book pulls you gently along your own journey rather than pushing you from behind.\' Neil Pasricha, bestselling author of The Happiness Equation',
        price: 500
    },
    {
        id: 5,
        title: 'The Psychology of Money',
        description: 'Timeless lessons on wealth, greed, and happiness doing well with money isn?t necessarily about what you know. It?s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do. But in the real world, people don?t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.',
        price: 150
    }
]
export const getBooks = () => {
    return Books;
};

export const getBookById = (id) => {
    return Books.find((book) => book.id === +id)
}
