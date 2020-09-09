import fs from 'fs'
import matter from "gray-matter";

const contentPath = 'public/content';

const getFolders = (contentPath: string) => {

  const folders: any = [] //: Folder[]
  fs.readdirSync(contentPath).forEach(folderName => {
    let folder: any = {} //: Folder
    folder.items = []
    fs.readdirSync(`${contentPath}/${folderName}`).forEach(fileName => {
      const file = fs.readFileSync(`${contentPath}/${folderName}/${fileName}`, 'utf8');
      const fileMatter = matter(file)
      const fileContents = fileMatter.content
      const fileData = fileMatter.data
      if (fileName == 'index.md') {
        folder = {
          ...folder,
          ...fileData,
          id: folderName,
          description: fileContents,
        }
      } else {
        const item: any = {
          ...fileData,
          date: Date.parse(fileData.date),
          id: fileName.slice(0, -3), // Trim '.md'
          content: fileContents
        }
        if (item.live) {
          folder.items.push(item);
        }
      }
    })

    // Only add folder if it has correctly formed index
    if (folder.title) {
      folders.push(folder)
    } else {
      console.error(`Missing/Invalid index for folder`)
    }
  });

  return folders;
}

export async function getStaticProps() {
  const data = getFolders(contentPath);
  return {
    props: {
      data,
    },
  };
}

export default function Posts(posts: any) {
  return (
    <div>
      {posts}
    </div>
  );
}