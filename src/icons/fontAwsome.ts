import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faHome,
    faAt,
    faCalendarDay,
    faUser,
    faUserPlus,
    faSignInAlt,
    faSignOutAlt,
    faRankingStar,
    faSignOut,
    faPlus,
    faUserCheck,
    faUserXmark,
    faCircleInfo,
    faUserSecret,
    faArrowLeft,
    faXmark,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faGithub,
    faTwitter,
    faYoutube,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons'

library.add(faArrowLeft,faTrash, faXmark ,faCircleInfo, faHome, faAt, faCalendarDay, faUserSecret,
    faUser, faUserPlus, faSignInAlt, faSignOutAlt, 
    faRankingStar, faSignOut, faPlus, faUserCheck, 
    faUserXmark ,faFacebook, faInstagram, faGithub,
    faTwitter, faYoutube, faTiktok);
export { FontAwesomeIcon };