import { Brain, Dumbbell, Home, LogOut, SquareUser, Star } from 'lucide-react'
import { NavLink } from './NavLink'
import { APP_ROUTES } from '@/constants/app.routes'

export const SideBar = () => {
  return (
    <div className="h-screen w-64 bg-white p-2 transition-transform">
      <div className="fixed h-full w-60">
        <h1 className="my-4 text-start text-2xl font-bold text-blue-900">
          Studiis Online
        </h1>
        <nav className="w-full">
          <ul className="w-full text-blue-900">
            <NavLink href={APP_ROUTES.panel.home}>
              <Home strokeWidth={2.5} />
              Home
            </NavLink>
            <NavLink href={APP_ROUTES.panel.quizzes}>
              <Dumbbell strokeWidth={2.5} />
              Quizzes
            </NavLink>
            <NavLink href={APP_ROUTES.panel.flashCards}>
              <Brain strokeWidth={2.5} />
              FlashCards
            </NavLink>
            <NavLink href={APP_ROUTES.panel.review}>
              <Star strokeWidth={2.5} />
              Minha revisão
            </NavLink>
            <NavLink href={APP_ROUTES.panel.profile}>
              <SquareUser />
              Perfil
            </NavLink>
          </ul>
          <button className="text-violet flex gap-4 p-2">
            <LogOut></LogOut>Sair
          </button>
        </nav>
        <div className="relative bottom-4 left-2"></div>
      </div>
    </div>
  )
}
