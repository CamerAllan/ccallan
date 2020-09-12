import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentPath = 'public/content';

const getFolders = () => {

  const folders = [] //: Folder[]
  fs.readdirSync(contentPath).forEach(folderName => {

    const folderIndex = fs.readFileSync(`${contentPath}/${folderName}/index.md`);
    const folderMatter = matter(folderIndex)
    const folderDesc = folderMatter.content
    const fileData = folderMatter.data
    const folder = {
      ...fileData,
      id: folderName,
      description: folderDesc,
      items: []
    }

    fs.readdirSync(`${contentPath}/${folderName}`).forEach(fileName => {
      const file = fs.readFileSync(`${contentPath}/${folderName}/${fileName}`, 'utf8');
      const fileMatter = matter(file)
      const fileContents = fileMatter.content
      const fileData = fileMatter.data
      if (fileName != 'index.md') {
        const item = {
          ...fileData,
          icon: folder.icon,
          date: Date.parse(fileData.date),
          id: fileName.slice(0, -3), // Trim '.md'
          containingFolder: folderName,
          wordCount: fileContents.split(' ').length,
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
      console.error(`Missing/Invalid index for folder: ${fileName}`)
    }
  });

  return folders;
}

const getLatest = (folders, num) => {
  return folders.flatMap((folder) => folder.items)
    .sort((a, b) => b.date - a.date)
    .slice(0, num);
}

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const folders = getFolders();
    const latestItems = getLatest(folders, 5);
    return [
      {
        path: '/bits-and-bobs/',
        getData: () => ({ folders }),
        children: folders.map((folder) => ({
          path: `/${folder.id}`,
          template: 'src/components/Folder',
          getData: () => ({ folder }),
          children: folder.items.map(item => ({
            path: `/${item.id}`,
            template: 'src/components/Item',
            getData: () => ({
              item
            })
          })),
        })),
      },
      {
        path: '/',
        getData: () => ({ latestItems }),
      },
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}

