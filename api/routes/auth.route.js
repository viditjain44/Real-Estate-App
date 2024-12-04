import express from"express";
import { REGISTER,LOGOUT,LOGIN} from  "../Controller/auth.controller.js"

const router=express.Router();
router.use(express.json());

router.post("/register",REGISTER );

router.post("/login",LOGIN );

router.post("/logout",LOGOUT );

 export default router;
