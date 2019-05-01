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

export const toggleLike = (id, wasLiked, change) => {
  return {
    type:'ADD_LIKE',
    value:!wasLiked,
    id:id,
    change:change
  }
}

export const addLike = (id, wasLiked) => {
  return dispatch => {
    let change;
    if(!wasLiked) {
      document.getElementById(id+'likebutton').style.color = '#d82800';
      change = 1;
    } else {
      document.getElementById(id+'likebutton').style.color = '#98C1D9';
      change = -1;
    }

    dispatch(toggleLike(id, wasLiked, change));
  }
}

const removeItm = id => {
  return {
    type: 'REMOVE_ITEM',
    id: id
  }
}

export const removeItem = (id, orderedNum) => {
  return dispatch => {
    if(orderedNum === 1) {
      document.getElementById('item'+id).style.display = 'none';
    }
    dispatch(removeItm(id));
  } 
}