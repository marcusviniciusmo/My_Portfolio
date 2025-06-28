import { useEffect, useState } from 'react';
import { TitlePage } from '../../components/TitlePage';
import { Filter } from '../../components/Filter';
import { BlogType } from '../../@types/blogs';
import { getIndexMap, setBorderColor } from '../../utils/Functions';
import { borderColors } from '../../styles/global';
import { BlogsContainer, Content, Blog, Box, Image, Name } from './styles';

export function Blogs() {
  const [blogsList, setBlogsList] = useState<BlogType[]>([]);
  const [blogsFiltered, setBlogsFiltered] = useState<BlogType[]>(blogsList);
  const [isListInHover, setIsListInHover] = useState<boolean>(false);
  const [isItemInHover, setIsItemInHover] = useState<string | null>(null);
  const [indexMap, setIndexMap] = useState<Map<string, number>>(new Map());

  const baseUrlApi = import.meta.env.VITE_BASE_URL_API;
  const userIdProfile = import.meta.env.VITE_USER_ID_PROFILE;

  useEffect(() => {
    fetch(`${baseUrlApi}/blogs/${userIdProfile}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogsList(data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, []);

  useEffect(() => {
    const map = getIndexMap(blogsList);

    setIndexMap(map);
  }, []);

  function getBorderColor(itemId: string) {
    return setBorderColor(borderColors, indexMap, itemId);
  }

  function handleMouseEnterList(isHover: boolean) {
    setIsListInHover(isHover);
  }

  function handleMouseEnterItem(itemId: string | null) {
    setIsItemInHover(itemId);
  }

  return (
    <BlogsContainer>
      <TitlePage title="Blogs" />

      <Filter list={blogsList} setListFiltered={setBlogsFiltered} />

      <Content
        onMouseEnter={() => handleMouseEnterList(true)}
        onMouseLeave={() => handleMouseEnterList(false)}
      >
        {blogsFiltered
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((blog) => {
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
                  <Image src={`${baseUrlApi}/${blog.image}`} alt={blog.name} />
                </Box>

                <a href={blog.url} target="_blank">
                  <Name>{blog.name}</Name>
                </a>
              </Blog>
            );
          })}
      </Content>
    </BlogsContainer>
  );
}
