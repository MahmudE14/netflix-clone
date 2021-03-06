import { Link as ReactRouterLink } from "react-router-dom"
import { Background, ButtonLink, Container, Logo } from './styles/header'

export default function Header({ bg = true, children, restProps }) {
    return bg ? <Background  { ...restProps }>{ children }</Background> : children
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink { ...restProps }>{ children }</ButtonLink>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container { ...restProps }>{ children }</Container>
}

Header.Logo = function HeaderFrame({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}
