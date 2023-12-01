let express = require('express');
let router = express.Router();
let mongoose = require('mongoose')
let Certifications = require('../models/certifications');
let CertificationsController = require('../controllers/certifications')

// helper function
function requireAuth(req,res,next){
    if(!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}
 
/*read operation*/
router.get('/', CertificationsController.DislayCertificationlist);
/*add operation*/
router.get('/add',  CertificationsController.AddCertifications);
/*post route for add-page*/
router.post('/add', CertificationsController.ProcessCertifications);
/*edit operation*/
router.get('/edit/:id', requireAuth, CertificationsController.EditCertifications);
/*post route for edit-page*/
router.post('/edit/:id', requireAuth, CertificationsController.ProcessEditCertifications);
/*delete operation*/
router.get('/delete/:id', requireAuth, CertificationsController.DeleteCertifications);
module.exports=router;