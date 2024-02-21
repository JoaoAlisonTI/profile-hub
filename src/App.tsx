import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import Icon from "@/components/icon/icon"

function App() {
  return (
    <main className="w-full h-screen">
      <div className="w-full h-full flex flex-col items-center">
        <Avatar>
          <AvatarImage src="/profile.jpeg" />
          <AvatarFallback>JA</AvatarFallback>
        </Avatar>
        <h1 className="mt-6 text-3xl text-slate-50">João Alison</h1>
        <p className="text-sm text-slate-600 transition ease-in-out hover:text-slate-50 duration-300">Desenvolvedor web 👨🏽‍💻</p>
        
        <div className="w-full h-full px-10 pb-1 mt-10 flex flex-col items-center">
        
          <a href="https://www.linkedin.com/in/jo%C3%A3o-alison-de-sousa-martins" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/icons/linkedin_icon.svg"
           />
           LinkedIn
          </a>
          
          <a href="https://github.com/JoaoAlisonTI" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/icons/github_icon.svg"
           />
           Github
          </a>
          
          <a href="https://joaoalisonti.showwcase.com/" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/icons/backpack.svg"
           />
           Showwcase
          </a>
          
          <a href="https://www.tabnews.com.br/JoaoAlison" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/icons/folder_icon.svg"
           />
           Tabnews
          </a>
          
          <a href="https://dev.to/joaoalisonti" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/icons/dev_icon.svg"
           />
           Dev.to
          </a>
          
          <a href="https://exercism.org/profiles/JoaoAlisonTI" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/icons/exercism_icon.svg"
           />
           Exercism
          </a>
          
          <a href="https://www.beecrowd.com.br/judge/en/users/statistics/726935" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/icons/bee_icon.svg"
           />
           Beecrowd
          </a>
          
          <a href="https://www.frontendmentor.io/profile/JoaoAlisonTI" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/icons/frontend_icon.svg"
           />
           Frontend Mentor
          </a>
         
        </div>
        
        <footer className="w-full p-14 text-sm text-center text-slate-600 font-light transition ease-in-out hover:text-slate-50 font-bold duration-300">
          <p>©2024 Developed by JoaoAlisonTI</p>
          <p>All rights reserved</p>
        </footer>
      </div>
     </main>
    )
}

export default App