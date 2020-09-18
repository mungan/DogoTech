import React, { Component } from 'react'

export class Section extends Component {
    state = {
        products: [
            {
                "id" : "1",
                "title" : "SUPERSTAR VEGAN AYAKKABI",
                "stocks" : ["Stokta yalnızca 5 adet kaldı","Tükenmek üzere","Stokta yalnızca 2 adet kaldı","Tükendi","Son 1 adet kaldı"],
                "numbers" : ["40","41","42","43","44"],
                "normalprice" : "990 TL",
                "saleprice" : "891 TL",
                "campaignrate" : "- %10",
                "category" : "Anasayfa > Erkek > Ayakkabı > Yeni Sezon",
                "src" : [
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/29d99d71262249438241ab57011b3b10_9366/Superstar_Vegan_Ayakkabi_Beyaz_FW2295_01_standard.jpg",
                    "https://assets.adidas.com/images/h_2000,f_auto,q_auto:sensitive,fl_lossy/de08f06d485c41ad9c82ab57011b3dcf_9366/Superstar_Vegan_Ayakkabi_Beyaz_FW2295_02_standard.jpg",
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/83bd73f8ffb24a32a825ab57011b41c2_9366/Superstar_Vegan_Ayakkabi_Beyaz_FW2295_04_standard.jpg",
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/e2d0b9a8e4904b1f9a48ab57011b4311_9366/Superstar_Vegan_Ayakkabi_Beyaz_FW2295_05_standard.jpg",
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/d27b0f5486cf4d8d99e3ab57011b44e0_9366/Superstar_Vegan_Ayakkabi_Beyaz_FW2295_41_detail.jpg"
                ],
                "description" : "Adidas Superstar Ayakkabı, 70'lerden bu yana kültürün şekillenmesinde büyük bir rol oynadı. Ve hala devam ediyor. Vegan sertifikalı bu ayakkabı, hayvansal ürünlerin kullanımını tamamen sonlandırıyor. Model, görünümü ve konfor hissi ile geçmişi onurlandırırken geleceğe doğru yol alıyor. Bu senin de yardımınla gerçekleşecek. Birileri bu değişimi başlatmalı."

            }
        ],
        index : 0,
        value : 0
    };

    // Yeni referans oluşturma
    myRef = React.createRef();
    myRef2 = React.createRef();

    // Resimlerin boyutuna göre aktif olan resme active class'ının eklenmesi
    handleTab = index => {
        this.setState({index: index})
        const images = this.myRef.current.children;
        for(let i =0; i<images.length; i++){
            images[i].className = images[i].className.replace("active","");
        }
        images[index].className = "active";
    };

    // Ayakkabı numaralarına göre aktif olan numaraya active class'ının eklenmesi
    numberTab = value => {
        this.setState({value: value});
        const numbers = this.myRef2.current.children;
        for(let i=0; i<numbers.length; i++){
             numbers[i].className = numbers[i].className.replace("active", "");
        }
        numbers[value].className = "active";
    }

    // Sepete ekle butonuna basıldığında ayakkabı ismi yazılması
    showAlert(){
        alert("SUPERSTAR VEGAN AYAKKABI");
    }

    // Sayfa ilk açılırken active classına sahip olan ayakkabı numarası ve resmin görüntülenmesi
    componentDidMount(){
        const{index} = this.state;
        this.myRef.current.children[index].className = "active";
        const{value} = this.state;
        this.myRef2.current.children[value].className = "active";
    }

   

    render() {
        const {products, index, value} = this.state;
        return (
            <div className="section">
                {   
                    // ürünlere ait detayların alınması
                    products.map(item => (
                        <div className="details flex justify-around flex-wrap" key={item.id}>
                            
                            {/* Ana Resim */}
                            <div className="big-img overflow-hidden">
                                <span className="flex">{item.category}</span>
                                <img src={item.src[index]} alt="" className="w-full h-full block object-cover"/>
                            </div>

                            {/* Başlık, eski ve yeni fiyat, kampanya oranı */}
                            <div className="box">
                                <div className="row titles flex justify-between">
                                    <h2 className="uppercase">{item.title}</h2>
                                    <span className="normalprice">{item.normalprice}</span>
                                    <span className="saleprice text-red-600 font-bold">{item.saleprice}</span>
                                    <span className="campaingrate">{item.campaignrate}</span>
                                </div>

                                {/* Ayakkabı Numarası ve Beden Tablosu Başlıkları */}
                                <div className="row flex justify-center">
                                <p className="mr-2">Ayakkabı Numarası</p>    
                                <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-0 px-2 rounded">Beden Tablosu</button>
                                </div>

                                {/* Ayakkabı Numaraları */}
                                <div className="numbers" ref={this.myRef2}>
                                    {
                                        item.numbers.map((number, value) => (
                                        <button className="rounded" key={value} onClick={() => this.numberTab(value)}>{number}</button>
                                        ))
                                    }
                                </div>

                                {/* Ürün Açıklaması, Stok Bilgisi */}        
                                <p className="desc">{item.description}</p>
                                <p className="text-red-600">{
                                     item.stocks[value]
                                }</p>
                               
                                
                                {/* Ürünlere ait küçük resimler ve Sepete Ekleme */}
                                <div className="thumb" ref={this.myRef}>
                                    {
                                        item.src.map((img, index) => (
                                            <img className="h-full block object-cover" src={img} alt="" key={index}
                                            onClick={() => this.handleTab(index)}
                                            />
                                        ))
                                    }
                                </div>
                                <button className="cart bg-blue-600 hover:bg-blue-700 font-bold text-white cursor-pointer" onClick={this.showAlert}>Sepete Ekle</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Section
