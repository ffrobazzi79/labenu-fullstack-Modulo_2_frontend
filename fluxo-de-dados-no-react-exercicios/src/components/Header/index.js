import {TitleHeader} from './styled'
import { UsuarioH2, Img } from './styled'


export const Header = (props) => {

    return(
        <TitleHeader>
            <UsuarioH2>{props.name}</UsuarioH2>
            <Img src={props.urlImg} alt={props.name}/>
            Insta4
        </TitleHeader>
    )
}