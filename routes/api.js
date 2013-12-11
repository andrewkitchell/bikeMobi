/*
 * Serve JSON to our AngularJS client
 */

exports.guides = function (req, res) {
  res.json({
    guides: {
      arabic: {
        css_style: 'arabic',
        language: 'Arabic Egyptian',
        price: '$9.95',
        description: "You were warned that riding a camel could be very uncomfortable. Now, three days into your Saharan trek, you are so sore you can barely walk – let alone ride your cantankerous ungulate.  <br><br>Fortunately, 'May I have a pillow and some aspirin' is one of countless phrases you can easily create using the more than 800 useful words and phrases contained in 30 WORDS.",
        image: '/images/cover_arabic.png'
      },
      portuguese: {
        css_style: 'portuguese',
        language: 'Portuguese Brazilian',
        price: '$9.95',
        description: 'After a night of Carnaval, you thought you had experienced Brazil’s wild side.  Dancing past midnight with costumed revelers, however, seems tame compared to navigating the Amazon in an afternoon rainstorm.   <br><br>Fortunately, 30 WORDS Language Guides are built to survive both dance parties and downpours.  With more than 800 words and phrases, whether you are inquiring about samba steps or survival techniques, 30 WORDS focused content will help you embrace your adventure.',
        image: 'images/cover_brazilian.png'
      },
      French: {
        css_style: 'french',
        language: 'French',
        price: '$9.95',
        description: 'The farmer appreciated your enthusiasm when you asked about his harvest.  <br><br>In fact, he appreciated your enthusiasm so much he put you right to work. After a strenuous day of watering, weeding and hauling dirt you certainly earned your invitation to a home-cooked meal.  <br><br>So, enjoy your dinner, catch your breath, and use the more than 800 words and phrases in your 30 WORDS to toast your new friend.',
        image: '/images/cover_french.png'
      },
      german: {
        css_style: 'german',
        language: 'German',
        price: '$9.95',
        description: 'When you scheduled your trip to Bavaria, you never anticipated experiencing Oktoberfest’s parade in such style.   <br><br>However, after toasting a group of locals you were welcomed aboard their float.  As you drift through the streets of Munich learning folk songs and sampling local cuisine, use the more than 800 words and phrases in your 30 WORDS to engage your new friends.  <br><br> With focused and accessible language content (and perhaps a stein of Marzenbier), joining in the local revelry has never been easier.',
        image: '/images/cover_german.png'
      },
      hebrew: {
        css_style: 'hebrew',
        language: 'Hebrew',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing.  <br><br>Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/cover_hebrew.png'
      },
      italian: {
        css_style: 'italian',
        language: 'Italian',
        price: '$9.95',
        description: "You complimented the accordion player on this performance, and he could scarcely contain his pride.  <br><br>He invited you to a festival later that evening where he was playing with other local musicians. Now, as the band's music picks up, you look forward to a night of singing and dancing...or perhaps just entertaining the crowd of locals eager to say 'Hello'.  <br><br>Whether or not you make it to the dance floor, with more than 800 words and phrases in your 30 WORDS, you're sure to feel like part of the family.",
        image: '/images/cover_italian.png'
      },
      mandarin: {
        css_style: 'mandarin',
        language: 'Mandarin',
        price: '$9.95',
        description: 'When you stopped to ask the price of the morning catch, you did not expect to be invited to join the fisherman out on the river.  <br><br>However, a friendly exchange at the local market earned you an invitation to fish the Yangtze. After an exciting day on the river you pause to reflect on two new lessons:  <br><br>Landing a sturgeon on a narrow raft is a sizable challenge; and you need to find clothing as waterproof and durable as your 30 WORDS.',
        image: '/images/cover_mandarin.png'
      },
      spanish_EU: {
        css_style: 'euspanish',
        language: 'Spanish European',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters - such as keeping pace with your instructor.',
        image: '/images/cover_euspanish.png'
      },
      spanish_SA: {
        css_style: 'saspanish',
        language: 'Spanish South American',
        price: '$9.95',
        description: 'It would have been a good idea to negotiate the price of a llama before ascending to 8,000 feet.  <br><br>Now, resting high in the Andes, you face a difficult decision: To continue your journey you must either lighten your backpack, or empty your wallet. Open your feather-light 30 WORDS however, and new options emerge. Why not bargain for one day’s use of a mercurial llama, or ask a local about a shortcut?  <br><br>Whether you choose to push to the summit, or return home, expand your possibilities with 30 WORDS.',
        image: '/images/cover_saspanish.png'
      }
    }
  });
};