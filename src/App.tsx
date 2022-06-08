import * as S from './App.styles'

import { Header } from './Components/Header';
import { Post } from './Components/Posts';
import { Sidebar } from './Components/Sidebar';

import './shared/themes/global.css'

export const App = () => (
  <>
    <Header />
    <S.Wrapper>
      <Sidebar />
      <main>
        <Post />
        <Post />
      </main>
    </S.Wrapper>
  </>
)

