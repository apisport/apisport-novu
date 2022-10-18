const mailjet = require('node-mailjet')
    .connect('****************************1234', '****************************abcd')

export default function CariLapangan() {
    const handlePost = () => {
        const request = mailjet
            .post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": "api.sport.team@gmail.com",
                            "Name": "Api"
                        },
                        "To": [
                            {
                                "Email": "api.sport.team@gmail.com",
                                "Name": "Api"
                            }
                        ],
                        "Subject": "Greetings from Mailjet.",
                        "TextPart": "My first Mailjet email",
                        "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                        "CustomID": "AppGettingStartedTest"
                    }
                ]
            })
        request
            .then((result) => {
                console.log(result.body)
            })
            .catch((err) => {
                console.log(err.statusCode)
            })

    }

    return (
        <>
            <div className='container my-4'>
                <button onClick={handlePost}>Cek Mail jet</button>
            </div>



        </>
    )
}
