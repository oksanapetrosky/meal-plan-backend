const { Router } = require('express');
const { getMeal, saveMeals, editMeal, deleteMeal } = require('./MealController');

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.put('/editMeal', editMeal);
router.delete('/deleteMeal', deleteMeal);




module.exports = router;