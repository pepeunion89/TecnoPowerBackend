import { Router } from 'express';
import { addCategory, getCategorys, deleteCategory, getCategory, updateCategory } from '../controllers/category';

const router = Router();

router.get('/', getCategorys)
router.get('/:id', getCategory)
router.post('/', addCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)

export default router;