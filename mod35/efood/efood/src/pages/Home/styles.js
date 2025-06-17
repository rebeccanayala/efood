import styled from 'styled-components'

export const Header = styled.header`
  background-color: #FFEBD9;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.h1`
  font-size: 24px;
  color: #E66767;
  font-weight: bold;
`

export const Banner = styled.div`
  background-color: #FFEBD9;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #E66767;
  padding: 0 16px;
`

export const Container = styled.section`
  padding: 40px 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1024px;
  margin: 0 auto;
`

export const RestaurantCard = styled.div`
  border: 1px solid #E66767;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  position: relative;
`

export const Tag = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: #E66767;
  color: #fff;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
`

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`

export const Infos = styled.div`
  padding: 16px;
`

export const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`

export const Rating = styled.span`
  color: #FFB930;
  font-weight: bold;
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

