import {
  Header,
  Logo,
  Banner,
  Container,
  RestaurantCard,
  CardImage,
  CardTitle,
  CardDescription,
  Tag,
  Infos,
  Rating,
  Footer
} from './styles'

import { FaInstagram, FaFacebook, FaTwitter, FaHamburger } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const restaurants = [
    {
      id: 1,
      tag: 'Destaque',
      image: 'https://images.pexels.com/photos/262905/pexels-photo-262905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'La Dolce Vita Trattoria',
      description: 'Culinária italiana no centro de São Paulo.',
      rating: 4.6,
    },
    {
      id: 2,
      tag: 'Novo',
      image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      title: 'Sushi Mania',
      description: 'Os melhores sushis e sashimis da cidade.',
      rating: 4.8,
    },
    {
      id: 3,
      tag: 'Popular',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Burger King',
      description: 'Hambúrgueres suculentos e saborosos.',
      rating: 4.3,
    },
    {
      id: 4,
      tag: 'Clássico',
      image: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Pizzaria Bella',
      description: 'Pizzas artesanais feitas com carinho.',
      rating: 4.5,
    },
    {
      id: 5,
      tag: 'Especial',
      image: 'https://images.pexels.com/photos/2092897/pexels-photo-2092897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Taco Loco',
      description: 'Autêntica comida mexicana.',
      rating: 4.7,
    },
    {
      id: 6,
      tag: '',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Café do Bairro',
      description: 'Cafés especiais e ambiente acolhedor.',
      rating: 4.2,
    }
  ]

  return (
    <>
      <Header>
        <Logo>
          <FaHamburger style={{ marginRight: 8 }} />
            efood
        </Logo>

      </Header>

      <Banner>
        Viva experiências gastronômicas no conforto da sua casa
      </Banner>

      <Container>
        {restaurants.map(({id, tag, image, title, description, rating}) => (
        <RestaurantCard
          key={id}
          onClick={() => navigate('/perfil')}
          style={{ cursor: 'pointer' }}
        >
            {tag && <Tag>{tag}</Tag>}
            <CardImage src={image} alt={title} />
            <Infos>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
              <Rating>⭐ {rating.toFixed(1)}</Rating>
            </Infos>
          </RestaurantCard>
        ))}
      </Container>

      <Footer>
        <Logo>
          <FaHamburger style={{ marginRight: 8 }} />
          efood
        </Logo>

        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </p>

        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter size={24} />
        </a>
      </div>
      </Footer>
    </>
  )
}

export default Home
