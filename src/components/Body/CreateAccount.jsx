const CreateAccount=()=>{
    return(
     
      <div>

        <head>   
        <title>  
        Registration Page  
        </title>  
        </head>  
        <body bgcolor="Lightskyblue">  
        
          
        <form>  
          
        <label> Firstname </label>         
        <input type="text" name="firstname" size="15"/>   
        <label> Middlename: </label>     
        <input type="text" name="middlename" size="15"/>    
        <label> Lastname: </label>         
        <input type="text" name="lastname" size="15"/>  
          
        
          
 
       
        <label>   
        Gender :  
        </label> 
        <input type="radio" name="male"/> Male
        <input type="radio" name="female"/> Female  
        <input type="radio" name="other"/> Other  
        
           
        
         
        {/* Email:  
        <input type="email" id="email" name="email"/>    
         
        Password:  
        <input type="Password" id="pass" name="pass">   
          
        Re-type password:  
        <input type="Password" id="repass" name="repass">
        <input type="button" value="Submit"/>   */}
        
        
        
        </form>  
        </body>  
      

        </div> 

)
}
export default CreateAccount;