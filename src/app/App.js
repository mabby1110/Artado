// componentes
import { NavBar, NavBarTwo } from "./componentes/NavBar/NavBar"
import { SearchBar } from "./componentes/SearchBar/SearchBar"
import { ProjectBar } from "./componentes/ProjectBar/ProjectBar"
import { SocialBar } from "./componentes/SocialBar/SocialBar"
import { useAuth } from "./context/authContext"

export default function App({ children }) {
  const {user, loading} = useAuth()

  if (loading) return <h1>Loading ...</h1>
  return (
      <div className="main">
        <NavBar/>
        <SearchBar/>
        <ProjectBar/>
        <NavBarTwo/>
        {children}
        <SocialBar/>
      </div>
  )
}
