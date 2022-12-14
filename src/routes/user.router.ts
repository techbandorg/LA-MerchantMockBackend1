import express from 'express';
import userController from '../controllers/user.controller';

const router = express.Router();

router.route('/').get(userController.getUser);
router.route('/all').get(userController.getAllUsers);
router.route('/login').get(userController.login);
router.route('/add').post(userController.addUser);
router.route('/package').post(userController.updateUserPackage);
router.route('/subscription').post(userController.updateUserSubscription);
router.route('/mail').post(userController.updateUserMail);
router.route('/subscription/deactivation').post(userController.deactivation);
router.route('/subscription/activation').post(userController.activation);
router
  .route('/subscription/extend-date')
  .post(userController.updateUserSubscriptionExtendDate);
router
  .route('/subscription/transfer')
  .post(userController.updateTrasferredSubscription);

export default router;
