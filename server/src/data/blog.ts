export type BlogData = {
  id: string;
  name: string;
};

const BLOGS: BlogData[] = [
  {
    id: "1",
    name: "つれづれ草子",
  },
  {
    id: "2",
    name: "インターネット観察日記",
  },
  {
    id: "3",
    name: "びっくりブログ",
  },
  {
    id: "4",
    name: "つれづれ草子",
  },
  {
    id: "5",
    name: "インターネット観察日記",
  },
  {
    id: "6",
    name: "びっくりブログ",
  },
  {
    id: "7",
    name: "つれづれ草子",
  },
  {
    id: "8",
    name: "インターネット観察日記",
  },
  {
    id: "9",
    name: "びっくりブログ",
  },
  {
    id: "10",
    name: "つれづれ草子",
  },
  {
    id: "11",
    name: "インターネット観察日記",
  },
  {
    id: "12",
    name: "びっくりブログ",
  },
  {
    id: "13",
    name: "つれづれ草子",
  },
  {
    id: "14",
    name: "インターネット観察日記",
  },
  {
    id: "15",
    name: "びっくりブログ",
  },
];

export async function findBlog(id: string): Promise<BlogData | undefined> {
  return BLOGS.find((blog) => blog.id === id);
}

export async function findBlogs(
  ids: readonly string[]
): Promise<{ [id in string]: BlogData }> {
  const result: { [id in string]: BlogData } = {};
  for (const id of ids) {
    const blog = await findBlog(id);
    if (!blog) {
      continue;
    }
    result[id] = blog;
  }
  return result;
}

export async function getBlogs(): Promise<BlogData[]> {
  return BLOGS;
}
