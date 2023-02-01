import { HeaderStyled } from "./style"

export function Header() {
    return (
        <HeaderStyled>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </HeaderStyled>
    )
} 