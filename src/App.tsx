import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Buttons from "@/components/buttons"

function App() {
  return (
    <main className="w-full h-full flex flex-col items-center">
        <Avatar>
          <AvatarImage src="/profile.jpeg" />
          <AvatarFallback>JA</AvatarFallback>
        </Avatar>
        <h1 className="mt-6 text-3xl text-slate-50">João Alison</h1>
        <p className="text-sm text-slate-600 transition ease-in-out hover:text-slate-50 duration-300">Desenvolvedor web</p>
        
        <div className="w-full px-10 pb-1 mt-10 flex flex-col items-center">
          <Buttons />
        </div>
        
        <footer className="w-full p-14 text-sm text-center text-slate-600 font-light transition ease-in-out hover:text-slate-50 font-bold duration-300">
          <p>©2024 Developed by JoaoAlisonTI</p>
          <p>All rights reserved</p>
        </footer>
     </main>
    )
}

export default App