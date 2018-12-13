import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ title: 'API test "La belle assiette"' });
});

export default router;
