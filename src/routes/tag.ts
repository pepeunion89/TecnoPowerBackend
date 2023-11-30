import { Router } from 'express';
import { addTag, getTags, deleteTag, getTag, updateTag } from '../controllers/tag';

const router = Router();

router.get('/', getTags)
router.get('/:id', getTag)
router.post('/', addTag)
router.put('/:id', updateTag)
router.delete('/:id', deleteTag)

export default router;