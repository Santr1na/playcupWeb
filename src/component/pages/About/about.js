import React from "react";
import './about.css';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import image_about_1 from './about-image1.png';
import image_about_2 from './about-image2.png';
import image_about_3 from './about-image3.png';
import image_about_4 from './about-image4.png';


function About(){
    return(
        <>
            <svg opacity={1} class="bg" width="1521" height="1096" viewBox="0 0 1521 1096" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M542 199L343.5 0.291748H583.5L922.708 339.292L542 199ZM1521 773L748.375 0.291748H988.5L1029.42 41L1521 773ZM1081.21 1096L-16 0.291748H225.5L435.5 209.876L1081.21 1096ZM1.5 743.5H0V503L270.208 771.792L1.5 743.5ZM150 561.896L0 413V172.792L722.812 894.292L150 561.896Z" fill="url(#paint0_linear_8_103)" fill-opacity="0.15"/>
              <defs>
                  <linearGradient id="paint0_linear_8_103" x1="1734" y1="1066" x2="-149.5" y2="-135" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0D111A"/>
                      <stop offset="1" stop-color="#1C2034"/>
                  </linearGradient>
              </defs>
            </svg>
            <Header />



            <main>
                <div class="center">
                    <div class="about-main">
                        <h2 class="lozung-about">Давайте играть, соревноваться и побеждать вместе!</h2>
                        <div class="We-about">
                            <span class="We">
                                <p>Мы<span>— платформа для организации онлайн-турниров</span></p>
                            </span>
                        </div>
                    <div class="Our-goal-about">
                        <p>Наша цель<span>— создавать честные и захватывающие соревнования для игроков любого уровня</span></p>
                    </div>
                    <div class="Our-mission-about">
                        <p>Наша миссия <span>— объединять людей со всего мира, предоставляя им возможность участвовать в захватывающих состязаниях, развивать свои навыки и находить единомышленников. Мы верим, что онлайн-турниры — это не просто игры, а способ самовыражения, обучения и, конечно, получения незабываемых эмоций.</span></p>
                    </div>
            
                    <h3 class="What-we-offer">Что мы предлагаем?</h3>
    
                    <div class="about-offer-one">
                        <div class="about-offer-text-one">
                            <p>Турниры по популярным дисциплинам</p>
                            <span>Мы проводим соревнования по самым востребованным направлениям. Каждый найдёт турнир по своим интересам</span>
                        </div>
                        <div class="about-offer-image-one">
                            <img src={image_about_1} alt=""/>
                        </div>
                    </div>
    
                    <div class="about-offer-two">
                        <div class="about-offer-text-two">
                            <p>Чёткие правила и профессиональная организация</p>
                            <span>Все наши турниры проводятся по прозрачным и строгим правилам. Мы обеспечиваем честную игру, а наши администраторы следят за соблюдением регламента</span>
                        </div>
                        <div class="about-offer-image-two">
                            <img src={image_about_2} alt=""/>
                        </div>
                    </div>
    
                <div class="about-offer-three">
                    <div class="about-offer-text-three">
                        <p>Удобная регистрация и поддержка участников</p>
                        <span>Процесс участия максимально прост: быстрая регистрация, понятные инструкции и оперативная поддержка на всех этапах турнира. Мы всегда готовы помочь!</span>
                    </div>
                    <div class="about-offer-image-three">
                        <img src={image_about_3} alt=""/>
                    </div>
                </div>
    
                <div class="about-offer-four">
                    <div class="about-offer-text-four">
                        <p>Призы и награды для победителей</p>
                        <span>Мы ценим ваши усилия и страдания. Победители получают достойные призы, награды и признание в игровом комьюнити</span>
                    </div>
                    <div class="about-offer-image-four">
                        <img src={image_about_4} alt=""/>
                    </div>
                </div>
            </div>
        </div>
            </main>

            <Footer />
        </>
    )
}

export default About;