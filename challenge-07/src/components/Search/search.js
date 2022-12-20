
import styles from './assets/css/search.module.css'

const Search = () => {
    return (
        <section id="search">
            <div className=''>
            <div className="d-flex justify-content-center p-5">
                        <div className="search-rectangle p-4" style={{position: "relative", marginTop:"-3%"}}>
                            <form className="row p-2">
                                <div className="col p-2">
                                    <label className="form-label">Tipe Driver</label>
                                    <select className="form-select" id="tipe-driver">
                                        <option selected value="default">Pilih Tipe Driver</option>
                                        <option value="dengan_sopir">Dengan Sopir</option>
                                        <option value="tanpa_sopir">Tanpa Sopir (Lepas Kunci)</option>
                                    </select>
                                </div>
                                <div className="col p-2">
                                    <label className="form-label">Tanggal</label>
                                    <input className="form-control" id="tanggal-booking" type="date"
                                        placeholder="Pilih Tanggal" />
                                </div>
                                <div className="col p-2">
                                    <label className="form-label">Waktu Jemput/Ambil</label>
                                    <select id="waktu-booking" className="form-select">
                                        <option selected value="default">Pilih waktu jemput</option>
                                        <option value="08:00">08.00 WIB</option>
                                        <option value="09:00">09.00 WIB</option>
                                        <option value="10:00">10.00 WIB</option>
                                        <option value="11:00">11.00 WIB</option>
                                        <option value="12:00">12.00 WIB</option>
                                    </select>
                                </div>
                                <div className="col-3 p-2">
                                    <label className="form-label">Jumlah Penumpang (optional)</label>
                                    <select id="jumlah-penumpang" className="form-select">
                                        <option selected value="0">Pilih Jumlah Penumpang</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                                <div className="col-2 p-2 d-flex align-items-end">
                                    <button type="submit" className={styles.Button} id="submit-btn">Cari Mobil</button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
                    
                </section>

        
    )
}

export default Search