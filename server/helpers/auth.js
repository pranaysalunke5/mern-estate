import bcrypt from 'bcrypt'

export const hashPassword = (password) => {
    bcrypt.genSalt(12)
    return new Promise((res,rej) => {
        bcrypt.genSalt(12,(err,salt))
        if(err){
            rej(err)
        }
        bcrypt.hash(password,salt,(err,hash) => {
            if(err){
                rej(err)
            }
            res(hash)
        })
    })
}


export const comparePassword = (password,hashed) => {
    return bcrypt.compare(password,hashed)  
}