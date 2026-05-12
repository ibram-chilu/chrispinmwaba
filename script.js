const testimonials = [
  {
    quote: '“An inspiring keynote that gave our team practical creativity tools.”',
    author: 'JORDAN LEE — VP, NOVATECH'
  },
  {
    quote: '“Our leadership retreat was transformed by the Wonder + Rigor framework.”',
    author: 'SAMIRA KHAN — FOUNDER, BRIGHTLAB'
  },
  {
    quote: '“One of the most actionable talks we have ever hosted.”',
    author: 'MARCUS OWENS — DIRECTOR, PEOPLE OPS'
  }
];

let index = 0;
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  render();
});

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  render();
});

function render() {
  quoteText.textContent = testimonials[index].quote;
  quoteAuthor.textContent = testimonials[index].author;
}
