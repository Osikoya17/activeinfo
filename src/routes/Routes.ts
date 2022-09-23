import { Router } from "express"
import {Upload} from "../controllers/uploadControllers"
import {Signup} from "../controllers/signupController"
import {Login} from "../controllers/loginController"
import {Blogs} from "../controllers/blogController"
import {Delete} from "../controllers/deleteController"
import { upload } from "../middleware/upload"
import {auth} from "../middleware/auth"
const router = Router()

router.post('/upload',upload.single("image"),Upload)
router.post('/signup',Signup)
router.post('/login',[auth],Login)
router.post('/delete',Delete)
router.get('/blog-post',Blogs)

export {router}

