export type PostData = {
  id: string;
  blogId: string;
  title: string;
  body: string;
};

const POSTS: PostData[] = [
  {
    id: "1",
    blogId: "1",
    title: "今日はお寿司を食べました",
    body: "白身魚がおいしかった！",
  },
  {
    id: "2",
    blogId: "1",
    title: "今日は雨でした",
    body: "家の掃除をして過ごしました。",
  },
  {
    id: "3",
    blogId: "1",
    title: "今日はお買い物に行ったよ",
    body: "ずっと欲しかった靴を買いました。",
  },
  {
    id: "4",
    blogId: "2",
    title: "映画",
    body: "映画は感想を読む前にまっさらな気持ちでみたい。",
  },
  {
    id: "5",
    blogId: "2",
    title: "水族館",
    body: "話題になっていたクラゲの展示が気になる。",
  },
  {
    id: "6",
    blogId: "3",
    title: "散歩に行ったら",
    body: "空から魚が降ってきてびっくりした！",
  },
];

export async function findPostByBlogId(blogId: string): Promise<PostData[]> {
  return POSTS.filter((post) => post.blogId === blogId);
}

export async function findPost(id: string): Promise<PostData | undefined> {
  return POSTS.find((post) => post.id === id);
}
