import express from 'express';
import home from './home';
import users from './users';

const router = express.Router();

router.use('/', home);
router.use('/users', users)

export default router;
