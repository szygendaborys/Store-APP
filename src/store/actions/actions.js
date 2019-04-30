export const changeMenu = menuOpened => {
    return {
        type:'TOGGLE_MENU',
        value: !menuOpened
      }
}

export const toggleMenu = menuOpened => {
  return dispatch => {
    if (!menuOpened) {
      document.getElementById('cartArrow').style.transform = 'rotate(90deg)';
    } else {
      document.getElementById('cartArrow').style.transform = 'rotate(0deg)';
    }
    dispatch(changeMenu(menuOpened));
  }
}

export const toggleLike = (id, wasLiked) => {
  return {
    type:'ADD_LIKE',
    value:!wasLiked,
    id:id
  }
}

export const addLike = wasLiked => {
  return dispatch => {

    if(!wasLiked) {
      document.getElementById('likebutton').style.color = '#d82800';
    } else {
      document.getElementById('likebutton').style.color = '#98C1D9';
    }

    dispatch(toggleLike(wasLiked));
  }
}