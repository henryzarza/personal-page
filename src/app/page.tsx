import { Main } from './home-sections';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />
      <section>
        <h1 className='heading-1'>This is a Heading 1</h1>
        <h2 className='heading-2'>This is a Sub headig 1</h2>
        <h3 className='heading-3'>This is a Sub headig 3</h3>
        <h4 className='heading-4'>This is a Sub headig 4</h4>
        <p className='base-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, tenetur. Veritatis incidunt libero repudiandae, architecto dolorum illum porro sint unde exercitationem aut inventore sed culpa accusamus minima, eaque repellendus corrupti!
        </p>
        <p className='highlighted-text'>
          Magnam, porro vitae, fuga provident ratione distinctio nihil maxime non saepe commodi, illo optio eum et dicta beatae ipsa sunt nesciunt veniam fugit ad tempora hic obcaecati veritatis. Cupiditate, soluta?
        </p>
        <p className="small-text">
          Hic corrupti velit suscipit a reiciendis animi quibusdam, recusandae molestias ipsum, eveniet porro officia ratione deserunt in vel commodi aliquid alias iste praesentium eum harum cumque dolore! Doloremque, eos quia.
        </p>
      </section>
    </main>
  )
}
