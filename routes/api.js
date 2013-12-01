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
        image: '/images/guideCovers/arabic.jpg'
      },
      Brazilian: {
        language: 'Brazilian Portuguese',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: 'images/guideCovers/portuguese.jpg'
      },
      French: {
        language: 'French',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/french.jpg'
      },
      German: {
        language: 'German',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/german.jpg'
      },
      Hebrew: {
        language: 'Hebrew',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/hebrew.jpg'
      },
      Italian: {
        language: 'Italian',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/italian.jpg'
      },
      Mandarin: {
        language: 'Mandarin',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/mandarin.jpg'
      },
      SaSpanish: {
        language: 'Spanish South American',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/saspanish.jpg'
      },
      EuSpanish: {
        language: 'Spanish European',
        price: '$9.95',
        description: 'You mentioned your interest in Flamenco dancing and now your first lesson is in full swing. Luckily, you dance more elegantly than you speak Spanish - at least this was true before you traveled with 30 WORDS. Now that you can find the words you need between spins, you can focus on more important matters such as keeping pace with your instructor.',
        image: '/images/guideCovers/euspanish.jpg'
      }
    }
  });
};