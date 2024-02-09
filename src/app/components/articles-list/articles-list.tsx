import Image from 'next/image'
import './articles-list.scss'
import Link from 'next/link'
import { ArticleList } from './types'
import ArticlesListItem from './articles-list-item'

const ArticlesList = async ({ articles }: { articles: ArticleList}) => {

  return (
    <section className='articles' id='articles'>
      <div className='articles__container container'>
        <h2 className='articles__title'>Статьи</h2>
        <div className='articles__list'>
          {articles.data.map((article) => (
            <ArticlesListItem
              key={article.id}
              id={article.id}
              title={article.attributes.Title}
              description={article.attributes.Description}
              image={article.attributes.ImageBlock.data.attributes.url}
            />
          ))}
        </div>
        <div className='articles-pagination'>
          <button className='articles-pagination__button'>Показать больше</button>
        </div>
      </div>
    </section>
  )
}

export default ArticlesList
