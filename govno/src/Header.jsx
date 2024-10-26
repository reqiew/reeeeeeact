import './HeaderStyle.css'
import photo from './assets/Frame.png'

function Header(){
    return(
        <section className='Head'>
            <div className='tophead'>
                <div className='mid'>
                    <a href="">Membership</a>
                    <a href="">Members</a>
                </div>
                <div className='left'>
                    <a href="">sign in</a>
                    <a href="">Reserve</a>
                </div>
            </div>
            <div className='foodtrash'>
                <h1>Food isn’t trash</h1>
                <h2>Mill keeps it from stinking up your kitchen — and the planet.</h2>
                <button>
                    <img src={photo}/>
                    <p>Watch video</p>
                </button>
            </div>
        </section>


    )      


}

export default Header