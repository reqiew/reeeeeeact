import './Footerrr.css'
import inst from './assets/inst.png'
import hz from './assets/hz.png'
import tt from './assets/tt.png'
import Fb from './assets/Fb.png'
import miliii from './assets/milipizd.png'

function Footerrr(){
    return(
        <section className='sec6'>
            <div className='mainTop'>
                <div className='CHP'>
                <div className='CHF'>
                    <h1>Company</h1>
                    <div className='TFO'>
                        <p>Team</p>
                        <p>Careers</p>
                        <p>Pressroom</p>
                    </div>
                    
                </div>
                <div className='CHF'>
                    <h1>Help</h1>
                    <div className='TFO'>
                        <p>FAQ</p>
                        <p>Help centre</p>
                        <p>Contact us</p>
                    </div>
                    
                </div>
                <div className='CHF'>
                    <h1>For partners</h1>
                    <div className='TFO'>
                        <p>Organizations</p>
                        <p>Municipalities</p>
                        <p>Communities</p>
                    </div>
                    
                </div>
                </div>
                    <div className='Social'>
                        <img src={inst} alt="" />
                        <img src={hz} alt="" />
                        <img src={tt} alt="" />
                        <img src={Fb} alt="" />
                    </div>
               
            </div>

            <div className='botFoot'>
                <div className='TTT'>
                    <p>Terms of service</p>
                    <p>Trademarks</p>
                    <p>Privacy policy</p>
                </div>
                <div className='posl'>
                    <h5>Copyright ©</h5>
                    <h5>2023 Mill
                         Industries Inc. Mill, Mill Membership,
                          Food Grounds,</h5>
                    <img src={miliii} alt="" />
                    <h5>, and related marks are trademarks of Mill.</h5>
                </div>
            </div>



        </section>
    )
}
export default Footerrr