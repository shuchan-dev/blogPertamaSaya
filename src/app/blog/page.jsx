import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const BlogPage = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  try {
    const { posts } = await getData(page, cat);

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
          {posts && posts.length > 0 ? (
            <>
              <CardList page={page} cat={cat} />
            </>
          ) : (
            <div className={styles.cont}>
              <p>Belum ada postingan.</p>
            </div>
          )}
          <Menu />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error while fetching data:", error);
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
          <p>Gagal mengambil data. Periksa Koneksi Anda</p>
          <Menu />
        </div>
      </div>
    );
  }
};

export default BlogPage;
