const advCard = [
  {
    image: './assets/img/anna-karin-rosen.jpg',
    name: 'Anna-Karin Rosen',
    title: `
    Managing Director Middle East SAAB 
    `,
    description: `
    Anna has attained university degrees in Mechanical Engineering, Business Administration. She moved to Abu Dhabi in October 2017 for the position of Offset Program Director UAE.
    `,
  },
  {
    image: './assets/img/John-Nicholson.png',
    name: 'John W. Nicholson JR.',
    title: `
    CEO Lockheed Martin Middle East 
    `,
    description: `
    Nicholson was the deputy director of the Joint Improvised Explosive Device Defeat Organization. He became commander of the 82nd Airborne Division in 2012.
    `,
  },
  {
    image: './assets/img/Moza-Al-Maktoum.jpg',
    name: 'H.H. Sheikha Mozah Al Maktoum',
    title: `
    First lieutenant Pilot 
    `,
    description: `
    Sheikha Mozah is a prominent member of the Emirati society. She belongs to one of the significant UAE's ruling family, which is Al Maktoum family.
    `,
  },
  {
    image: './assets/img/Kuljit-Ghata-Aura.jpg',
    name: 'Kuljit Ghata-Aura',
    title: `
    President of Boeing Middle East 
    `,
    description: `
    Kuljit is responsible for coordinating all companywide activities in the region and developing and implementing country and regional strategies.
    `,
  },
  {
    image: './assets/img/Ibraim-Qasim.png',
    name: 'H.E. Ibrahim Al Qasim',
    title: `
    Deputy Director of UAE Space Agency 
    `,
    description: `
    In 2013, Ibrahim was assigned to manage the UAE's first CubeSat mission Nayif-1 that was successfully launched in February 2017.
    `,
  },
  {
    image: './assets/img/Matthew-Cochran.jpg',
    name: 'Matthew Cochran',
    title: `
    Chairman and CEO of DSMC Council 
    `,
    description: `
    As Chairman of Defense Services Marketing Council, an incubator organization that accelerates international industry related companies growth in sales and innovations.
    `,
  },
];

const advisors1 = document.querySelector('.always-on');
const advisors2 = document.querySelector('.more');

window.onload = () => {
  advCard.forEach((advisor, index) => {
    if (index < 2) {
      advisors1.innerHTML += `
<div class="adv-card">
<div class="container">
<div class="img-container">
<div class="checker"></div>
<img class="adv-img" src=${advisor.image} alt="Advisor's picture">
</div>
</div>
<div class="right-block">
<h3 class="adv-name">${advisor.name}</h3>
<h4 class="adv-title">${advisor.title}</h4>
<hr class="card-divider">
<p class="adv-description">${advisor.description}</p>
</div>
</div>
`;
    } else {
      advisors2.innerHTML += `
<div class="adv-card">
<div class="container">
<div class="img-container">
<div class="checker"></div>
<img class="adv-img" src=${advisor.image} alt="Advisor's picture">
</div>
</div>
<div class="right-block">
<h3 class="adv-name">${advisor.name}</h3>
<h4 class="adv-title">${advisor.title}</h4>
<hr class="card-divider">
<p class="adv-description">${advisor.description}</p>
</div>
</div>
`;
    }
  });
};
