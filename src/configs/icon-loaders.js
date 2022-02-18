import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAddressCard,
  faArrowLeft,
  faArrowRight,
  faBars,
  faBell,
  faCartShopping,
  faDroplet,
  faHeart,
  faHouse,
  faLanguage,
  faMinus,
  faPlay,
  faPlus,
  faRightToBracket,
  faSignInAlt,
  faSignOutAlt,
  faSort,
  faSpinner,
  faStairs,
  faStar,
  faStore,
  faTasks,
  faTrash,
  faUser,
  faUserShield,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { faProductHunt, faGoogle } from '@fortawesome/free-brands-svg-icons';

export const loadIcon = () => {
  library.add(
    faArrowLeft,
    faArrowRight,
    faSignInAlt,
    faSignOutAlt,
    faPlus,
    faMinus,
    faTasks,
    faTrash,
    faUser,
    faPlay,
    faSpinner,
    faBars,
    faX,
    faUserShield,
    faHouse,
    faAddressCard,
    faBell,
    faDroplet,
    faStore,
    faRightToBracket,
    faCartShopping,
    faHeart,
    faProductHunt,
    faSort,
    faHeart,
    faGoogle

    // Add more icons here
  );
};
