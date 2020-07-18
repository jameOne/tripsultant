import { Action, createReducer, on } from '@ngrx/store';
import {
  addTripWaypoint,
  removeTripWaypoint,
  removeTripWaypointsGroup,
  setSelectedTripWaypointIndex,
  reorderWaypointGroups,
  setSelectedTripWaypointLocation,
  setSelectedTripWaypointName,
  setSelectedTripWaypointGeocode,
  removeSelectedTripWaypointIndex,
  addTripWaypointGroup,
  addInitialSelectedTripWaypointIndex
} from '../../actions/side-navigation-content/waypoint.actions';
import {
  initialWaypointState,
  WaypointsStateInterface
} from '../../states/side-navigation-content/waypoints.state';

const reducer = createReducer(
  initialWaypointState,
  on(addInitialSelectedTripWaypointIndex, (state) => ({
    ...state,
    selectedTripWaypointIndex: [...state.selectedTripWaypointIndex, -1]
  })),
  on(setSelectedTripWaypointName, (state, { index, name }) => ({
    ...state,
    waypoints: (state.waypoints[index][state.selectedTripWaypointIndex[index]] !== undefined) ? [
      ...state.waypoints.slice(0, index),
      [
        ...state.waypoints[index].slice(0, state.selectedTripWaypointIndex[index]),
        {
          name,
          waypoint: state.waypoints[index][state.selectedTripWaypointIndex[index]].waypoint,
          parentIndex: index
        },
        ...state.waypoints[index].slice(state.selectedTripWaypointIndex[index] + 1)
      ],
      ...state.waypoints.slice(index + 1)
    ] : [
      ...state.waypoints.slice(0, index),
      [
        ...state.waypoints[index].slice(0, state.selectedTripWaypointIndex[index]),
        {
          name,
          waypoint: null,
          parentIndex: index
        },
        ...state.waypoints[index].slice(state.selectedTripWaypointIndex[index] + 1)
      ],
      ...state.waypoints.slice(index + 1)
    ]
  })),
  on(setSelectedTripWaypointLocation, (state, { index, waypoint }) => ({
    ...state,
    waypoints: (state.waypoints[index][state.selectedTripWaypointIndex[index]] !== undefined) ? [
      ...state.waypoints.slice(0, index),
      [
        ...state.waypoints[index].slice(0, state.selectedTripWaypointIndex[index]),
        {
          name: state.waypoints[index][state.selectedTripWaypointIndex[index]].name,
          waypoint,
          parentIndex: index
        },
        ...state.waypoints[index].slice(state.selectedTripWaypointIndex[index] + 1)
      ],
      ...state.waypoints.slice(index + 1)
    ] : [
      ...state.waypoints.slice(0, index),
      [
        ...state.waypoints[index].slice(0, state.selectedTripWaypointIndex[index]),
        {
          name: null,
          waypoint,
          parentIndex: index
        },
        ...state.waypoints[index].slice(state.selectedTripWaypointIndex[index] + 1)
      ],
      ...state.waypoints.slice(index + 1)
    ]
  })),
  on(setSelectedTripWaypointGeocode, (state, { index, waypointGeocode }) => ({
    ...state,
    waypoints: [
      ...state.waypoints.slice(0, index),
      [
        ...state.waypoints[index].slice(0, state.selectedTripWaypointIndex[index]),
        {
          name: state.waypoints[index][state.selectedTripWaypointIndex[index]].name,
          waypoint: state.waypoints[index][state.selectedTripWaypointIndex[index]].waypoint,
          parentIndex: state.waypoints[index][state.selectedTripWaypointIndex[index]].parentIndex,
          waypointGeocode
        },
        ...state.waypoints[index].slice(state.selectedTripWaypointIndex[index] + 1)
      ],
      ...state.waypoints.slice(index + 1)
    ]
  })),
  on(removeTripWaypointsGroup, (state, { index }) => ({
    ...state,
    waypoints: [
      ...state.waypoints.slice(0, index),
      ...state.waypoints.slice(index + 1)
    ]
  })),
  on(addTripWaypoint, (state, { index, waypointForm }) => ({
    ...state,
    waypoints: (state.waypoints[index] !== undefined) ? [
      ...state.waypoints.slice(0, index),
      [...state.waypoints[index],
        {
          name: waypointForm.name,
          waypoint: waypointForm.waypoint,
          parentIndex: index
        }
      ],
      ...state.waypoints.slice(index + 1)
    ] : [
      ...state.waypoints.slice(0, index),
      [
        {
          name: waypointForm.name,
          waypoint: waypointForm.waypoint,
          parentIndex: index
        }
      ],
      ...state.waypoints.slice(index + 1)
    ]
  })),
  on(removeTripWaypoint, (state, { parentIndex, childIndex }) => ({
    ...state,
    waypoints: (state.waypoints[parentIndex] !== undefined) ? [
      ...state.waypoints.slice(0, parentIndex),
      [
        ...state.waypoints[parentIndex].slice(0, childIndex),
        ...state.waypoints[parentIndex].slice(childIndex + 1)
      ],
      ...state.waypoints.slice(parentIndex + 1)
    ] : [...state.waypoints]
  })),
  on(setSelectedTripWaypointIndex, (state, { parentIndex, childIndex }) => ({
    ...state,
    selectedTripWaypointIndex: [
      ...state.selectedTripWaypointIndex.slice(0, parentIndex),
      childIndex,
      ...state.selectedTripWaypointIndex.slice(parentIndex + 1)
    ]
  })),
  on(addTripWaypointGroup, (state) => ({
    ...state,
    waypoints: [...state.waypoints, []]
  })),
  on(reorderWaypointGroups, (state, { parentIndex, previousChildIndex, currentChildIndex }) => ({
    ...state,
    waypoints: [
      ...state.waypoints.slice(0, parentIndex),
      [
        ...[...state.waypoints[parentIndex].slice(0, previousChildIndex),
          ...state.waypoints[parentIndex].slice(previousChildIndex + 1)].slice(0, currentChildIndex),
        state.waypoints[parentIndex][previousChildIndex],
        ...[...state.waypoints[parentIndex].slice(0, previousChildIndex),
          ...state.waypoints[parentIndex].slice(previousChildIndex + 1)].slice(currentChildIndex)
      ],
      ...state.waypoints.slice(parentIndex + 1)
    ]
  })),
  on(removeSelectedTripWaypointIndex, (state, { index }) => ({
    ...state,
    selectedTripWaypointIndex: [
      ...state.selectedTripWaypointIndex.slice(0, index),
      ...state.selectedTripWaypointIndex.slice(index + 1)
    ]
  }))
);

export function waypointsReducer(state: WaypointsStateInterface | undefined, action: Action) {
  return reducer(state, action);
}

