import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';
import authentication from './authentication';
import user from './user.reducer';
import product from 'src/pages/ProductPage/product.reducer';
import favorite from 'src/pages/FavoritePage/favorite.reducer';

const rootReducer = {
  loadingBar,
  authentication,
  user,
  product,
  favorite
};

export default rootReducer;
