const UserCreateService = require("./UserCreateService")
const UserRepositoriInMemory = require("../repositories/UserRepositoriInMemory");
const AppError = require("../utils/AppError")

describe("UserCreateService", ()=>{
  let userRepository= null;
  let userCreateService = null;


  beforeEach(() =>{
    userRepository= new UserRepositoriInMemory();
    userCreateService = new UserCreateService(userRepository);
  })
  

  it("user shuld be created", async () =>{
    const user ={
      name:"user test",
      email:"user@test.com",
      password:"123"
    };

    const userCreated = await userCreateService.execute(user)
  
    expect(userCreated).toHaveProperty("id");
  });

  it("user not shuld be created with exists email", async ()=>{
    const user1 ={
      name:"user test 1",
      email:"user@test.com",
      password:"123"
    };

    const user2 ={
      name:"user test 2",
      email:"user@test.com",
      password:"456"
    };

    await userCreateService.execute(user1)
    await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este E-mail já esta em uso."))
  })

})

