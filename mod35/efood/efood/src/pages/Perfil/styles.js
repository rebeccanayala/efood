import styled from 'styled-components'

export const Header = styled.header`
  background-color: #FFEBD9;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  .voltar {
    color: #E66767;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
`

export const Logo = styled.h1`
  font-size: 24px;
  color: #E66767;
  font-weight: bold;
`

export const CarrinhoInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #E66767;
  font-weight: bold;
  font-size: 14px;

  svg {
    font-size: 18px;
  }
`

export const Banner = styled.div`
  background-size: cover;
  background-position: center;
  height: 280px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 16px;
`

export const Titulo = styled.h2`
  background-color: #FFEBD9;
  padding: 8px 16px;
  color: #E66767;
  font-size: 32px;
  font-weight: bold;
`

export const Container = styled.section`
  padding: 40px 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1024px;
  margin: 0 auto;
`

export const ProductCard = styled.div`
  background-color: #FFEBD9;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
`

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  color: #E66767;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  color: #000;
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: #E66767;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d05555;
  }
`

export const Footer = styled.footer`
  background-color: #FFEBD9;
  text-align: center;
  padding: 32px 16px;
  font-size: 14px;
  color: #E66767;
  margin-top: 40px;

  ${Logo} {
    margin-bottom: 8px;
  }

  .social-icons {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    gap: 16px;
  }

  .social-icons a {
    color: #E66767;
    transition: color 0.3s;

    &:hover {
      color: #B33B3B;
    }
  }
`
