const { Router } = require('express');
const { requireAuth } = require('../middleware/userMiddleware');
const { requireAdmin } = require('../middleware/userMiddleware');
const { requireGerant } = require('../middleware/adminMiddleware');
const adminController = require('../controllers/adminController');

const router = Router();

// router.ger('/user/getAll', requireAuth, requireAdmin, adminController.getAllUsers);
// router.post('/user/create', requireAuth, requireAdmin ,adminController.insertUser);
// router.put('/user/update-user/:id', requireAuth,adminController.updateUser); //email || password for users
// router.delete('/user/delete/:id', requireAuth ,adminController.deleteUser);

// router.put('/user/promoteAdmin/:id', requireAuth, requireAdmin ,adminController.promoteAdminUser);
// router.put('/user/demoteAdmin/:id', requireAuth, requireAdmin ,adminController.demoteAdminUser);


router.get('/user/getAll', adminController.getAllUsers);
router.post('/user/create', adminController.insertUser);
router.put('/user/update-user/:id', adminController.updateUser); //email || password for users
router.delete('/user/delete/:id', adminController.deleteUser);

router.put('/user/promoteAdmin/:id', adminController.promoteAdminUser);
router.put('/user/demoteAdmin/:id',adminController.demoteAdminUser);


module.exports = router;