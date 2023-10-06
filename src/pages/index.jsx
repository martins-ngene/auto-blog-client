import HomePage from "@/components/home";
import LatestArticles from "@/components/latest_articles";
import NewsLetterForm from "@/components/newsletter_form";
import Seo from "@/components/seo";

export default function Home({ articles }) {
  return (
    <>
      <Seo title='Home' />
      <HomePage />
      <LatestArticles articles={articles} />
      <NewsLetterForm />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL_BACKEND}/articles`
  );
  const articles = await response.json();

  // By returning { props: { articles } }, the Blog component will receive `posts` as a prop at build time
  return { props: { articles } };
}
