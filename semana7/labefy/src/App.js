import CreatePlaylistName from "./components/ComponentPlaylists/CreatePlaylistName";
import EditPlaylist from "./components/ComponentPlaylists/EditPlaylist";
import ShowPlaylists from "./components/ComponentPlaylists/ShowPlaylists";
import { ContainerApp, ContainerNavLeft, ContainerMain } from "./StyledCmponents/StyledApp";

function App() {
  return (
    <ContainerApp>

      <ContainerNavLeft>
        Menu de Playlist
        <ShowPlaylists />
      </ContainerNavLeft>

      <ContainerMain>
        Area de exibição das musicas e criação de playlist
        <CreatePlaylistName />
        <EditPlaylist />
      </ContainerMain>

    </ContainerApp>
  );
}

export default App;
