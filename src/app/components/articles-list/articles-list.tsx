import Image from 'next/image'
import './articles-list.scss'
import Link from 'next/link'

const ArticlesList = () => {
  return (
    <section className='articles' id='articles'>
      <div className='articles__container container'>
        <h2 className='articles__title'>Статьи</h2>
        <div className='articles__list'>
          <Link href='/articles/article1' className='articles__block'>
            <div className='articles__content'>
              <h3 className='articles__content-title'>Название статьи статьи статьи статьи</h3>
              <p className='articles__content-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam similique qui deserunt
                nesciunt eos libero cum consectetur iusto culpa nulla quisquam dolor architecto
                earum quos, soluta cupiditate, voluptates maiores laborum ab est, facilis vero unde!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam impedit
                blanditiis non et at exercitationem dolorem itaque veritatis sint beatae magnam
                error fuga quis expedita, minus aut omnis consectetur dolor.
              </p>
            </div>
            <div className='articles__image'>
              <picture>
                <source media='(max-width: 767px)' srcSet='assets/img/article-page/slider-1.jpg' />
                <source media='(max-width: 1279px)' srcSet='assets/img/article-page/slider-1.jpg' />
                <Image src='/assets/img/article-page/slider-1.jpg' alt='' width={302} height={300} />
              </picture>
            </div>
          </Link>
          <a href='#' className='articles__block'>
            <div className='articles__content'>
              <h3 className='articles__content-title'>Название статьи статьи</h3>
              <p className='articles__content-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed rem aliquam
                minus voluptates non! Ducimus esse suscipit eum beatae totam? Eum incidunt atque
                quisquam odio blanditiis molestias, sequi ipsam, a necessitatibus omnis ut dolor
                itaque voluptatem, provident nostrum inventore velit porro animi exercitationem.
                Animi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aliquam
                facere iure explicabo amet distinctio. Totam aspernatur ex fuga provident.
              </p>
            </div>
            <div className='articles__image'>
              <picture>
                <source media='(max-width: 767px)' srcSet='assets/img/article-page/slider-2.jpg' />
                <source media='(max-width: 1279px)' srcSet='assets/img/article-page/slider-2.jpg' />
                <Image src='/assets/img/article-page/slider-2.jpg' alt='' width={302} height={300}/>
              </picture>
            </div>
          </a>
          <a href='#' className='articles__block'>
            <div className='articles__content'>
              <h3 className='articles__content-title'>Название статьи</h3>
              <p className='articles__content-text'>
                Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                officia aperiam qui eos unde beatae suscipit debitis repellendus dolores, eum
                sapiente dolorum voluptatem molestiae cumque delectus corrupti explicabo minima
                fugiat! amet consectetur adipisicing elit. Fugiat incidunt minus, facilis modi
                tempore voluptatem. Minus enim quibusdam aliquid molestiae? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Totam fugiat impedit deleniti quae nulla omnis
                tempora sit beatae voluptates optio!
              </p>
            </div>
            <div className='articles__image'>
              <picture>
                <source media='(max-width: 767px)' srcSet='assets/img/article-page/slider-3.jpg' />
                <source media='(max-width: 1279px)' srcSet='assets/img/article-page/slider-3.jpg' />
                <Image src='/assets/img/article-page/slider-3.jpg' alt='' width={302} height={300} />
              </picture>
            </div>
          </a>
          <a href='#' className='articles__block'>
            <div className='articles__content'>
              <h3 className='articles__content-title'>Название статьи</h3>
              <p className='articles__content-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat incidunt minus,
                facilis modi tempore voluptatem. Minus enim quibusdam aliquid molestiae?
              </p>
            </div>
            <div className='articles__image'>
              <picture>
                <source media='(max-width: 767px)' srcSet='assets/img/article-page/slider-3.jpg' />
                <source media='(max-width: 1279px)' srcSet='assets/img/article-page/slider-3.jpg' />
                <Image src='/assets/img/article-page/slider-3.jpg' alt='' width={302} height={300} />
              </picture>
            </div>
          </a>
        </div>
        <div className='articles-pagination'>
          <button className='articles-pagination__button'>Показать больше</button>
        </div>
      </div>
    </section>
  )
}

export default ArticlesList
