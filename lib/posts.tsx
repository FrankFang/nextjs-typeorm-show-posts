import path from 'path';
import matter from 'gray-matter';
import fs, {promises as fsPromise} from 'fs';
import marked from 'marked';

const markdownDir = path.join(process.cwd(), 'markdown');

export const getPosts = async () => {
  const fileNames = await fsPromise.readdir(markdownDir);
  const posts = fileNames.map(fileName => {
    const fullPath = path.join(markdownDir, fileName);
    const id = fileName.replace(/\.md$/g, '');
    const text = fs.readFileSync(fullPath, 'utf-8');
    // const {data, content} = matter(text)
    // const {title, date} = data
    const {data: {title, date}, content} = matter(text);
    return {
      id, title, date
    };
  });
  return posts;
};

export const getPost = async (id: string) => {
  const fullPath = path.join(markdownDir, id + '.md');
  const text = fs.readFileSync(fullPath, 'utf-8');
  const {data: {title, date}, content} = matter(text);
  const htmlContent = marked(content);
  return JSON.parse(JSON.stringify({
    id, title, date, content, htmlContent
  }));
};


export const getPostIds = async () => {
  const fileNames = await fsPromise.readdir(markdownDir);
  return fileNames.map(fileName => fileName.replace(/\.md$/g, ''));
};
