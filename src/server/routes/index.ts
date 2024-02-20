import { Router } from "express";
import todosRouter from './todos';

// apiRouter
const router = Router();

// /api/todos
router.use('/todos', todosRouter);

export default router;