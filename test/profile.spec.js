import {userProfileData} from "../creds";
import {Header} from "../pages/home page/header";
import {Homepage} from "../pages/home page/homepage";
import {LoginPage} from "../pages/login page/login";

const header = new Header();
const homepage = new Homepage();
const loginPage = new LoginPage();

const userdata = userProfileData();