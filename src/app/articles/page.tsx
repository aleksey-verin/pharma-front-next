import ArticlesList from "../components/articles-list/articles-list"
import { ArticleList } from "../components/articles-list/types"

const ArticlesPage = async () => {
  const reqUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/articlemnews?populate[2]=ImageBlock&fields[0]=title&fields[1]=Description`
  const headersList = {
    "Authorization": `bearer ${process.env.TOKEN}`,
   }
   
   let request = await fetch(reqUrl, { 
     method: "GET",
     headers: headersList,
     cache: 'no-store'
   });
  const articles = await request.json() as ArticleList


  return (
    <ArticlesList articles={articles} />
  )
}

export default ArticlesPage 