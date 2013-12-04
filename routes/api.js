/*
 * Serve JSON to our AngularJS client
 */

exports.guides = function (req, res) {
  res.json({
    guides: {
      Arabic: {
        language: 'Arabic',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/arabic.png'
      },
      Brazilian: {
        language: 'Brazilian Portuguese',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: 'images/guideCovers/brazilian.png'
      },
      French: {
        language: 'French',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/french.png'
      },
      German: {
        language: 'German',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/german.png'
      },
      Hebrew: {
        language: 'Hebrew',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/hebrew.png'
      },
      Italian: {
        language: 'Italian',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/italian.png'
      },
      Mandarin: {
        language: 'Mandarin',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/mandarin.png'
      },
      SaSpanish: {
        language: 'Spanish South American',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/saspanish.png'
      },
      EuSpanish: {
        language: 'Spanish European',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/euspanish.png'
      }
    }
  });
};