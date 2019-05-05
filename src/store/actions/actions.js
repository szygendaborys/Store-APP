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

const showMenuREDUCER = () => {
  return {
    type:'CHANGE_MENU'
  }
}

export const showMenu = toggleMenu => {
  return dispatch => {
    if(toggleMenu) {
      //when you want to close
      document.getElementById('burger-close').classList.add('hidden');
      document.getElementById('burger-open').classList.remove('hidden');
      document.getElementById('backgr-cover').style.display = 'none';
      document.getElementById('backgr-cover').style.opacity = '0';
      document.getElementById('navibar-mobile__list').style.top = '100vh';
      document.getElementById('navibar-mobile').style.display = 'none';
    } else {
      document.getElementById('burger-open').classList.add('hidden');
      document.getElementById('burger-close').classList.remove('hidden');
      document.getElementById('backgr-cover').style.display = 'block';
      document.getElementById('backgr-cover').style.opacity = '1';
      document.getElementById('navibar-mobile__list').style.top = 'auto';
      document.getElementById('navibar-mobile').style.display = 'block';
    }

    dispatch(showMenuREDUCER(toggleMenu));
  }
}