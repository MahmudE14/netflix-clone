import { Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit } from './styles/form'

export default function Form({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
};

Form.Base = function FormContainer({ children, ...restProps }) {
    return <Base { ...restProps }>{children}</Base>
}

Form.Error = function FormContainer({ children, ...restProps }) {
    return <Error { ...restProps }>{children}</Error>
}

Form.Title = function FormContainer({ children, ...restProps }) {
    return <Title { ...restProps }>{children}</Title>
}

Form.Text = function FormContainer({ children, ...restProps }) {
    return <Text { ...restProps }>{children}</Text>
}

Form.TextSmall = function FormContainer({ children, ...restProps }) {
    return <TextSmall { ...restProps }>{children}</TextSmall>
}

Form.Link = function FormContainer({ children, ...restProps }) {
    return <Link { ...restProps }>{children}</Link>
}

Form.Input = function FormContainer({ children, ...restProps }) {
    return <Input { ...restProps }>{children}</Input>
}

Form.Submit = function FormContainer({ children, ...restProps }) {
    return <Submit { ...restProps }>{children}</Submit>
}
