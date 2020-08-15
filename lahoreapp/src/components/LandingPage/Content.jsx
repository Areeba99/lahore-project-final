import React from "react";
import Mosque1 from "../assets/Grand-Jamia-Masjid-Bahria-Town-Lahore.jpg";
import Mosque2 from "../assets/badshahi-mosque1.jpg";
const Content = () => {
  return (
    <>
      <div id="content" className="container">
        <h1>Lahore; A Brief Introduction</h1>
        <p>
          Lahore is the capital of the Pakistani province of Punjab, and is the
          country's 2nd largest city after Karachi, as well as the 18th largest
          city proper in the world. Lahore is one of the Pakistan's wealthiest
          cities with an estimated GDP of $65.14 billion as of 2017. Lahore is
          the largest city and historic cultural centre of the wider Punjab
          region, and is one of Pakistan's most socially liberal, progressive,
          and cosmopolitan cities.
        </p>
        <div className="image-container">
          <img
            id="myImg"
            src={Mosque1}
            alt="Grand Jamia Masjid Bahria Town"
            data-target="#myModal1"
            data-toggle="modal"
            title="Click to view Full Image"
          />
          <span id="caption">Grand Jamia Masjid Bahria Town</span>
        </div>
        <p>
          Lahore's origins reach into antiquity. The city has been controlled by
          numerous empires throughout the course of its history, including the
          Hindu Shahis, Ghaznavids, Ghurids, and Delhi Sultanate by the medieval
          era. Lahore reached the height of its splendour under the Mughal
          Empire between the late 16th and early 18th century, and served as its
          capital city for a number of years. The city was captured by the
          forces of the Afsharid ruler Nader Shah in 1739, and fell into a
          period of decay while being contested between the Afghans and the
          Sikhs. Lahore eventually became capital of the Sikh Empire in the
          early 19th century, and regained some of its lost grandeur. Lahore was
          then annexed to the British Empire, and made capital of British
          Punjab. Lahore was central to the independence movements of both India
          and Pakistan, with the city being the site of both the declaration of
          Indian Independence, and the resolution calling for the establishment
          of Pakistan. Lahore experienced some of the worst rioting during the
          Partition period preceding Pakistan's independence. Following the
          success of the Pakistan Movement and subsequent independence in 1947,
          Lahore was declared capital of Pakistan's Punjab province.
        </p>
        <div className="image-container">
          <img
            id="myImg2"
            src={Mosque2}
            alt="Badshahi Mosque"
            data-target="#myModal2"
            data-toggle="modal"
            title="Click to view Full Image"
          />
          <span id="caption">Badshahi Mosque</span>
        </div>
        <p>
          Lahore exerts a strong cultural influence over Pakistan. Lahore is a
          major center for Pakistan's publishing industry, and remains the
          foremost center of Pakistan's literary scene. The city is also a major
          centre of education in Pakistan, with some of Pakistan's leading
          universities based in the city. Lahore is also home to Pakistan's film
          industry, Lollywood, and is a major centre of Qawwali music. The city
          also hosts much of Pakistan's tourist industry, with major attractions
          including the Walled City, the famous Badshahi and Wazir Khan mosques
          and Sikh shrines. Lahore is also home to the Lahore Fort and Shalimar
          Gardens, both of which are UNESCO World Heritage Sites.
        </p>
        <span id="credit">(Source: Wikipedia; The Free Encyclopedia)</span>
      </div>
      <div id="myModal1" className="modal">
        <span className="close" data-dismiss="modal">
          &times;
        </span>
        <img className="modal-content" src={Mosque1} />
        <div id="captionmodal">Grand Jamia Masjid Bahria Town</div>
      </div>
      <div id="myModal2" className="modal">
        <span className="close" data-dismiss="modal">
          &times;
        </span>
        <img className="modal-content" src={Mosque2} />
        <div id="captionmodal">Badshahi Mosque</div>
      </div>
    </>
  );
};

export default Content;
