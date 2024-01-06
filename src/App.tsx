import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import Icon from "@/components/icon/icon"

function App() {
  return (
    <main className="w-full h-screen bg-slate-950">
      <div className="w-full h-full bg-slate-950 flex flex-col items-center">
        <Avatar>
          <AvatarImage src="https://github.com/JoaoAlisonTI.png" />
          <AvatarFallback>JA</AvatarFallback>
        </Avatar>
        <h1 className="mt-6 text-3xl text-slate-50">João Alison</h1>
        <p className="text-sm text-slate-600">@JoaoAlisonTI</p>
        
        <div className="w-full h-full px-10 pb-1 mt-10 flex flex-col items-center bg-slate-950">
        
          <a href="https://www.linkedin.com/in/jo%C3%A3o-alison-de-sousa-martins" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/linkedin_icon.svg"
           />
           LinkedIn
          </a>
          
          <a href="https://github.com/JoaoAlisonTI" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/github_icon.svg"
           />
           Github
          </a>
          
          <a href="https://joaoalisonti.showwcase.com/" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/backpack.svg"
           />
           Showwcase
          </a>
          
          <a href="https://www.tabnews.com.br/JoaoAlison" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/folder_icon.svg"
           />
           Tabnews
          </a>
          
          <a href="https://dev.to/joaoalisonti" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/dev_icon.svg"
           />
           Dev.to
          </a>
          
          {/*<a href="https://www.linkedin.com/in/jo%C3%A3o-alison-de-sousa-martins" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/exercism_icon.svg"
           />
           Exercism
          </a>
          */}
          <a href="https://www.beecrowd.com.br/judge/en/users/statistics/726935" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/bee_icon.svg"
           />
           Beecrowd
          </a>
          
          <a href="https://www.frontendmentor.io/profile/JoaoAlisonTI" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/frontend_icon.svg"
           />
           Frontend Mentor
          </a>
          
          <a href="https://leetcode.com/JoaoAlisonTI/" target="_blank" className={buttonVariants({ variant: "default" })}>
           <Icon 
            src="/code_icon.svg"
           />
           LeetCode
          </a>
         
        </div>
        
        <footer className="w-full p-14 bg-slate-950 text-sm text-center text-slate-600 font-light transition ease-in-out hover:text-slate-50 font-bold duration-300">
          <p>©2024 Developed by JoaoAlisonTI</p>
          <p>All rights reserved</p>
        </footer>
      </div>
     </main>
    )
}

export default App