import Count from '../components/count/Count'
import Form from '../components/form/Form'
import Grid from '../components/grid/Grid'
import { AiFillHeart } from 'react-icons/ai';

function MainLayout() {
  return (
    <main className='custom-mainLayout'>
      <header className='custom-headerLayout'>
        <h1 className='custom-TitleLayout'><span className='font-semibold'>TO</span>day</h1>
        <h3 className='custom-descriptionLayout'>Wake up , go ahead , do the thing not tomorrow, do <span className='font-semibold'>to</span>
          <span className='font-thin'>day</span>.</h3>
      </header>

      <section className='custom-gridLayout'>
        <div>
          <Grid />
        </div>
        <div className='space-y-3'>
          <Count />
          <Form />
        </div>

        <div>
          <p className='custom-quoteText'>“Chuck Norris Phrase”</p>
          <p className='custom-quoteAuthor'>By Chuck Norris.</p>
        </div>
      </section>

      <footer className='custom-footerLayout'>
        <h3 className='custom-footerCredits'>@Did from <span className='inline-block'><AiFillHeart /></span> by Your João sousa</h3>
      </footer>
    </main>
  )
}

export default MainLayout
