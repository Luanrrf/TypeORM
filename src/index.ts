import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserindo um novo usuario em nossa base de dados\n.\n.\n.")

    // Aqui criamos um novo usuário e damos algumas informações para ele
    const user = new User()
    user.firstName = "Fulano"
    user.lastName = "Silva"
    user.age = 25

    await AppDataSource.manager.save(user)

    // Mostra qual o id do usuário que foi salvo 
    console.log("Id do usuário que foi salvo: " + user.id)


    // Carrega os usuarios e os mostra na tela
    console.log("Carregando usuarios da nossa base de dados...")
    const users = await AppDataSource.manager.find(User)
    console.log("Lista de usuários carregados:\n ", users, "\n")

}).catch(error => console.log(error))
