import CreatePlaylist from "./components/ComponentPlaylists/CreatePlaylist";
import ComponentPlaylists from "./components/ComponentPlaylists/ShowPlaylists";
import { ContainerApp, ContainerNavLeft, ContainerMain } from "./StyledCmponents/StyledApp";

function App() {
  return (
    <ContainerApp>
      <ContainerNavLeft>
        Menu de Playlist
        <ComponentPlaylists />
      </ContainerNavLeft>

      <ContainerMain>
        Area de exibição das musicas e criação de playlist
        <CreatePlaylist />
      </ContainerMain>
    </ContainerApp>
  );
}

export default App;
