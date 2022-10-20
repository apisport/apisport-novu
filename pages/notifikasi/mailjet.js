import { Novu } from '@novu/node';
import NextCors from 'nextjs-cors';
import Cors from 'cors'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options



export default function CariLapangan() {
    const cors = Cors({
        methods: ['POST', 'GET', 'HEAD'],
    })
    const novu = new Novu(process.env.NOVU_TOKEN);
    async function sendEmail(cors) {
        let work = {
            nama: 'yes'
        }
        await novu.trigger('transaksi-pending', {
            to: {
                subscriberId: 'darkcruel4@gmail.com',
                email: 'darkcruel4@gmail.com'
            },
            payload: {
                name: 'yahya',
                user: 'webber'
            }
        });

        alert('email terkirim')
        return res.json(work)
    }
    const handlePost = () => {
        sendEmail(cors)

    }

    return (
        <>
            <div className='container my-4'>
                <button onClick={handlePost}>Cek Mail jet</button>
            </div>



        </>
    )
}
