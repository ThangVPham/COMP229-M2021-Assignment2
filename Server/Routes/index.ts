import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET login page. */
router.get('/login', DisplayLoginPage);

/* POST - process login page when user click on login. */
router.get('/login', ProcessLoginPage);

/* GET register page. */
router.get('/register', DisplayRegisterPage);

/* POST - process register when user clicks on register page. */
router.get('/register', ProcessRegisterPage);

/* GET - process logout page. */
router.get('/logout', ProcessLogoutPage);

//module.exports = router;
