import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';

//author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
// content: ""
 const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Daniel-sena-dev.png',
      name: 'Daniel Sena',
      role: 'Dev junior'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no React'}, 
      {type: 'link', content: '👉https://github.com/Daniel-sena-dev'},
    ],
    publishedAt: new Date('2023-08-09 14:09:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Daniel-sena-dev.png',
      name: 'Tommy',
      role: 'Ceo'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no React'}, 
      {type: 'link', content: '👉https://github.com/Daniel-sena-dev'},
    ],
    publishedAt: new Date('2023-08-10 15:09:00'),
  },
];

import styles from './App.module.css';
import './global.css'

//iteração

export function App() {
  return (
   <div>
    <Header />
    
    <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}            
              />
            )
          })}
        </main>
    </div>
   </div>
  )
}


