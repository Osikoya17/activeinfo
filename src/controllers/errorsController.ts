export const handleError = (err:any)=>{
    let errors:{
        username:string,
        email:string,
        password:string} = {
            username:"",
            email:"",
            password:""}
    console.log(err.message,err.code);
    if (err.code === 11000 ){
        errors.email = "Email is Already Registerted"
        errors.username="Username Already in Use"
        return errors
    }
    if(err.message.includes("user validation failed: password")){
        errors["password"] = "Minimum Password length is 6 characters"
    }
    else if(err.message.includes("user validation failed: username")){
        errors["username"] = "Please enter your Username"
    }
    else if(err.message.includes("user validation failed: email")){
        errors["email"] = "Please enter an Email"
    }

    return errors
    
}
export const blogErrors = (err:any)=>{
    let errors:{
        title:string,
        story:string,
        category:string,
        author:string} = {
            title:"",
            story:"",
            category:"",
            author:""}
    console.log(err.message);
    if(err.message.includes("post validation failed: title")){
        errors["title"] = "Title required"
    }
    else if(err.message.includes("post validation failed: story")){
        errors["story"] = "Story required"
    }
    else if(err.message.includes("post validation failed: category")){
        errors["category"] = "A category required"
    }
    else if(err.message.includes("post validation failed: author")){
        errors["author"] = "Author required"
    }
    return errors
}