import React , { useState } from "react";
import dota from '../../../img/dota460.jpg';
import cs from '../../../img/counter-strike-2.jpg';
import de_dust2 from '../../../icons/de_dust2.webp';
import de_mirage from '../../../icons/de_mirage.webp';
import de_train from '../../../icons/de_train.webp';
import photo_team from '../../../icons/photo_team.jpg';

const Tour = [
    {
        id: 1,
        image_game: dota,
        category: 'DOTA 2',
        name: 'CUMBERSOME CUP',
        data: '10.05.2025',
        dateStart: "2025-05-6",
        dateEnd: "2025-05-7",
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
      id: 2,
      image_game: cs,
      category: 'CS 2',
      name: 'CUMBERSOME CUP',
      data: '5.06.2025',
      dateStart: "2025-06-5",
      dateEnd: "2025-06-8",
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
      id: 3,
      image_game: dota,
      category: 'DOTA 2',
      name: 'CUMBERSOME CUP',
      data: '7.05.2025',
      dateStart: "2025-05-7",
      dateEnd: "2025-05-15",
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
      id: 4,
      image_game: cs,
      category: 'CS 2',
      name: 'CUMBERSOME CUP',
      data: '10.05.2025',
      dateStart: "2025-05-10",
      dateEnd: "2025-05-15",
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
      id: 5,
      image_game: dota,
      category: 'DOTA 2',
      name: 'CUMBERSOME CUP',
      data: '10.07.2025',
      dateStart: "2025-07-10",
      dateEnd: "2025-07-15",
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
        id: 6,
        image_game: cs,
        category: 'CS 2',
        name: 'CUMBERSOME CUP',
        data: '10.05.2025',
        dateStart: "2025-05-10",
        dateEnd: "2025-05-15",
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
        id: 7,
        image_game: dota,
        category: 'DOTA 2',
        name: 'CUMBERSOME CUP',
        data: '10.07.2025',
        dateStart: "2025-05-7",
        dateEnd: "2025-05-13",
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

  ];

  export default Tour;