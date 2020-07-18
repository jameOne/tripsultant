export const singleMapTestState = {
  router: {
    state: {
      root: {
        params: {},
        data: {},
        url: [],
        outlet: 'primary',
        routeConfig: null,
        queryParams: {},
        fragment: null,
        firstChild: {
          params: {},
          data: {},
          url: [
            {
              path: 'dashboard',
              parameters: {}
            }
          ],
          outlet: 'primary',
          routeConfig: {
            path: 'dashboard',
            pathMatch: 'full'
          },
          queryParams: {},
          fragment: null,
          children: []
        },
        children: [
          {
            params: {},
            data: {},
            url: [
              {
                path: 'dashboard',
                parameters: {}
              }
            ],
            outlet: 'primary',
            routeConfig: {
              path: 'dashboard',
              pathMatch: 'full'
            },
            queryParams: {},
            fragment: null,
            children: []
          }
        ]
      },
      url: '/dashboard'
    },
    navigationId: 1
  },
  trips: {
    tripForms: [
      {
        name: null
      }
    ],
    tripRemovalRequests: [],
    tripRemovalRequestAcknowledged: true,
    trips: [
      {
        name: 'Trip'
      }
    ],
    selectedTripIndex: 0
  },
  mapViews: {
    centroidHistories: [
      {
        centroidHistory: [
          {
            lat: 43.9255276,
            lng: -78.8968021
          },
          {
            lat: 43.9600109,
            lng: -78.87880995
          },
          {
            lat: 43.93692133333334,
            lng: -78.87916333333334
          }
        ]
      }
    ],
    centerHistories: [
      {
        centerHistory: [
          {
            lat: 46.879966,
            lng: -121.726909
          }
        ]
      }
    ],
    zoomHistories: [
      {
        zoomHistory: [
          3
        ]
      }
    ],
    tileLayerURLHistories: [
      {
        tileLayerURLHistory: [
          'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Qpj0cSxqDgFSEcNanr1J'
        ]
      }
    ],
    tileLayerOptionsHistories: [
      {
        tileLayerOptionsHistory: [
          {
            maxZoom: 20,
            minZoom: 3,
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          }
        ]
      }
    ],
    fitToBounds: [
      false
    ]
  },
  tripNameDialog: {
    tripNameDialog: {
      isOpen: false
    }
  },
  waypointLocationDialog: {
    waypointLocationDialog: {
      isOpen: false
    }
  },
  distanceMatrices: {
    distanceMatrixResponses: [
      [
        {
          origin_addresses: [
            'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada'
          ],
          destination_addresses: [
            'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada'
          ],
          rows: [
            {
              elements: [
                {
                  status: 'OK',
                  distance: {
                    text: '1 m',
                    value: 0
                  },
                  duration: {
                    value: 0,
                    text: ''
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                }
              ]
            }
          ]
        },
        {
          origin_addresses: [
            'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
            '3377 Grandview St N, Oshawa, ON L1H 8L7, Canada'
          ],
          destination_addresses: [
            'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
            '3377 Grandview St N, Oshawa, ON L1H 8L7, Canada'
          ],
          rows: [
            {
              elements: [
                {
                  status: 'OK',
                  distance: {
                    text: '1 m',
                    value: 0
                  },
                  duration: {
                    value: 0,
                    text: ''
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                },
                {
                  status: 'OK',
                  distance: {
                    text: '12.0 km',
                    value: 11993
                  },
                  duration: {
                    value: 923,
                    text: '15m23s'
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                }
              ]
            },
            {
              elements: [
                {
                  status: 'OK',
                  distance: {
                    text: '12.0 km',
                    value: 12001
                  },
                  duration: {
                    value: 903,
                    text: '15m3s'
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                },
                {
                  status: 'OK',
                  distance: {
                    text: '1 m',
                    value: 0
                  },
                  duration: {
                    value: 0,
                    text: ''
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                }
              ]
            }
          ]
        },
        {
          origin_addresses: [
            'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
            '3377 Grandview St N, Oshawa, ON L1H 8L7, Canada',
            '419 King St W, Oshawa, ON L1J 2K5, Canada'
          ],
          destination_addresses: [
            'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
            '3377 Grandview St N, Oshawa, ON L1H 8L7, Canada',
            '419 King St W, Oshawa, ON L1J 2K5, Canada'
          ],
          rows: [
            {
              elements: [
                {
                  status: 'OK',
                  distance: {
                    text: '1 m',
                    value: 0
                  },
                  duration: {
                    value: 0,
                    text: ''
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                },
                {
                  status: 'OK',
                  distance: {
                    text: '12.0 km',
                    value: 11993
                  },
                  duration: {
                    value: 923,
                    text: '15m23s'
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                },
                {
                  status: 'OK',
                  distance: {
                    text: '6.5 km',
                    value: 6528
                  },
                  duration: {
                    value: 632,
                    text: '10m32s'
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                }
              ]
            },
            {
              elements: [
                {
                  status: 'OK',
                  distance: {
                    text: '12.0 km',
                    value: 12001
                  },
                  duration: {
                    value: 903,
                    text: '15m3s'
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                },
                {
                  status: 'OK',
                  distance: {
                    text: '1 m',
                    value: 0
                  },
                  duration: {
                    value: 0,
                    text: ''
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                },
                {
                  status: 'OK',
                  distance: {
                    text: '16.1 km',
                    value: 16144
                  },
                  duration: {
                    value: 1292,
                    text: '21m32s'
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                }
              ]
            },
            {
              elements: [
                {
                  status: 'OK',
                  distance: {
                    text: '6.5 km',
                    value: 6547
                  },
                  duration: {
                    value: 604,
                    text: '10m4s'
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                },
                {
                  status: 'OK',
                  distance: {
                    text: '16.2 km',
                    value: 16209
                  },
                  duration: {
                    value: 1282,
                    text: '21m22s'
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                },
                {
                  status: 'OK',
                  distance: {
                    text: '1 m',
                    value: 0
                  },
                  duration: {
                    value: 0,
                    text: ''
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  }
                }
              ]
            }
          ]
        }
      ]
    ],
    distanceMatrixRequestForms: [
      [
        {
          origins: [
            'Oshawa Executive Airport, Airport Boulevard, Oshawa, ON, Canada'
          ],
          destinations: [
            'Oshawa Executive Airport, Airport Boulevard, Oshawa, ON, Canada'
          ]
        },
        {
          origins: [
            'Oshawa Executive Airport, Airport Boulevard, Oshawa, ON, Canada',
            'Oshawa Zoo, Grandview Street North, Oshawa, ON, Canada'
          ],
          destinations: [
            'Oshawa Executive Airport, Airport Boulevard, Oshawa, ON, Canada',
            'Oshawa Zoo, Grandview Street North, Oshawa, ON, Canada'
          ]
        },
        {
          origins: [
            'Oshawa Executive Airport, Airport Boulevard, Oshawa, ON, Canada',
            'Oshawa Zoo, Grandview Street North, Oshawa, ON, Canada',
            'Oshawa Centre, King Street West, Oshawa, ON, Canada'
          ],
          destinations: [
            'Oshawa Executive Airport, Airport Boulevard, Oshawa, ON, Canada',
            'Oshawa Zoo, Grandview Street North, Oshawa, ON, Canada',
            'Oshawa Centre, King Street West, Oshawa, ON, Canada'
          ]
        }
      ]
    ],
    distanceMatrixResponseRemovalRequests: []
  },
  waypoints: {
    waypointForms: [
      [
        {
          name: 'New Waypoint',
          waypoint: null,
          parentIndex: 0
        },
        {
          name: 'New Waypoint',
          waypoint: null,
          parentIndex: 0
        },
        {
          name: 'New Waypoint',
          waypoint: null,
          parentIndex: 0
        }
      ]
    ],
    waypoints: [
      [
        {
          name: 'Oshawa Executive Airport, Airport Boulevard, Oshawa, ON, Canada',
          waypoint: {
            description: 'Oshawa Executive Airport, Airport Boulevard, Oshawa, ON, Canada',
            place_id: 'ChIJlX7vg28c1YkR2Wjs0SBKqTo',
            types: [
              'airport',
              'point_of_interest',
              'establishment'
            ],
            matched_substrings: [
              {
                length: 6,
                offset: 0
              }
            ],
            terms: [
              {
                value: 'Oshawa Executive Airport',
                offset: 0
              },
              {
                value: 'Airport Boulevard',
                offset: 26
              },
              {
                value: 'Oshawa',
                offset: 45
              },
              {
                value: 'ON',
                offset: 53
              },
              {
                value: 'Canada',
                offset: 57
              }
            ],
            structured_formatting: {
              main_text: 'Oshawa Executive Airport',
              main_text_matched_substrings: [
                {
                  length: 6,
                  offset: 0
                }
              ],
              secondary_text: 'Airport Boulevard, Oshawa, ON, Canada'
            }
          },
          parentIndex: 0,
          waypointGeocode: [
            {
              address_components: [
                {
                  long_name: 'Oshawa Executive Airport',
                  short_name: 'Oshawa Executive Airport',
                  types: [
                    'airport',
                    'establishment',
                    'point_of_interest'
                  ]
                },
                {
                  long_name: '1200',
                  short_name: '1200',
                  types: [
                    'street_number'
                  ]
                },
                {
                  long_name: 'Airport Boulevard',
                  short_name: 'Airport Blvd',
                  types: [
                    'route'
                  ]
                },
                {
                  long_name: 'Northglen',
                  short_name: 'Northglen',
                  types: [
                    'neighborhood',
                    'political'
                  ]
                },
                {
                  long_name: 'Oshawa',
                  short_name: 'Oshawa',
                  types: [
                    'locality',
                    'political'
                  ]
                },
                {
                  long_name: 'Regional Municipality of Durham',
                  short_name: 'Regional Municipality of Durham',
                  types: [
                    'administrative_area_level_2',
                    'political'
                  ]
                },
                {
                  long_name: 'Ontario',
                  short_name: 'ON',
                  types: [
                    'administrative_area_level_1',
                    'political'
                  ]
                },
                {
                  long_name: 'Canada',
                  short_name: 'CA',
                  types: [
                    'country',
                    'political'
                  ]
                },
                {
                  long_name: 'L1J 8P5',
                  short_name: 'L1J 8P5',
                  types: [
                    'postal_code'
                  ]
                }
              ],
              formatted_address: 'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
              geometry: {
                location: {
                  lat: 43.9255276,
                  lng: -78.8968021
                },
                location_type: 'ROOFTOP',
                bounds: {
                  northeast: {
                    lat: 0,
                    lng: 0
                  },
                  southwest: {
                    lat: 0,
                    lng: 0
                  }
                },
                viewport: {
                  northeast: {
                    lat: 43.92687658029149,
                    lng: -78.89545311970849
                  },
                  southwest: {
                    lat: 43.92417861970849,
                    lng: -78.89815108029151
                  }
                },
                types: null
              },
              types: [
                'airport',
                'establishment',
                'point_of_interest'
              ],
              place_id: 'ChIJlX7vg28c1YkR2Wjs0SBKqTo',
              partial_match: false,
              plus_code: {
                global_code: '87M3W4G3+67',
                compound_code: 'W4G3+67 Oshawa, ON, Canada'
              }
            }
          ]
        },
        {
          name: 'Oshawa Zoo, Grandview Street North, Oshawa, ON, Canada',
          waypoint: {
            description: 'Oshawa Zoo, Grandview Street North, Oshawa, ON, Canada',
            place_id: 'ChIJEY8J2Jca1YkRkfu9vSP4ZIw',
            types: [
              'zoo',
              'tourist_attraction',
              'point_of_interest',
              'establishment'
            ],
            matched_substrings: [
              {
                length: 6,
                offset: 0
              }
            ],
            terms: [
              {
                value: 'Oshawa Zoo',
                offset: 0
              },
              {
                value: 'Grandview Street North',
                offset: 12
              },
              {
                value: 'Oshawa',
                offset: 36
              },
              {
                value: 'ON',
                offset: 44
              },
              {
                value: 'Canada',
                offset: 48
              }
            ],
            structured_formatting: {
              main_text: 'Oshawa Zoo',
              main_text_matched_substrings: [
                {
                  length: 6,
                  offset: 0
                }
              ],
              secondary_text: 'Grandview Street North, Oshawa, ON, Canada'
            }
          },
          parentIndex: 0,
          waypointGeocode: [
            {
              address_components: [
                {
                  long_name: '3377',
                  short_name: '3377',
                  types: [
                    'street_number'
                  ]
                },
                {
                  long_name: 'Grandview Street North',
                  short_name: 'Grandview St N',
                  types: [
                    'route'
                  ]
                },
                {
                  long_name: 'Rural Oshawa',
                  short_name: 'Rural Oshawa',
                  types: [
                    'neighborhood',
                    'political'
                  ]
                },
                {
                  long_name: 'Oshawa',
                  short_name: 'Oshawa',
                  types: [
                    'locality',
                    'political'
                  ]
                },
                {
                  long_name: 'Regional Municipality of Durham',
                  short_name: 'Regional Municipality of Durham',
                  types: [
                    'administrative_area_level_2',
                    'political'
                  ]
                },
                {
                  long_name: 'Ontario',
                  short_name: 'ON',
                  types: [
                    'administrative_area_level_1',
                    'political'
                  ]
                },
                {
                  long_name: 'Canada',
                  short_name: 'CA',
                  types: [
                    'country',
                    'political'
                  ]
                },
                {
                  long_name: 'L1H 8L7',
                  short_name: 'L1H 8L7',
                  types: [
                    'postal_code'
                  ]
                }
              ],
              formatted_address: '3377 Grandview St N, Oshawa, ON L1H 8L7, Canada',
              geometry: {
                location: {
                  lat: 43.9944942,
                  lng: -78.8608178
                },
                location_type: 'ROOFTOP',
                bounds: {
                  northeast: {
                    lat: 0,
                    lng: 0
                  },
                  southwest: {
                    lat: 0,
                    lng: 0
                  }
                },
                viewport: {
                  northeast: {
                    lat: 43.99584318029149,
                    lng: -78.85946881970851
                  },
                  southwest: {
                    lat: 43.9931452197085,
                    lng: -78.86216678029152
                  }
                },
                types: null
              },
              types: [
                'establishment',
                'point_of_interest',
                'tourist_attraction',
                'zoo'
              ],
              place_id: 'ChIJEY8J2Jca1YkRkfu9vSP4ZIw',
              partial_match: false,
              plus_code: {
                global_code: '87M3X4VQ+QM',
                compound_code: 'X4VQ+QM Oshawa, ON, Canada'
              }
            }
          ]
        },
        {
          name: 'Oshawa Centre, King Street West, Oshawa, ON, Canada',
          waypoint: {
            description: 'Oshawa Centre, King Street West, Oshawa, ON, Canada',
            place_id: 'ChIJ71ijPAEd1YkRAs73CuBfEX4',
            types: [
              'shopping_mall',
              'point_of_interest',
              'establishment'
            ],
            matched_substrings: [
              {
                length: 6,
                offset: 0
              }
            ],
            terms: [
              {
                value: 'Oshawa Centre',
                offset: 0
              },
              {
                value: 'King Street West',
                offset: 15
              },
              {
                value: 'Oshawa',
                offset: 33
              },
              {
                value: 'ON',
                offset: 41
              },
              {
                value: 'Canada',
                offset: 45
              }
            ],
            structured_formatting: {
              main_text: 'Oshawa Centre',
              main_text_matched_substrings: [
                {
                  length: 6,
                  offset: 0
                }
              ],
              secondary_text: 'King Street West, Oshawa, ON, Canada'
            }
          },
          parentIndex: 0,
          waypointGeocode: [
            {
              address_components: [
                {
                  long_name: '419',
                  short_name: '419',
                  types: [
                    'street_number'
                  ]
                },
                {
                  long_name: 'King Street West',
                  short_name: 'King St W',
                  types: [
                    'route'
                  ]
                },
                {
                  long_name: 'Vanier',
                  short_name: 'Vanier',
                  types: [
                    'neighborhood',
                    'political'
                  ]
                },
                {
                  long_name: 'Oshawa',
                  short_name: 'Oshawa',
                  types: [
                    'locality',
                    'political'
                  ]
                },
                {
                  long_name: 'Regional Municipality of Durham',
                  short_name: 'Regional Municipality of Durham',
                  types: [
                    'administrative_area_level_2',
                    'political'
                  ]
                },
                {
                  long_name: 'Ontario',
                  short_name: 'ON',
                  types: [
                    'administrative_area_level_1',
                    'political'
                  ]
                },
                {
                  long_name: 'Canada',
                  short_name: 'CA',
                  types: [
                    'country',
                    'political'
                  ]
                },
                {
                  long_name: 'L1J 2K5',
                  short_name: 'L1J 2K5',
                  types: [
                    'postal_code'
                  ]
                }
              ],
              formatted_address: '419 King St W, Oshawa, ON L1J 2K5, Canada',
              geometry: {
                location: {
                  lat: 43.8907422,
                  lng: -78.87987009999999
                },
                location_type: 'ROOFTOP',
                bounds: {
                  northeast: {
                    lat: 0,
                    lng: 0
                  },
                  southwest: {
                    lat: 0,
                    lng: 0
                  }
                },
                viewport: {
                  northeast: {
                    lat: 43.89209118029149,
                    lng: -78.8785211197085
                  },
                  southwest: {
                    lat: 43.8893932197085,
                    lng: -78.8812190802915
                  }
                },
                types: null
              },
              types: [
                'establishment',
                'point_of_interest',
                'shopping_mall'
              ],
              place_id: 'ChIJ71ijPAEd1YkRAs73CuBfEX4',
              partial_match: false,
              plus_code: {
                global_code: '87M3V4RC+73',
                compound_code: 'V4RC+73 Oshawa, ON, Canada'
              }
            }
          ]
        }
      ]
    ],
    waypointGroupRemovalRequests: [],
    waypointRemovalRequests: [
      []
    ],
    waypointReorderingRequests: [
      []
    ],
    selectedTripWaypointIndex: [
      2
    ]
  },
  directions: {
    directions: [
      [
        {
          matrixElements: []
        },
        {
          matrixElements: [
            {
              row: 0,
              column: 1
            }
          ]
        },
        {
          matrixElements: [
            {
              row: 0,
              column: 1
            },
            {
              row: 1,
              column: 2
            }
          ]
        }
      ]
    ],
    selectedDistanceMatrixElements: [
      [
        {
          status: 'OK',
          distance: {
            text: '12.0 km',
            value: 11993
          },
          duration: {
            value: 923,
            text: '15m23s'
          },
          duration_in_traffic: {
            value: 0,
            text: ''
          }
        },
        {
          status: 'OK',
          distance: {
            text: '16.1 km',
            value: 16144
          },
          duration: {
            value: 1292,
            text: '21m32s'
          },
          duration_in_traffic: {
            value: 0,
            text: ''
          }
        }
      ]
    ],
    directionsRemovalRequests: [],
    currentDistancesInMeters: [
      28137
    ],
    currentDurationsInSeconds: [
      2215
    ],
    directionsResponses: [
      [
        {
          routes: [
            {
              summary: 'Airport Blvd',
              legs: [
                {
                  steps: [
                    {
                      html_instructions: 'Head on <b>Airport Blvd</b>',
                      distance: {
                        text: '1 m',
                        value: 0
                      },
                      start_location: {
                        lat: 43.9257839,
                        lng: -78.896923
                      },
                      end_location: {
                        lat: 43.9257839,
                        lng: -78.896923
                      },
                      polyline: {
                        points: 'cgbkGvpp`N'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 0,
                        text: ''
                      }
                    }
                  ],
                  distance: {
                    text: '1 m',
                    value: 0
                  },
                  start_location: {
                    lat: 43.9257839,
                    lng: -78.896923
                  },
                  end_location: {
                    lat: 43.9257839,
                    lng: -78.896923
                  },
                  start_address: 'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
                  end_address: 'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
                  via_waypoint: [],
                  duration: {
                    value: 0,
                    text: ''
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  },
                  arrival_time: null,
                  departure_time: null
                }
              ],
              waypoint_order: [],
              overview_polyline: {
                points: 'cgbkGvpp`N'
              },
              bounds: {
                northeast: {
                  lat: 43.9257839,
                  lng: -78.896923
                },
                southwest: {
                  lat: 43.9257839,
                  lng: -78.896923
                }
              },
              copyrights: 'Map data ©2020',
              warnings: [],
              fare: null
            }
          ],
          geocoded_waypoints: [
            {
              geocoder_status: 'OK',
              partial_match: false,
              place_id: 'ChIJlX7vg28c1YkR2Wjs0SBKqTo',
              types: [
                'airport',
                'establishment',
                'point_of_interest'
              ]
            },
            {
              geocoder_status: 'OK',
              partial_match: false,
              place_id: 'ChIJlX7vg28c1YkR2Wjs0SBKqTo',
              types: [
                'airport',
                'establishment',
                'point_of_interest'
              ]
            }
          ]
        },
        {
          routes: [
            {
              summary: 'Airport Blvd',
              legs: [
                {
                  steps: [
                    {
                      html_instructions: 'Head on <b>Airport Blvd</b>',
                      distance: {
                        text: '1 m',
                        value: 0
                      },
                      start_location: {
                        lat: 43.9257839,
                        lng: -78.896923
                      },
                      end_location: {
                        lat: 43.9257839,
                        lng: -78.896923
                      },
                      polyline: {
                        points: 'cgbkGvpp`N'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 0,
                        text: ''
                      }
                    }
                  ],
                  distance: {
                    text: '1 m',
                    value: 0
                  },
                  start_location: {
                    lat: 43.9257839,
                    lng: -78.896923
                  },
                  end_location: {
                    lat: 43.9257839,
                    lng: -78.896923
                  },
                  start_address: 'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
                  end_address: 'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
                  via_waypoint: [],
                  duration: {
                    value: 0,
                    text: ''
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  },
                  arrival_time: null,
                  departure_time: null
                },
                {
                  steps: [
                    {
                      html_instructions: 'Head <b>west</b> on <b>Airport Blvd</b> toward <b>Aviator Ln</b>',
                      distance: {
                        text: '0.4 km',
                        value: 371
                      },
                      start_location: {
                        lat: 43.9257839,
                        lng: -78.896923
                      },
                      end_location: {
                        lat: 43.9285649,
                        lng: -78.8982399
                      },
                      polyline: {
                        points: 'cgbkGvpp`NJp@@ZEVCHKJMDU?GCeAQWAU@UBkBn@eBj@?@[@ODMDaBj@'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 76,
                        text: '1m16s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>right</b> onto <b>Taunton Rd W</b>/<wbr/><b>Durham Regional Rd 4</b>',
                      distance: {
                        text: '2.4 km',
                        value: 2447
                      },
                      start_location: {
                        lat: 43.9285649,
                        lng: -78.8982399
                      },
                      end_location: {
                        lat: 43.9350795,
                        lng: -78.86910449999999
                      },
                      polyline: {
                        points: 'oxbkG~xp`Nw@{F?AMSsBcO@a@?A]sCeAwGQa@UiBCKS_BQwAq@aFUeBWcB_@qCs@aFE]QmAo@oEWoBUeBy@aGoAcJm@oEYqBW}BQqAy@wFIs@_AqGCKAM?QKy@Go@CSIe@Kq@?G[iCw@}FYyB[sBEYIo@q@{E'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 215,
                        text: '3m35s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>left</b> onto <b>Ritson Rd N</b>/<wbr/><b>Durham Regional Rd 16</b>',
                      distance: {
                        text: '4.3 km',
                        value: 4274
                      },
                      start_location: {
                        lat: 43.9350795,
                        lng: -78.86910449999999
                      },
                      end_location: {
                        lat: 43.9714622,
                        lng: -78.8858411
                      },
                      polyline: {
                        points: 'gadkGzbk`NWHuA^e@Lg@NGBKBSFOFWHgA`@gBp@[Ji@Ra@NS?_Bh@q@ViC|@wAf@UAQHk@RuAf@aCx@gC|@QJKFQFyAh@iA`@{@\\iC`Ag@Nc@Pk@TwDrAqGxBmFhBKDwC`AoFjBaA\\oC`AkBp@q@P_ALoB\\]L}@VuIxCkDjAsBp@wJbDyJ`DgBl@mEvAcA\\gBj@a@NqIpCmA^]L{KpDc@La@NqGtBIBWJc@Le@P}@^}A~@ID_CjBMLgAxAk@p@'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 331,
                        text: '5m31s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>right</b> onto <b>Winchester Rd E</b>/<wbr/><b>Durham Regional Rd 3</b>',
                      distance: {
                        text: '2.8 km',
                        value: 2850
                      },
                      start_location: {
                        lat: 43.9714622,
                        lng: -78.8858411
                      },
                      end_location: {
                        lat: 43.9793949,
                        lng: -78.85225729999999
                      },
                      polyline: {
                        points: 'sdkkGnkn`Na@eAO_@EK_@}@CG_@aAYq@GSUq@K[?AK[CMEKK_@?AI_@Ke@EUMk@G_@Gi@I{@AMEa@Eo@Ei@Aa@Cc@CaA?Q?q@Ac@?cDAcDAW?WAa@Ck@AIA_@Cc@Gk@Ec@Gk@K_AOuAOqAUmBSgBMiAKq@CKIk@ACIa@i@aCe@yBg@yBo@uCu@gDOq@AGOs@Oy@UsACSOy@EYQgAAEUuAc@qCWaBIi@SwAU}A]yBOcAc@qCMy@[uBKm@U}AO_AIk@QqAKo@Gc@AKq@wEOeAKo@YoBe@kDKo@AG]gCYkBKo@U}AKo@?CIi@Ko@YgBa@mCk@aE'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 156,
                        text: '2m36s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>left</b> onto <b>Durham Regional Rd 3</b>',
                      distance: {
                        text: '1.9 km',
                        value: 1866
                      },
                      start_location: {
                        lat: 43.9793949,
                        lng: -78.85225729999999
                      },
                      end_location: {
                        lat: 43.9938481,
                        lng: -78.86256870000001
                      },
                      polyline: {
                        points: 'evlkGryg`Ng@PcA^A?_@PiAh@YL_Ah@s@d@s@n@{@nAq@fAm@vAg@lAWt@}@fCaAjC]v@_@p@[f@a@f@q@z@URy@x@_Ad@oB~@wDlAsBt@aEvAsC|@wBn@IBuEjBaAZgCz@gBj@a@P_DhAm@P}@TgARe@H'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 103,
                        text: '1m43s'
                      }
                    },
                    {
                      html_instructions: 'Continue straight onto <b>Grandview St N</b>',
                      distance: {
                        text: '26 m',
                        value: 26
                      },
                      start_location: {
                        lat: 43.9938481,
                        lng: -78.86256870000001
                      },
                      end_location: {
                        lat: 43.9940679,
                        lng: -78.86267289999999
                      },
                      polyline: {
                        points: 'qpokG`zi`Nk@R'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 19,
                        text: '19s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>right</b><div style="font-size:0.9em">Destination will be on the left</div>',
                      distance: {
                        text: '0.2 km',
                        value: 159
                      },
                      start_location: {
                        lat: 43.9940679,
                        lng: -78.86267289999999
                      },
                      end_location: {
                        lat: 43.9944595,
                        lng: -78.8608179
                      },
                      polyline: {
                        points: '}qokGtzi`NSaBSQGSGa@Ce@Gc@I}A?[?C'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 23,
                        text: '23s'
                      }
                    }
                  ],
                  distance: {
                    text: '12.0 km',
                    value: 11993
                  },
                  start_location: {
                    lat: 43.9257839,
                    lng: -78.896923
                  },
                  end_location: {
                    lat: 43.9944595,
                    lng: -78.8608179
                  },
                  start_address: 'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
                  end_address: '3377 Grandview St N, Oshawa, ON L1H 8L7, Canada',
                  via_waypoint: [],
                  duration: {
                    value: 923,
                    text: '15m23s'
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  },
                  arrival_time: null,
                  departure_time: null
                }
              ],
              waypoint_order: [
                0
              ],
              overview_polyline: {
                points: 'cgbkGvpp`NLlAI`@KJMD]C}ASk@DqEzA[B]JaBj@w@{FMUsBcO@a@]uCeAwGQa@YuBe@wD_C}P{B}OwD{XqBqOgCiQA_@SiBYsBsAgKu@mFOiAq@{EWH{Bl@o@RgA\\uFrBa@NS?qC`AaFdBUAQHaCz@iGvB]RkBp@wHpCyOtFaS|GqE~AkBp@q@PoDj@{Ad@aOdFkNtEsVdIiPlFwYpJcBp@gBdAmCxBsBjCwAoDeAoCcAgDi@gC[sCS}CGiDEcKGoBSsCs@sGcAqIY}A_GaXiByKaEcXcCiPcDiUqBgNsBgNmCbAcBv@sBnAs@n@{@nAq@fAm@vA_AbC_CrG}@hB}@nAgAnAy@x@_Ad@oB~@wDlAuHlCkGlB_FnBsItC_DhAm@P}@TgARe@Hk@RSaBSQGSGa@KiAI}B'
              },
              bounds: {
                northeast: {
                  lat: 43.9944595,
                  lng: -78.85225729999999
                },
                southwest: {
                  lat: 43.9257125,
                  lng: -78.8982399
                }
              },
              copyrights: 'Map data ©2020 Google',
              warnings: [],
              fare: null
            }
          ],
          geocoded_waypoints: [
            {
              geocoder_status: 'OK',
              partial_match: false,
              place_id: 'ChIJlX7vg28c1YkR2Wjs0SBKqTo',
              types: [
                'airport',
                'establishment',
                'point_of_interest'
              ]
            },
            {
              geocoder_status: 'OK',
              partial_match: false,
              place_id: 'ChIJlX7vg28c1YkR2Wjs0SBKqTo',
              types: [
                'airport',
                'establishment',
                'point_of_interest'
              ]
            },
            {
              geocoder_status: 'OK',
              partial_match: false,
              place_id: 'ChIJEY8J2Jca1YkRkfu9vSP4ZIw',
              types: [
                'establishment',
                'point_of_interest',
                'tourist_attraction',
                'zoo'
              ]
            }
          ]
        },
        {
          routes: [
            {
              summary: 'Airport Blvd',
              legs: [
                {
                  steps: [
                    {
                      html_instructions: 'Head on <b>Airport Blvd</b>',
                      distance: {
                        text: '1 m',
                        value: 0
                      },
                      start_location: {
                        lat: 43.9257839,
                        lng: -78.896923
                      },
                      end_location: {
                        lat: 43.9257839,
                        lng: -78.896923
                      },
                      polyline: {
                        points: 'cgbkGvpp`N'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 0,
                        text: ''
                      }
                    }
                  ],
                  distance: {
                    text: '1 m',
                    value: 0
                  },
                  start_location: {
                    lat: 43.9257839,
                    lng: -78.896923
                  },
                  end_location: {
                    lat: 43.9257839,
                    lng: -78.896923
                  },
                  start_address: 'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
                  end_address: 'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
                  via_waypoint: [],
                  duration: {
                    value: 0,
                    text: ''
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  },
                  arrival_time: null,
                  departure_time: null
                },
                {
                  steps: [
                    {
                      html_instructions: 'Head <b>west</b> on <b>Airport Blvd</b> toward <b>Aviator Ln</b>',
                      distance: {
                        text: '0.4 km',
                        value: 371
                      },
                      start_location: {
                        lat: 43.9257839,
                        lng: -78.896923
                      },
                      end_location: {
                        lat: 43.9285649,
                        lng: -78.8982399
                      },
                      polyline: {
                        points: 'cgbkGvpp`NJp@@ZEVCHKJMDU?GCeAQWAU@UBkBn@eBj@?@[@ODMDaBj@'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 76,
                        text: '1m16s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>right</b> onto <b>Taunton Rd W</b>/<wbr/><b>Durham Regional Rd 4</b>',
                      distance: {
                        text: '2.4 km',
                        value: 2447
                      },
                      start_location: {
                        lat: 43.9285649,
                        lng: -78.8982399
                      },
                      end_location: {
                        lat: 43.9350795,
                        lng: -78.86910449999999
                      },
                      polyline: {
                        points: 'oxbkG~xp`Nw@{F?AMSsBcO@a@?A]sCeAwGQa@UiBCKS_BQwAq@aFUeBWcB_@qCs@aFE]QmAo@oEWoBUeBy@aGoAcJm@oEYqBW}BQqAy@wFIs@_AqGCKAM?QKy@Go@CSIe@Kq@?G[iCw@}FYyB[sBEYIo@q@{E'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 215,
                        text: '3m35s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>left</b> onto <b>Ritson Rd N</b>/<wbr/><b>Durham Regional Rd 16</b>',
                      distance: {
                        text: '4.3 km',
                        value: 4274
                      },
                      start_location: {
                        lat: 43.9350795,
                        lng: -78.86910449999999
                      },
                      end_location: {
                        lat: 43.9714622,
                        lng: -78.8858411
                      },
                      polyline: {
                        points: 'gadkGzbk`NWHuA^e@Lg@NGBKBSFOFWHgA`@gBp@[Ji@Ra@NS?_Bh@q@ViC|@wAf@UAQHk@RuAf@aCx@gC|@QJKFQFyAh@iA`@{@\\iC`Ag@Nc@Pk@TwDrAqGxBmFhBKDwC`AoFjBaA\\oC`AkBp@q@P_ALoB\\]L}@VuIxCkDjAsBp@wJbDyJ`DgBl@mEvAcA\\gBj@a@NqIpCmA^]L{KpDc@La@NqGtBIBWJc@Le@P}@^}A~@ID_CjBMLgAxAk@p@'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 331,
                        text: '5m31s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>right</b> onto <b>Winchester Rd E</b>/<wbr/><b>Durham Regional Rd 3</b>',
                      distance: {
                        text: '2.8 km',
                        value: 2850
                      },
                      start_location: {
                        lat: 43.9714622,
                        lng: -78.8858411
                      },
                      end_location: {
                        lat: 43.9793949,
                        lng: -78.85225729999999
                      },
                      polyline: {
                        points: 'sdkkGnkn`Na@eAO_@EK_@}@CG_@aAYq@GSUq@K[?AK[CMEKK_@?AI_@Ke@EUMk@G_@Gi@I{@AMEa@Eo@Ei@Aa@Cc@CaA?Q?q@Ac@?cDAcDAW?WAa@Ck@AIA_@Cc@Gk@Ec@Gk@K_AOuAOqAUmBSgBMiAKq@CKIk@ACIa@i@aCe@yBg@yBo@uCu@gDOq@AGOs@Oy@UsACSOy@EYQgAAEUuAc@qCWaBIi@SwAU}A]yBOcAc@qCMy@[uBKm@U}AO_AIk@QqAKo@Gc@AKq@wEOeAKo@YoBe@kDKo@AG]gCYkBKo@U}AKo@?CIi@Ko@YgBa@mCk@aE'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 156,
                        text: '2m36s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>left</b> onto <b>Durham Regional Rd 3</b>',
                      distance: {
                        text: '1.9 km',
                        value: 1866
                      },
                      start_location: {
                        lat: 43.9793949,
                        lng: -78.85225729999999
                      },
                      end_location: {
                        lat: 43.9938481,
                        lng: -78.86256870000001
                      },
                      polyline: {
                        points: 'evlkGryg`Ng@PcA^A?_@PiAh@YL_Ah@s@d@s@n@{@nAq@fAm@vAg@lAWt@}@fCaAjC]v@_@p@[f@a@f@q@z@URy@x@_Ad@oB~@wDlAsBt@aEvAsC|@wBn@IBuEjBaAZgCz@gBj@a@P_DhAm@P}@TgARe@H'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 103,
                        text: '1m43s'
                      }
                    },
                    {
                      html_instructions: 'Continue straight onto <b>Grandview St N</b>',
                      distance: {
                        text: '26 m',
                        value: 26
                      },
                      start_location: {
                        lat: 43.9938481,
                        lng: -78.86256870000001
                      },
                      end_location: {
                        lat: 43.9940679,
                        lng: -78.86267289999999
                      },
                      polyline: {
                        points: 'qpokG`zi`Nk@R'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 19,
                        text: '19s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>right</b><div style="font-size:0.9em">Destination will be on the left</div>',
                      distance: {
                        text: '0.2 km',
                        value: 159
                      },
                      start_location: {
                        lat: 43.9940679,
                        lng: -78.86267289999999
                      },
                      end_location: {
                        lat: 43.9944595,
                        lng: -78.8608179
                      },
                      polyline: {
                        points: '}qokGtzi`NSaBSQGSGa@Ce@Gc@I}A?[?C'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 23,
                        text: '23s'
                      }
                    }
                  ],
                  distance: {
                    text: '12.0 km',
                    value: 11993
                  },
                  start_location: {
                    lat: 43.9257839,
                    lng: -78.896923
                  },
                  end_location: {
                    lat: 43.9944595,
                    lng: -78.8608179
                  },
                  start_address: 'Oshawa Executive Airport, 1200 Airport Blvd, Oshawa, ON L1J 8P5, Canada',
                  end_address: '3377 Grandview St N, Oshawa, ON L1H 8L7, Canada',
                  via_waypoint: [],
                  duration: {
                    value: 923,
                    text: '15m23s'
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  },
                  arrival_time: null,
                  departure_time: null
                },
                {
                  steps: [
                    {
                      html_instructions: 'Head <b>west</b> toward <b>Grandview St N</b>',
                      distance: {
                        text: '0.2 km',
                        value: 159
                      },
                      start_location: {
                        lat: 43.9944595,
                        lng: -78.8608179
                      },
                      end_location: {
                        lat: 43.9940679,
                        lng: -78.86267289999999
                      },
                      polyline: {
                        points: 'ktokGboi`N?B?ZH|AFb@Bd@F`@FRRPR`B'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 20,
                        text: '20s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>left</b> onto <b>Grandview St N</b>/<wbr/><b>Durham Regional Rd 3</b><div style="font-size:0.9em">Continue to follow Durham Regional Rd 3</div>',
                      distance: {
                        text: '4.7 km',
                        value: 4742
                      },
                      start_location: {
                        lat: 43.9940679,
                        lng: -78.86267289999999
                      },
                      end_location: {
                        lat: 43.9714622,
                        lng: -78.8858411
                      },
                      polyline: {
                        points: '}qokGtzi`Nj@Sd@IfAS|@Ul@Q~CiA`@QfBk@fC{@`A[tEkBHCvBo@rC}@`EwArBu@vDmAnB_A~@e@x@y@TSp@{@`@g@Zg@^q@\\w@`AkC|@gCVu@f@mAl@wAp@gAz@oAr@o@r@e@~@i@XMhAi@^Q@?bA_@f@Qj@`E`@lCXfBJn@Hh@?BJn@T|AJn@XjB\\fC@FJn@d@jDXnBJn@NdAp@vE@JFb@Jn@PpAHj@N~@T|AJl@ZtBLx@b@pCNbA\\xBT|ARvAHh@V`Bb@pCTtA@DPfADXNx@BRTrANx@Nr@@FNp@t@fDn@tCf@xBd@xBh@`CH`@@BHj@BJJp@LhARfBTlBNpANtAJ~@Fj@Db@Fj@Bb@@^@HBj@@`@?V@V@bD?bD@b@?p@?PB`ABb@@`@Dh@Dn@D`@@LHz@Fh@F^Lj@DTJd@H^?@J^DJBLJZ?@JZTp@FRXp@^`ABF^|@DJN^`@dA'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 300,
                        text: '5m0s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>left</b> onto <b>Ritson Rd N</b>/<wbr/><b>Durham Regional Rd 16</b>',
                      distance: {
                        text: '6.4 km',
                        value: 6355
                      },
                      start_location: {
                        lat: 43.9714622,
                        lng: -78.8858411
                      },
                      end_location: {
                        lat: 43.9172172,
                        lng: -78.8614691
                      },
                      polyline: {
                        points: 'sdkkGnkn`Nj@q@fAyALM~BkBHE|A_A|@_@d@Qb@MVKHCpGuB`@Ob@MzKqD\\MlA_@pIqC`@OfBk@bA]lEwAfBm@xJaDvJcDrBq@jDkAtIyC|@W\\MnB]~@Mp@QjBq@nCaA`A]nFkBvCaAJElFiBpGyBvDsAj@Ub@Qf@OhCaAz@]hAa@xAi@PGPA^ItBu@xG}BNOvAg@hC}@p@W~Ai@R?`@Oh@SZKfBq@fAa@VINGRGJCFCf@Od@MtA_@VIrA[ZIvA_@VILE~Ak@BAl@Sj@UtAa@nBw@p@UPD@?@?f@Q|Ag@bCs@z@]`@Ul@_@RGr@W|Ak@vIwC`@O`@OdA]rDoAhC}@fJ_DfBk@|Bw@dA_@`@Mr@WbA]pC_AXKfAa@\\Ij@Or@QdAYfAWnDw@'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 501,
                        text: '8m21s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>right</b> onto <b>Rossland Rd E</b>/<wbr/><b>Durham Regional Rd 28</b> (signs for <b>Regional Road 28</b>/<wbr/><b>Rossland Road E</b>)',
                      distance: {
                        text: '2.5 km',
                        value: 2478
                      },
                      start_location: {
                        lat: 43.9172172,
                        lng: -78.8614691
                      },
                      end_location: {
                        lat: 43.91073249999999,
                        lng: -78.8910432
                      },
                      polyline: {
                        points: 'sq`kGdsi`NVhBJn@^lCd@nE^vD^hC`@lCFh@n@hEPnA`@lCl@vELx@TfBHh@RtATjBDVHn@RdA^jCPnABTNfA\\|BLbA\\lCPjA^nC|@xGLrAR~AHj@Hr@Hf@VdBV|AXnBd@lDZxBh@xDf@tDZbCd@rD?DJx@Fd@d@lC^pCJr@?f@Z~BRbBHh@VjBVnB'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 209,
                        text: '3m29s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>left</b> onto <b>Stevenson Rd N</b>/<wbr/><b>Durham Regional Rd 53</b>',
                      distance: {
                        text: '2.1 km',
                        value: 2053
                      },
                      start_location: {
                        lat: 43.91073249999999,
                        lng: -78.8910432
                      },
                      end_location: {
                        lat: 43.8931143,
                        lng: -78.8834042
                      },
                      polyline: {
                        points: 'ai_kG~ko`NPCp@Ib@I|A_@pBs@PGlCgAVKPGHEfBm@jAa@rDoAfJ}ChA_@~Ai@nAc@z@YlC}@~CeAhDiAjDkAhA_@FCr@Qd@QvAe@nAc@nFgBjDkAzAi@xDoAdA[t@WbA]ZMjAa@'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 182,
                        text: '3m2s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>left</b> onto <b>King St W</b>',
                      distance: {
                        text: '71 m',
                        value: 71
                      },
                      start_location: {
                        lat: 43.8931143,
                        lng: -78.8834042
                      },
                      end_location: {
                        lat: 43.8933093,
                        lng: -78.8825557
                      },
                      polyline: {
                        points: '}z{jGf|m`Ng@gD'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 16,
                        text: '16s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>right</b>',
                      distance: {
                        text: '66 m',
                        value: 66
                      },
                      start_location: {
                        lat: 43.8933093,
                        lng: -78.8825557
                      },
                      end_location: {
                        lat: 43.8931945,
                        lng: -78.881873
                      },
                      polyline: {
                        points: 'e|{jG~vm`NCO\\WDM@[Iw@'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 17,
                        text: '17s'
                      }
                    },
                    {
                      html_instructions: 'Turn <b>right</b><div style="font-size:0.9em">Destination will be on the left</div>',
                      distance: {
                        text: '0.2 km',
                        value: 219
                      },
                      start_location: {
                        lat: 43.8931945,
                        lng: -78.881873
                      },
                      end_location: {
                        lat: 43.891377,
                        lng: -78.8809914
                      },
                      polyline: {
                        points: 'm{{jGtrm`N\\IVGJA`@I^I^I\\GREJE^QHEJQBGHMFKFC^ORI'
                      },
                      steps: null,
                      transit_details: null,
                      travel_mode: 'DRIVING',
                      duration: {
                        value: 47,
                        text: '47s'
                      }
                    }
                  ],
                  distance: {
                    text: '16.1 km',
                    value: 16143
                  },
                  start_location: {
                    lat: 43.9944595,
                    lng: -78.8608179
                  },
                  end_location: {
                    lat: 43.891377,
                    lng: -78.8809914
                  },
                  start_address: '3377 Grandview St N, Oshawa, ON L1H 8L7, Canada',
                  end_address: '419 King St W, Oshawa, ON L1J 2K5, Canada',
                  via_waypoint: [],
                  duration: {
                    value: 1292,
                    text: '21m32s'
                  },
                  duration_in_traffic: {
                    value: 0,
                    text: ''
                  },
                  arrival_time: null,
                  departure_time: null
                }
              ],
              waypoint_order: [
                0,
                1
              ],
              overview_polyline: {
                points: 'cgbkGvpp`NLlAI`@KJMD]C}ASk@DqEzA[B]JaBj@w@{FMUsBcO@a@]uCeAwGQa@YuBe@wD_C}P{B}OwD{XqBqOgCiQA_@SiBYsBsAgKu@mFOiAq@{EWH{Bl@o@RgA\\uFrBa@NS?qC`AaFdBUAQHaCz@iGvB]RkBp@wHpCyOtFaS|GqE~AkBp@q@PoDj@{Ad@aOdFkNtEsVdIiPlFwYpJcBp@gBdAmCxBsBjCwAoDeAoCcAgDi@gC[sCS}CGiDEcKGoBSsCs@sGcAqIY}A_GaXiByKaEcXcCiPcDiUqBgNsBgNmCbAcBv@sBnAs@n@{@nAq@fAm@vA_AbC_CrG}@hB}@nAgAnAy@x@_Ad@oB~@wDlAuHlCkGlB_FnBsItC_DhAm@P}@TgARe@Hk@RSaBSQGSGa@KiAIyB?C?BHxBJhAF`@FRRPR`Bj@Sd@IfAS|@Ul@Q~CiAhC}@hEwA~EoBjGmBtHmCvDmAnB_A~@e@x@y@fAoA|@oA|@iB~BsG~@cCl@wAp@gAz@oAr@o@rBoAdCiAjBq@lAnIn@dExCtSnCnRxC|RdDhTj@nDv@hExFjWf@rDhA|J`@zDJxBDtF@jGNpDVzCNhAR`A`@fBTv@bArChArCp@dBrBkClCyBfBeAbBq@z@Y`JwCxYqJhj@wQ|QkGnDk@p@QjBq@pE_BfKmDbU}HnAg@pDqApFqBPA^InKsDNOvAg@zDuA~Ai@R?jAc@bFiBv@WzDgA~EoA~CgA`Cw@`DmARDh@Q`F{A|As@l@_@RGpCcA`NuElWyIpQiGbEeAvFoAb@xC^lCd@nE^vD^hCh@vD`AxGrBfOx@bGnApI~@~GlCbS`@rDR~ArAzIrCvSlAvJxAxJ?f@Z~B\\lCn@zEbAM`Ci@bC{@`EaBd_@eMbSyGpAc@xAc@bQ}FpKmD~Ak@jAa@g@gDCO\\WDM@[Iw@\\Ib@I~Be@^Kh@W`@s@z@]'
              },
              bounds: {
                northeast: {
                  lat: 43.9944595,
                  lng: -78.85225729999999
                },
                southwest: {
                  lat: 43.891377,
                  lng: -78.8982399
                }
              },
              copyrights: 'Map data ©2020 Google',
              warnings: [],
              fare: null
            }
          ],
          geocoded_waypoints: [
            {
              geocoder_status: 'OK',
              partial_match: false,
              place_id: 'ChIJlX7vg28c1YkR2Wjs0SBKqTo',
              types: [
                'airport',
                'establishment',
                'point_of_interest'
              ]
            },
            {
              geocoder_status: 'OK',
              partial_match: false,
              place_id: 'ChIJlX7vg28c1YkR2Wjs0SBKqTo',
              types: [
                'airport',
                'establishment',
                'point_of_interest'
              ]
            },
            {
              geocoder_status: 'OK',
              partial_match: false,
              place_id: 'ChIJEY8J2Jca1YkRkfu9vSP4ZIw',
              types: [
                'establishment',
                'point_of_interest',
                'tourist_attraction',
                'zoo'
              ]
            },
            {
              geocoder_status: 'OK',
              partial_match: false,
              place_id: 'ChIJ71ijPAEd1YkRAs73CuBfEX4',
              types: [
                'establishment',
                'point_of_interest',
                'shopping_mall'
              ]
            }
          ]
        }
      ]
    ],
    directionsRequestForms: [
      []
    ],
    directionsResponseRemovalRequests: []
  },
  sidenav: {
    sidenav: {
      open: false
    }
  }
};
