import React , { useState } from "react";
import './Tournaments.css';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ActiveGame from '../../Menu/ActiveGame/ActiveGame';


function Tournaments(){
    const [value, setValue] = useState('');
    return(
        <>
            <Header />

            <svg opacity={0.5} class="bg" width="1521" height="1096" viewBox="0 0 1521 1096" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M542 199L343.5 0.291748H583.5L922.708 339.292L542 199ZM1521 773L748.375 0.291748H988.5L1029.42 41L1521 773ZM1081.21 1096L-16 0.291748H225.5L435.5 209.876L1081.21 1096ZM1.5 743.5H0V503L270.208 771.792L1.5 743.5ZM150 561.896L0 413V172.792L722.812 894.292L150 561.896Z" fill="url(#paint0_linear_8_103)" fill-opacity="0.15"/>
              <defs>
                  <linearGradient id="paint0_linear_8_103" x1="1734" y1="1066" x2="-149.5" y2="-135" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#0D111A"/>
                      <stop offset="1" stop-color="#1C2034"/>
                  </linearGradient>
              </defs>
            </svg>

            <main>
            <div class="center">
                <div class="up-tournaments-page">
                    <ActiveGame />

                    <button class="create-tournaments" translate="no">
                        <p>Создать турнир</p>
                    </button>
                        
                    <div class="back-search-tournaments">
                        <input class="search-tournaments" type="text" placeholder="Поиск" value={value} onChange={(e) => setValue(e.target.value)}/>
                    </div>
                </div>

</div>
            </main>

            <Footer />
        </>
    )
}

export default Tournaments;