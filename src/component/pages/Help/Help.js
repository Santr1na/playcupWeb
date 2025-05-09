import React, {useState} from "react";
import './Help.css';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import HelpText from './cardHelp/cardHelp';
import circle_down from '../../../icons/arrow-circle-down.svg';

function Help(){
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return(
        <>
            <Header />

            <main>
                <div className="main-help">
                    <div className="filter-help">
                        <div className="filter-FAQ">
                            FAQ
                        </div>
                        <div className="line-filters-help"></div>
                        <div className="filter-roles">
                            Правила
                        </div>
                    </div>

                    <div className="FAQ">
                    {
                        HelpText.map((help, index) => {
                            const isOpen = openIndex === index;
                            return(
                                <div key={index}>
                                    <div className="questions" onClick={() => toggleFAQ(index)}>
                                        <p className="question">{help.question}</p>
                                        <img src={circle_down} alt="" className={isOpen ? "rotated" : ""}/>
                                    </div>
                                    <div className={`response-questions ${isOpen ? "active" : ""}`}>
                                        <p>
                                            {help.response}    
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }

                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Help;