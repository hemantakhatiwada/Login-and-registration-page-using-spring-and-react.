package com.loginandregister;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:5173")

public class Usercontroller {

    @Autowired
    private UserDAO userdao;

    @PostMapping("/register")
    public String register(@RequestBody Usermodel usermodel) throws Exception//yo usermodel bhanne object is send by user
    {
//yaa userdao object le sql run garera DB(Usermodel maa check garxa,usermodel object chai send by user ho.
        if (userdao.findByEmail(usermodel.getEmail()) != null) {
            return "Email already Exists!";
        } else {
            userdao.save(usermodel);
            return " Registered Successfully!";
        }
    }

    @PostMapping("/login")
    public String login(@RequestBody Usermodel usermodel) throws Exception {

        Usermodel pwcheck = userdao.findByEmail(usermodel.getEmail());//yo password fetch garera compare garnah banaako ho

        if (userdao.findByEmail(usermodel.getEmail()) == null) {
            return "User not found!";
        } else if (!usermodel.getPassword().equals(pwcheck.getPassword())) {

            return "Wrong password";

        } else {
            return "Login Successfully!";
        }
    }
}
