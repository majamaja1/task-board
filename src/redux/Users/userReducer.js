import ACTIONS from '../../constants/ACTIONS';

const initialState = {
  allUsers: [
    {
      firstName: 'Maja',
      lastName: 'Novičić',
      avatarImg:
        'https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.0-9/84309051_316995162589871_626491713937997824_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=igiNM4m8VJcAX94IBS9&_nc_ht=scontent.fbeg2-1.fna&oh=769c80a14a61a0f47289f63ff8c0cb54&oe=5FD087F8',
      value: 0,
      name: 'Maja Novičić',
    },
    {
      firstName: 'Lazar',
      lastName: 'Petrović',
      avatarImg:
        'https://scontent.fbeg2-1.fna.fbcdn.net/v/t31.0-8/12604745_10205916865826283_2524659602923429022_o.jpg?_nc_cat=102&ccb=2&_nc_sid=a9b1d2&_nc_ohc=YJFeeTR8Z6EAX9Brm_3&_nc_ht=scontent.fbeg2-1.fna&oh=ac5fda57687eea68c0d68e45afccc339&oe=5FD16968',
      value: 1,
      name: 'Lazar Petrović',
    },
    {
      firstName: 'Petar',
      lastName: 'Brković',
      avatarImg:
        'https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.0-9/81497910_298182777805600_4340567655271366656_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=4JeSEYVRMeoAX85A96D&_nc_ht=scontent.fbeg2-1.fna&oh=27203b0b03488517583c77878356c7b7&oe=5FD1E9F6',
      value: 2,
      name: 'Petar Brković',
    },
  ],
};

export default function issueReducer(state = initialState, action) {
  const index = action.userId;
  const newArr = [...state.allUsers];
  newArr.splice(index, 1);
  switch (action.type) {
    case ACTIONS.ADD_USER_TO_LIST:
      return {
        ...state,
        allUsers: [
          ...state.allUsers,
          {
            name: action.user.name,
            value: state.allUsers.length,
          },
        ],
      };
    case ACTIONS.REMOVE_USER:
      return {
        ...state,
        allUsers: newArr.map((elem, i) => {
          if (i >= index) {
            return {
              ...elem,
              value: elem.value - 1,
            };
          }
          return elem;
        }),
      };

    default:
      return state;
  }
}
