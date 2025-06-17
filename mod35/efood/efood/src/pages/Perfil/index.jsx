import {
  Header,
  Logo,
  Banner,
  Titulo,
  Container,
  ProductCard,
  Image,
  Title,
  Description,
  Button,
  Footer,
  CarrinhoInfo
} from './styles'

import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FaInstagram, FaFacebook, FaTwitter, FaHamburger } from 'react-icons/fa'

function Perfil() {
  const produtos = [
    {
      id: 1,
      nome: 'Pizza Marguerita',
      descricao: 'Molho de tomate, queijo e manjericão.',
      imagem: 'https://images.pexels.com/photos/19968430/pexels-photo-19968430/free-photo-of-refeicao-comida-talheres-prataria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      nome: 'Pizza Calabresa',
      descricao: 'Calabresa fatiada e cebola roxa.',
      imagem: 'https://images.pexels.com/photos/17132216/pexels-photo-17132216/free-photo-of-comida-alimento-refeicao-pizza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      nome: 'Lasanha Bolonhesa',
      descricao: 'Massa com molho bolonhesa e queijo.',
      imagem: 'https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      nome: 'Tiramisu',
      descricao: 'Sobremesa italiana clássica com café.',
      imagem: 'https://images.pexels.com/photos/29721416/pexels-photo-29721416/free-photo-of-delicioso-bolo-tiramisu-caseiro-com-framboesas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      nome: 'Fettuccine Alfredo',
      descricao: 'Massa cremosa com parmesão e alho.',
      imagem: 'https://images.pexels.com/photos/13294540/pexels-photo-13294540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 6,
      nome: 'Bruschetta',
      descricao: 'Pão italiano com tomate e manjericão.',
      imagem: 'https://images.pexels.com/photos/7432993/pexels-photo-7432993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]

  return (
    <>
      <Header>
        <Link to="/" className="voltar">Restaurantes</Link>
        <CarrinhoInfo>
          <FaShoppingCart />
          <span>0 produto(s) no carrinho</span>
        </CarrinhoInfo>
      </Header>

      <Banner style={{ backgroundImage: 'url(https://images.pexels.com/photos/262905/pexels-photo-262905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </Banner>

      <Container>
        {produtos.map((item) => (
          <ProductCard key={item.id}>
            <Image src={item.imagem} alt={item.nome} />
            <Title>{item.nome}</Title>
            <Description>{item.descricao}</Description>
            <Button>Adicionar ao carrinho</Button>
          </ProductCard>
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

export default Perfil
