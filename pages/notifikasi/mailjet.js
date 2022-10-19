export default function CariLapangan() {
    const handlePost = async (e) => {
        let response = await fetch('/api/notifikasi/transaksipending', {
            method: 'POST',
        });
        let data = await response.json();
        alert(data.message)
    }

    return (
        <>
            <div className='container my-4'>
                <button onClick={handlePost}>Cek Mail jet</button>
            </div>



        </>
    )
}
