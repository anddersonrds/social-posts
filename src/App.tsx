import * as S from './App.styles'

import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';

import './shared/themes/global.css'

export const App = () => (
  <>
    <Header />
    <S.Wrapper>
      <Sidebar />
      <main>Posts</main>
    </S.Wrapper>
  </>
)

