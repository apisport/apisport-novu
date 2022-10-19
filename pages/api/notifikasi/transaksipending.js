import { Novu } from '@novu/node';
// mengambil data dari collection Transaksi
async function sendNotif(req, res) {
    const novu = new Novu('220e6789485ac3965c83f9789c7bdad8');

    await novu.trigger('transaksi-pending', {
        to: {
            subscriberId: '<REPLACE_WITH_DATA>',
            email: 'avitanurdiana@gmail.com'
        },
        payload: {
            name: 'Kreatif',
            user: 'Apowa'
        }
    });
    return res.json({
        message: 'email terkirim',
        success: true
    });
}

// menambah data kedalam collection Transaksi
// CRUD handler
export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return sendNotif(req, res);
        }
        case 'POST': {
            return sendNotif(req, res);
        }
        case 'PUT': {
            return updateMitra(req, res);
        }
        case 'DELETE': {
            return deleteMitra(req, res);
        }
    }
}