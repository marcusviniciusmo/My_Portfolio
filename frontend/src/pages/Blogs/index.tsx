import { useEffect, useState } from 'react';
import { TitlePage } from '../../components/TitlePage';
import { borderColors } from '../../styles/global';
import { BlogsContainer, Content, Blog, Box, Image, Name } from './styles';
import RocketseatBlog from '../../assets/blogs/rocketseatBlog.png'
import CursoEmVideoBlog from '../../assets/blogs/cursoEmVideoBlog.jpeg'

interface blogType {
  id: string;
  name: string;
  image: string;
  url: string;
}

export interface BlogProps {
  borderColor: string;
  isListInHover: boolean;
  isItemInHover: boolean;
}

const blogsList: blogType[] = [
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

function getIndexMap(list: Array<{ id: string }>) {
  const map = new Map<string, number>();

  list.forEach((item, index) => {
    map.set(item.id, index);
  });

  return map;
}

function setBorderColor(
  borderColors: Array<string>,
  indexMap: Map<string, number>,
  listId: string
) {
  return borderColors[indexMap.get(listId)! % borderColors.length];
}

export function Blogs() {
  const [isListInHover, setIsListInHover] = useState<boolean>(false);
  const [isItemInHover, setIsItemInHover] = useState<string | null>(null);
  const [indexMap, setIndexMap] = useState<Map<string, number>>(
    new Map()
  );

  useEffect(() => {
    const map = getIndexMap(blogsList);

    setIndexMap(map);
  }, []);

  function getBorderColor(itemId: string) {
    return setBorderColor(borderColors, indexMap, itemId);
  }

  function handleMouseEnterList(isHover: boolean) {
    setIsListInHover(isHover)
  }

  function handleMouseEnterItem(itemId: string | null) {
    setIsItemInHover(itemId)
  }

  return (
    <BlogsContainer>
      <TitlePage title="Blogs" />

      <Content
        onMouseEnter={() => handleMouseEnterList(true)}
        onMouseLeave={() => handleMouseEnterList(false)}
      >
        {
          blogsList.map((blog) => {
            return (
              <Blog
                key={blog.id}
                title={blog.name}
                borderColor={getBorderColor(blog.id)}
                isListInHover={isListInHover}
                isItemInHover={blog.id === isItemInHover}
                onMouseEnter={() => handleMouseEnterItem(blog.id)}
                onMouseLeave={() => handleMouseEnterItem(null)}
              >
                <Box>
                  <Image src={blog.image} alt={blog.name} />
                </Box>

                <a href={blog.url} target='_blank'>
                  <Name>{blog.name}</Name>
                </a>
              </Blog>
            )
          })
        }
      </Content>
    </BlogsContainer>
  );
}