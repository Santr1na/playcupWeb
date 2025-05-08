import React, {useState} from "react";
import './cardTournaments.css';
import dota from '../../img/dota460.jpg';
import cs from '../../img/counter-strike-2.jpg';
import de_dust2 from '../../icons/de_dust2.webp';
import de_mirage from '../../icons/de_mirage.webp';
import de_train from '../../icons/de_train.webp';
import photo_team from '../../icons/photo_team.jpg';
import bitcoin from '../../icons/bitcoin.svg'

const Tour = [
  {
      image_game: dota,
      category: 'DOTA 2',
      name: 'CUMBERSOME CUP',
      data: '20.12.2025',
      time: '18:00',
      format: '1v1',
      max_player: 512,
      prize: 10,

      full_info: {
        description: 'Описание ОписаниеОписание ОписаниеОписание ОписаниеОписание Описание',
        rules: 'Правила ПравилаПравила ПравилаПравила ПравилаПравила ПравилаПравила ПравилаПравила Правила',
        map: {
            maps: [
                {
                    photo_map: de_dust2,
                    name_map: 'Dust 2'
                },
                {
                    photo_map: de_mirage,
                    name_map: 'Mirage'
                },
                {
                    photo_map: de_train,
                    name_map: 'Train'
                },
            ],
            maps_dota: [
                {
                    name_map: 'У этой игры одна карта'
                }
            ]
        },
        teams: {
            team: [
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                },
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                },
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                }
            ]
        }
      }
  },
  {
    image_game: cs,
    category: 'CS 2',
    name: 'CUMBERSOME CUP',
    data: '20.12.2025',
    time: '18:00',
    format: '1v1',
    max_player: 512,
    prize: 5,

    full_info: {
        description: 'Описание ОписаниеОписание ОписаниеОписание ОписаниеОписание Описание',
        rules: 'Правила ПравилаПравила ПравилаПравила ПравилаПравила ПравилаПравила ПравилаПравила Правила',
        map: {
            maps: [
                {
                    photo_map: de_dust2,
                    name_map: 'Dust 2'
                },
                {
                    photo_map: de_mirage,
                    name_map: 'Mirage'
                },
                {
                    photo_map: de_train,
                    name_map: 'Train'
                },
            ],
            maps_dota: [
                {
                    name_map: 'У этой игры одна карта'
                }
            ]
        },
        teams: {
            team: [
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE1231231'
                },
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                },
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                }
            ]
        }
      }
  },

  {
    image_game: dota,
    category: 'DOTA 2',
    name: 'CUMBERSOME CUP',
    data: '20.12.2025',
    time: '18:00',
    format: '1v1',
    max_player: 512,
    prize: 10,

    full_info: {
        description: 'Описание ОписаниеОписание ОписаниеОписание ОписаниеОписание Описание',
        rules: 'Правила ПравилаПравила ПравилаПравила ПравилаПравила ПравилаПравила ПравилаПравила Правила',
        map: {
            maps: [
                {
                    photo_map: de_dust2,
                    name_map: 'Dust 2'
                },
                {
                    photo_map: de_mirage,
                    name_map: 'Mirage'
                },
                {
                    photo_map: de_train,
                    name_map: 'Train'
                },
            ],
            maps_dota: [
                {
                    name_map: 'У этой игры одна карта'
                }
            ]
        },
        teams: {
            team: [
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                },
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                },
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                }
            ]
        }
      }
  },

  {
    image_game: cs,
    category: 'CS 2',
    name: 'CUMBERSOME CUP',
    data: '20.12.2025',
    time: '18:00',
    format: '1v1',
    max_player: 512,
    prize: 10,

    full_info: {
        description: 'Описание ОписаниеОписание ОписаниеОписание ОписаниеОписание Описание',
        rules: 'Правила ПравилаПравила ПравилаПравила ПравилаПравила ПравилаПравила ПравилаПравила Правила',
        map: {
            maps: [
                {
                    photo_map: de_dust2,
                    name_map: 'Dust 2'
                },
                {
                    photo_map: de_mirage,
                    name_map: 'Mirage'
                },
                {
                    photo_map: de_train,
                    name_map: 'Train'
                },
            ],
            maps_dota: [
                {
                    name_map: 'У этой игры одна карта'
                }
            ]
        },
        teams: {
            team: [
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE1231231'
                },
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                },
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                }
            ]
        }
      }
  },
  {
    image_game: dota,
    category: 'CS 2',
    name: 'CUMBERSOME CUP',
    data: '20.12.2025',
    time: '18:00',
    format: '1v1',
    max_player: 512,
    prize: 10,

    full_info: {
        description: 'Описание ОписаниеОписание ОписаниеОписание ОписаниеОписание Описание',
        rules: 'Правила ПравилаПравила ПравилаПравила ПравилаПравила ПравилаПравила ПравилаПравила Правила',
        map: {
            maps: [
                {
                    photo_map: de_dust2,
                    name_map: 'Dust 2'
                },
                {
                    photo_map: de_mirage,
                    name_map: 'Mirage'
                },
                {
                    photo_map: de_train,
                    name_map: 'Train'
                },
            ],
            maps_dota: [
                {
                    name_map: 'У этой игры одна карта'
                }
            ]
        },
        teams: {
            team: [
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                },
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                },
                {
                    photo_team: photo_team,
                    name_team: 'DEAD INSADE'
                }
            ]
        }
      }
  }
]

function CardTournament(){

    const [expandedTour, setExpandedTour] = useState(null);

    const toggleTour = (index) => {
        if (expandedTour === index) {
          setExpandedTour(null);
        } else {
          setExpandedTour(index);
        }
      };

    return(
        <div style={{width: '100%'}}>
            {
                Tour.map((tour, index) => {
                    return(
                        <div key={index} className="tour-container">
                            <div className={`tour ${expandedTour === index ? 'active' : ''}`}
                                    onClick={() => toggleTour(index)}
                                    style={{cursor: 'pointer'}} >
                            <img class="game-image" id="game" src={tour.image_game} alt="game"/>  
                            <div class="full-width-tour">
                                <div class="name-reg">
                                    <div class="name">
                                        <h2 class="game">{tour.category}</h2>
                                        <h3 class="tournament">{tour.name}</h3>
                                    </div>
                                    <div class="reg">
                                        <p class="reg">
                                            ИДЁТ РЕГИСТРАЦИЯ
                                        </p>
                                    </div>
                                </div>
                                <div class="main-info-tour">
                                    <div class="date-time">
                                        <div class="data-tour">
                                            <p id="head-datetime">Дата</p>
                                            <p>{tour.data}</p>
                                        </div>
                                        <div class="time-tour">
                                            <p id="head-datetime">Время</p>
                                            <p>{tour.time}</p>
                                        </div>
                                    </div>
                                    <div class="mode-people">
                                        <div class="mode">
                                            <p id="mode-people">Формат:</p>
                                            <h4 id="edit-mode-people">{tour.format}</h4>
                                        </div>
                                        <div class="people2">
                                            <p id="mode-people">Участники:</p>
                                            <p id="edit-mode-people">312/<p class="max-player">{tour.max_player}</p></p>
                                                
                                        </div>
                                    </div>
                                </div>
                                <div class="money2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" id="bitcoin">
                                        <path d="M6.82739 6.54749H10.3812C11.169 6.54749 11.808 7.25651 11.808 7.97428C11.808 8.76208 11.169 9.40107 10.3812 9.40107H6.82739V6.54749Z" stroke="#FF8000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.82739 9.39227H10.8889C11.7905 9.39227 12.5171 10.0313 12.5171 10.8191C12.5171 11.6069 11.7905 12.2459 10.8889 12.2459H6.82739V9.39227Z" stroke="#FF8000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.31348 12.2372V13.664" stroke="#FF8000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.53687 12.2372V13.664" stroke="#FF8000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.31348 5.12067V6.54746" stroke="#FF8000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.53687 5.12067V6.54746" stroke="#FF8000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.17515 6.54749H5.68921" stroke="#FF8000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.17515 12.2372H5.68921" stroke="#FF8000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9.1033 16.8793C13.293 16.8793 16.6895 13.4829 16.6895 9.29312C16.6895 5.10337 13.293 1.70691 9.1033 1.70691C4.91355 1.70691 1.51709 5.10337 1.51709 9.29312C1.51709 13.4829 4.91355 16.8793 9.1033 16.8793Z" stroke="#FF8000" stroke-width="1.5" stroke-miterlimit="10"/>
                                    </svg>
                                        
                                    <p>{tour.prize}</p>
                                </div>
                            </div>
                                
                            </div>

                            <div className={`tour-details ${expandedTour === index ? 'expanded' : ''}`}>
                                <div class="bottom-content-info-tour">
                                    <div class="info-tour-in-window">
                                        <p class="info-text">Инфо</p>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.7011 27.6782C22.5792 27.6782 28.2067 22.0507 28.2067 15.1727C28.2067 8.29462 22.5792 2.66711 15.7011 2.66711C8.82306 2.66711 3.19556 8.29462 3.19556 15.1727C3.19556 22.0507 8.82306 27.6782 15.7011 27.6782Z" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.7009 10.1705V16.4233" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.6936 20.175H15.7048" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <div className='full-description'>
                                            <p>{tour.full_info.description}</p>
                                        </div>
                                    </div>
                                    <div class="rules-tour-in-window">
                                        <p class="info-text">Правила</p>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.3707 21.1006V6.00633C28.3707 4.50567 27.1452 3.39267 25.657 3.51773H25.582C22.9558 3.74283 18.9666 5.08092 16.7406 6.48155L16.528 6.61911C16.1653 6.84421 15.5651 6.84421 15.2024 6.61911L14.8898 6.43152C12.6638 5.04341 8.68699 3.71782 6.06082 3.50522C4.57266 3.38017 3.35962 4.50567 3.35962 5.99383V21.1006C3.35962 22.3011 4.33505 23.4266 5.53559 23.5767L5.89825 23.6267C8.61196 23.9893 12.8013 25.365 15.2024 26.678L15.2524 26.703C15.5901 26.8906 16.1278 26.8906 16.4529 26.703C18.854 25.3775 23.0559 23.9893 25.7821 23.6267L26.1948 23.5767C27.3953 23.4266 28.3707 22.3011 28.3707 21.1006Z" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.865 7.03162V25.79" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M10.5501 10.7833H7.73633" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M11.488 14.535H7.73633" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg> 
                                            
                                        <div className='full-rules'>
                                            <p>{tour.full_info.rules}</p>
                                        </div>
                                    </div>
                                    <div class="map-tour-in-window">
                                        <p class="info-text">Карты</p>

                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.88647 9.89553V22.0634C2.88647 24.4395 4.57473 25.4149 6.62564 24.2394L9.56445 22.5637C10.2022 22.201 11.2652 22.1635 11.928 22.5011L18.4934 25.7901C19.1562 26.1153 20.2192 26.0902 20.857 25.7276L26.2719 22.6262C26.9597 22.226 27.5349 21.2506 27.5349 20.4502V8.28231C27.5349 5.90626 25.8467 4.93082 23.7958 6.10635L20.857 7.78209C20.2192 8.14475 19.1562 8.18227 18.4934 7.84462L11.928 4.56816C11.2652 4.24302 10.2022 4.26803 9.56445 4.63069L4.14954 7.73207C3.44923 8.13225 2.88647 9.10768 2.88647 9.89553Z" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M10.7273 5.16846V21.4257" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M19.6936 8.44482V25.1773" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                            
                                        <div className='full-map'>
                                            {tour.category === 'CS 2' && tour.full_info.map.maps.map((mapName, Index) => (
                                                <div key={Index} style={{display: 'block'}}>
                                                    <div style={{display: 'flex', alignItems: 'center', position: 'relative', gap: '10px'}}>
                                                        <img src={mapName.photo_map} style={{width: '32px', height: '32px'}}/>
                                                        <p>{mapName.name_map}</p>
                                                    </div>

                                                    {Index < tour.full_info.map.maps.length - 1 && (
                                                        <div style={{height: '1px', margin: '12px 0px'}}>
                                                            <hr color="#27395C" size="0.5"/>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}

                                            {tour.category === 'DOTA 2' && tour.full_info.map.maps_dota.map((mapName, Index) => (
                                                <p>{mapName.name_map}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div class="team-tour-in-window">
                                        <p class="info-text">Команды</p>

                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.6966 9.12023C22.6216 9.10773 22.5341 9.10773 22.459 9.12023C20.7333 9.05771 19.3577 7.64458 19.3577 5.8938C19.3577 4.1055 20.7958 2.66736 22.5841 2.66736C24.3724 2.66736 25.8105 4.11801 25.8105 5.8938C25.798 7.64458 24.4224 9.05771 22.6966 9.12023Z" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M21.4093 18.2243C23.1226 18.512 25.011 18.2118 26.3365 17.3239C28.0998 16.1484 28.0998 14.2226 26.3365 13.047C24.9984 12.1591 23.0851 11.859 21.3718 12.1591" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7.65319 9.12023C7.72823 9.10773 7.81576 9.10773 7.8908 9.12023C9.61657 9.05771 10.9922 7.64458 10.9922 5.8938C10.9922 4.1055 9.55404 2.66736 7.76574 2.66736C5.97745 2.66736 4.53931 4.11801 4.53931 5.8938C4.55181 7.64458 5.92743 9.05771 7.65319 9.12023Z" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.9413 18.2243C7.22804 18.512 5.3397 18.2118 4.01411 17.3239C2.25083 16.1484 2.25083 14.2226 4.01411 13.047C5.35221 12.1591 7.26556 11.859 8.97882 12.1591" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.1937 18.4615C15.1187 18.449 15.0311 18.449 14.9561 18.4615C13.2303 18.399 11.8547 16.9859 11.8547 15.2351C11.8547 13.4468 13.2929 12.0087 15.0812 12.0087C16.8695 12.0087 18.3076 13.4593 18.3076 15.2351C18.2951 16.9859 16.9195 18.4115 15.1937 18.4615Z" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M11.5542 22.4008C9.79087 23.5763 9.79087 25.5022 11.5542 26.6777C13.555 28.0158 16.8315 28.0158 18.8324 26.6777C20.5957 25.5022 20.5957 23.5763 18.8324 22.4008C16.844 21.0752 13.555 21.0752 11.5542 22.4008Z" stroke="#89919F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <div className='full-team'>
                                            {tour.full_info.teams.team.map((teamName, Index) => (
                                                <div key={Index} style={{display: 'block'}}>
                                                    <div style={{display: 'flex', alignItems: 'center', position: 'relative', gap: '10px'}}>
                                                        <img src={teamName.photo_team} style={{width: '32px', height: '32px'}}/>
                                                        <p style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{teamName.name_team}</p>
                                                    </div>

                                                    {Index < tour.full_info.map.maps.length - 1 && (
                                                        <div style={{height: '1px', margin: '12px 0px'}}>
                                                            <hr color="#27395C" size="0.5"/>
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <button class="participate">
                                        Участвовать
                                </button>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    );
};

export default CardTournament;