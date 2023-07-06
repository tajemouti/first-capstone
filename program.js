const advisors = document.getElementById('advisors-section');

const cardInfos = {
  name: [
    'Anna-Karin Rosen',
    'John W. Nicholson JR.',
    'H.H. Sheikha Mozah Al Maktoum',
    'Kuljit Ghata-Aura',
    'H.E. Ibrahim Al Qasim',
    'Matthew Cochran',
  ],
  title: [
    'Managing Director Middle East SAAB',
    'CEO Lockheed Martin Middle East',
    'First lieutenant Pilot',
    'President of Boeing Middle East',
    'Deputy Director of UAE Space Agency',
    'Chairman and CEO of DSMC Council',
  ],
  image: [
    './assets/img/anna-karin-rosen.jpg',
    './assets/img/John-Nicholson.png',
    './assets/img/Moza-Al-Maktoum.jpg',
    './assets/img/Kuljit-Ghata-Aura.jpg',
    './assets/img/Ibraim-Qasim.png',
    './assets/img/Matthew-Cochran.jpg',
  ],
  description: [
    'Anna has attained university degrees in Mechanical Engineering, Business Administration. She moved to Abu Dhabi in October 2017 for the position of Offset Program Director UAE.',
    'Nicholson was the deputy director of the Joint Improvised Explosive Device Defeat Organization. He became commander of the 82nd Airborne Division in 2012.',
    "Sheikha Mozah is a prominent member of the Emirati society. She belongs to one of the significant UAE's ruling family, which is Al Maktoum family.",
    'Kuljit is responsible for coordinating all companywide activities in the region and developing and implementing country and regional strategies.',
    "In 2013, Ibrahim was assigned to manage the UAE's first CubeSat mission Nayif-1 that was successfully launched in February 2017.",
    'As Chairman of Defense Services Marketing Council, an incubator organization that accelerates international industry related companies growth in sales and innovations, he leads working groups and task forces.',
  ],
};

const nameArr = cardInfos.name;
const titleArr = cardInfos.title;
const imageArr = cardInfos.image;
const descriptionArr = cardInfos.description;

let mainCard = '';
mainCard += `
    <h2 class="advisors-heading">Featured Advisors
      <hr class="divider">
    </h2>
    <div class="advisors-cards">
      <div class="adv-card">
        <div class="container">
          <div class="img-container">
            <div class="checker"></div>
            <img class="adv-img" src=${imageArr[0]} alt="Advisor's picture">
          </div>
        </div>
        <div class="right-block">
          <div class="adv-card-heading">
            <h3 class="adv-name">${nameArr[0]}</h3>
            <h4 class="adv-title">${titleArr[0]}</h4>
            <hr class="card-divider">
          </div>
          <p class="adv-description">${descriptionArr[0]}</p>
        </div>
      </div>
      <div class="adv-card">
        <div class="container">
          <div class="img-container">
          <div class="checker"></div>
          <img class="adv-img" src=${imageArr[1]} alt="Advisor's picture">
        </div>
        </div>
        <div class="right-block">
          <div class="adv-card-heading">
            <h3 class="adv-name">${nameArr[1]}</h3>
            <h4 class="adv-title">${titleArr[1]}</h4>
            <hr class="card-divider">
          </div>
          <p class="adv-description">${descriptionArr[1]}</p>
        </div>
      </div>
      <div id="more">MORE<span>V</span></div>
      <div class="hidden">
        <div class="more">
          <div class="adv-card">
            <div class="container">
              <div class="img-container">
              <div class="checker"></div>
              <img class="adv-img" src=${imageArr[2]} alt="Advisor's picture">
            </div>
            </div>
            <div class="right-block">
              <div class="adv-card-heading">
                <h3 class="adv-name">${nameArr[2]}</h3>
                <h4 class="adv-title">${titleArr[2]}</h4>
                <hr class="card-divider">
              </div>
              <p class="adv-description">${descriptionArr[2]}</p>
            </div>
          </div>
          <div class="adv-card">
            <div class="container">
              <div class="img-container">
              <div class="checker"></div>
              <img class="adv-img" src=${imageArr[3]} alt="Advisor's picture">
            </div>
            </div>
            <div class="right-block">
              <div class="adv-card-heading">
                <h3 class="adv-name">${nameArr[3]}</h3>
                <h4 class="adv-title">${titleArr[3]}</h4>
                <hr class="card-divider">
              </div>
              <p class="adv-description">${descriptionArr[3]}</p>
            </div>
          </div>
          <div class="adv-card">
            <div class="container">
              <div class="img-container">
              <div class="checker"></div>
              <img class="adv-img" src=${imageArr[4]} alt="Advisor's picture">
            </div>
            </div>
            <div class="right-block">
              <div class="adv-card-heading">
                <h3 class="adv-name">${nameArr[4]}</h3>
                <h4 class="adv-title">${titleArr[4]}</h4>
                <hr class="card-divider">
              </div>
              <p class="adv-description">${descriptionArr[4]}</p>
            </div>
          </div>
          <div class="adv-card">
            <div class="container">
              <div class="img-container">
              <div class="checker"></div>
              <img class="adv-img" src=${imageArr[5]} alt="Advisor's picture">
            </div>
            </div>
            <div class="right-block">
              <div class="adv-card-heading">
                <h3 class="adv-name">${nameArr[5]}</h3>
                <h4 class="adv-title">${titleArr[5]}</h4>
                <hr class="card-divider">
              </div>
              <p class="adv-description">${descriptionArr[5]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
`;

advisors.innerHTML = mainCard;
