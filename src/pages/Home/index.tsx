import Game from '../../Models/Games'
import ProductList from '../../components/ProductList'
import suchi from '../../asserts/images/imagem-suchi.png'
import macarrao from '../../asserts/images/macarrao.png'
import estrela from '../../asserts/images/estrela.png'

import Hero from '../../components/Hero'

const promocoes: Game[] = [
  {
    id: 1,
    category: '4.8',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    system: 'Japonesa',
    infos: [''],
    destaque: 'Destaque da semana',
    // estrela: estrela,
    image: suchi
  },
  {
    id: 2,
    category: '4.8',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: 'Italiana',
    infos: [''],
    destaque: '',
    estrela: estrela,
    image: macarrao
  },
  {
    id: 3,
    category: '4.5',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: 'Italiana',
    infos: [''],
    destaque: '',
    estrela: estrela,
    image: macarrao
  },
  {
    id: 4,
    category: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: 'Italiana',
    infos: [''],
    destaque: '',
    estrela: estrela,
    image: macarrao
  },
  {
    id: 5,
    category: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: 'Italiana',
    infos: [''],
    destaque: '',
    estrela: estrela,
    image: macarrao
  },
  {
    id: 6,
    category: '5.0',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    system: 'Italiana',
    infos: [''],
    destaque: '',
    estrela: estrela,
    image: macarrao
  }
]

const Home = () => (
  <>
    <Hero />
    <ProductList games={promocoes} title="Promoções" />
    {/* <ProductList games={emBreve} title="Em breve" background="black" /> */}
  </>
)

export default Home
