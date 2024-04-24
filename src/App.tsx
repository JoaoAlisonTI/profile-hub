import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Buttons from "@/components/buttons"

function App() {
  return (
    <main className="w-full max-w-xl px-2 flex flex-col items-center">
        <Avatar>
          <AvatarImage src="/profile.jpeg" />
          <AvatarFallback>JA</AvatarFallback>
        </Avatar>
        <h1 className="mt-6 text-3xl text-slate-50">João Alison</h1>
        <p className="text-sm text-slate-50">Desenvolvedor web 🖥️</p>
        <p className="mt-6 text-center text-sm italic text-slate-600">
          "Porquanto, o mandamento é lâmpada, o ensino é luz, e as advertências da disciplina são o caminho que conduz à vida." <br /> (Provérbios 6:23)
        </p>
        
        <div className="w-full px-2 pb-1 mt-6 flex flex-col items-center">
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