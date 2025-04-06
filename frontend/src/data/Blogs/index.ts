import RocketseatBlog from '../../assets/blogs/rocketseatBlog.png'
import CursoEmVideoBlog from '../../assets/blogs/cursoEmVideoBlog.jpeg'
import { BlogType } from '../../@types/blogs'

export const blogsData: BlogType[] = [
  {
    id: '1',
    name: 'Blog da Rocketseat',
    image: RocketseatBlog,
    url: 'https://blog.rocketseat.com.br/'
  },
  {
    id: '2',
    name: 'Curso em Video - Blog',
    image: CursoEmVideoBlog,
    url: 'https://www.cursoemvideo.com/blog/'
  }
]