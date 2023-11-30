import { Router } from 'express';
import { addMaker, getMakers, deleteMaker, getMaker, updateMaker } from '../controllers/maker';

const router = Router();

router.get('/', getMakers)
router.get('/:id', getMaker)
router.post('/', addMaker)
router.put('/:id', updateMaker)
router.delete('/:id', deleteMaker)

export default router;