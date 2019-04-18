const express = require('express');
const crudBuilderRoutes = require('./crud_builder.router');
const crudOverrideBuilderRoutes = require('./crud_override_builder.router');
const authRoutes = require('./auth.router');
const uploadRouter = require('./uploads.router');

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use(crudOverrideBuilderRoutes);
router.use(crudBuilderRoutes);
router.use(uploadRouter);

module.exports = router;
