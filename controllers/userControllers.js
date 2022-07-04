const User = require('../models/user');
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')

const userControllers ={

    userSignUp: async (req, res) => {
        let {fullName, mailPhone, imgUrl, password, from, role} = req.body.userDate;

        try{

            const userExists = await User.findOne({mailPhone})
            const verification = false
            const uniqueString = crypto.randomBytes(15).toString('hex')

            if(userExists){
                if(userExists.from.indexOf(from) !== -1){
                    res.json({
                        success: false,
                        from: from,
                        message: "You have already completed this registration form. Please login."
                    })
                }else{
                    const passwordEncrypted = await bcryptjs.hashSync(password, 10)

                    userExists.from.push(from)
                    userExists.password.push(passwordEncrypted)
                    userExists.verification = true
                    await userExists.save()
                    res.json({
                        success: true,
                        from: from,
                        message: `Add ${from} as another means to log in`
                    })
                }
            }else{
                const passwordEncrypted = await bcryptjs.hashSync(password, 10)
                const newUser = await new User({
                    fullName: fullName,
                    mailPhone: mailPhone,
                    imgUrl: imgUrl,
                    password: passwordEncrypted,
                    from: [from],
                    role: role,
                    verification: verification,
                    uniqueString: uniqueString
                })
                if(from !== "Sign Up"){
                    newUser.verification = true
                    await newUser.save()
                    res.json({
                        success: true,
                        from: from,
                        message: `Congratulations! You have created your account with ${from}`
                    })
                }else{
                    await newUser.save()
                    res.json({
                        success: true,
                        from: "sign up",
                        message: "Congratulations! You have created your account. Verify your email in your mailbox"
                    })
                }
            }

        } catch(err){
            error = err
            res.json({
                success: false,
                from: "server",
                message: "Error in the server",
                console: console.log(error) 
            })
        }
    },

    userSignIn: async (req, res) => {
        const {mailPhone, password, from} = req.body.loginUser
        try{
            const userExists = await User.findOne({mailPhone}) 
            if(!userExists){
                res.json({
                    success: false,
                    message: `${mailPhone} not found as an existing user. please register.`
                })
            }else{
                if(from === "Sign Up"){
                    let checkPass = userExists.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if(checkPass.length > 0){
                        const userDate = {
                            id: userExists._id,
                            fullName: userExists.fullName,
                            mailPhone: userExists.mailPhone,
                            imgUrl: userExists.imgUrl,
                            from: userExists.from,
                            role: userExists.role
                        }
                        res.json({
                            success: true,
                            from: from,
                            response: {userDate},
                            message: `Welcome back ${userDate.fullName}!!`
                        })
                    }else{
                        res.json({
                            success: false,
                            from: from,
                            message: "Verify your password!"
                        })
                    }
                }else{
                    let checkPass = userExists.password.filter(pass => bcryptjs.compareSync(password, pass))
                    if(checkPass.length > 0){
                        const userDate = {
                            id: userExists._id,
                            fullName: userExists.fullName,
                            mailPhone: userExists.mailPhone,
                            imgUrl: userExists.imgUrl,
                            from: userExists.from,
                            role: userExists.role
                        }
                        res.json({
                            success: true,
                            from: from,
                            response: {userDate},
                            message: `Welcome back ${userExists.fullName}!`
                        })
                    }else{
                        res.json({
                            success: false,
                            from: from,
                            message: "Verify your password!"
                        })
                    }
                }
            }
        }catch(err){
            res.json({
                success: false,
                from: "server",
                message: "Error in the server",
                console: console.log(error)
            })
        }
    }
}

module.exports = userControllers;