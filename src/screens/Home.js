/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ReadMore from '@fawazahmed/react-native-read-more';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          gambar: require('../assets/img/Apel.jpg'),
          judul: 'Apel',
          deskripsi:
            'Apel merupakan jenis buah-buahan, atau buah yang dihasilkan dari pohon buah apel. Buah apel biasanya berwarna merah kulitnya jika masak dan (siap dimakan), namun bisa juga kulitnya berwarna hijau atau kuning. Kulit buahnya agak lembek dan daging buahnya keras. Buah apel memiliki beberapa biji di dalamnya.',
        },
        {
          id: 2,
          gambar: require('../assets/img/Jeruk.jpg'),
          judul: 'Jeruk',
          deskripsi:
            'Jeruk (bahasa Inggris: orange) adalah buah dari berbagai spesies citrus dalam famili Rutaceae (lihat daftar tanaman yang dikenal sebagai jeruk); terutama mengacu pada Citrus x sinensis, yang juga disebut jeruk manis, untuk membedakannya dari Citrus x aurantium terkait, yang disebut jeruk pahit. Jeruk manis bereproduksi secara aseksual (apomiksis melalui nucellar embryony); varietas jeruk manis muncul melalui mutasi.',
        },
        {
          id: 3,
          gambar: require('../assets/img/Mangga.jpg'),
          judul: 'Mangga',
          deskripsi:
            'Mangga atau mempelam adalah nama sejenis buah, demikian pula nama pohonnya. Mangga termasuk ke dalam genus Mangifera, yang terdiri dari 35 - 40 anggota dari famili Anacardiaceae. Nama "mangga" berasal dari bahasa Tamil, mankay, yang berarti man "pohon mangga" + kay "buah". Kata ini dibawa ke Eropa oleh orang-orang Portugis dan diserap menjadi manga (bahasa Portugis), mango (bahasa Spanyol dan Inggris) dan lainnya.',
        },
        {
          id: 4,
          gambar: require('../assets/img/Alpukat.jpg'),
          judul: 'Alpukat',
          deskripsi:
            'Alpukat atau avokad (Persea americana) adalah tumbuhan penghasil buah meja dengan nama sama. Tumbuhan ini berasal dari Meksiko dan Amerika Tengah dan kini banyak dibudidayakan di Amerika Selatan dan Amerika Tengah sebagai tanaman perkebunan monokultur dan sebagai tanaman pekarangan di daerah-daerah tropika lainnya di dunia.',
        },
        {
          id: 5,
          gambar: require('../assets/img/Nanas.jpg'),
          judul: 'Nanas',
          deskripsi:
            'Nanas (Ananas comosus) adalah tumbuhan tropis dengan buah yang dapat dimakan dan tumbuhan yang paling penting secara ekonomi dalam famili Bromeliaceae. Nanas adalah tumbuhan asli Amerika Selatan, dan telah dibudidayakan disana selama berabad-abad. Pengenalan nanas ke Eropa pada abad ke-17 menjadikannya ikon budaya kemewahan yang signifikan. Sejak tahun 1820-an, nanas telah ditanam secara komersial di rumah kaca dan banyak perkebunan tropis. Selain itu, nanas merupakan buah tropis terpenting ketiga dalam produksi dunia. Pada abad ke-20, Hawaii adalah penghasil nanas yang dominan, terutama untuk AS; namun, pada tahun 2016, Kosta Rika, Brasil, dan Filipina menyumbang hampir sepertiga dari produksi nanas dunia.',
        },
        {
          id: 6,
          gambar: require('../assets/img/Anggur.jpg'),
          judul: 'Anggur',
          deskripsi:
            'Anggur merupakan tanaman buah berupa perdu merambat yang termasuk ke dalam keluarga Vitaceae. Buah ini biasanya digunakan untuk membuat jus anggur, jelly, minuman anggur, minyak biji anggur dan kismis, atau dimakan langsung. Buah ini juga dikenal karena mengandung banyak senyawa polifenol dan resveratol yang berperan aktif dalam berbagai metabolisme tubuh, serta mampu mencegah terbentuknya sel kanker dan berbagai penyakit lainnya. Aktivitas ini juga terkait dengan adanya senyawa metabolit sekunder di dalam buah anggur yang berperan sebagai senyawa antioksidan yang mampu menangkal radikal bebas.',
        },
        {
          id: 7,
          gambar: require('../assets/img/Sirsak.jpeg'),
          judul: 'Sirsak',
          deskripsi:
            'Sirsak, nangka belanda, atau durian belanda (Annona muricata L.) adalah tumbuhan berbunga yang berasal dari Karibia, Amerika Tengah dan Amerika Selatan. Di berbagai daerah Indonesia dikenal sebagai nangka sebrang, nangka landa (Jawa), nangka walanda, sirsak (Sunda), nangka buris, nangkèlan, nangka ènglan (Madura), srikaya jawa (Bali), boh lôna (Aceh), durio ulondro (Nias), durian betawi (Minangkabau),durian belanda (Malaysia), serta jambu landa (di Lampung, "Nangko Belando" (Palembang). Penyebutan "belanda" dan variasinya menunjukkan bahwa sirsak (dari bahasa Belanda: zuurzak, berarti "kantung asam") didatangkan oleh pemerintah kolonial Hindia Belanda ke Nusantara, yaitu pada abad ke-19, meskipun bukan berasal dari Eropa.',
        },
        {
          id: 8,
          gambar: require('../assets/img/Durian.jpg'),
          judul: 'Durian',
          deskripsi:
            'Durian adalah nama tumbuhan tropis yang berasal dari wilayah Asia Tenggara, sekaligus nama buahnya yang bisa dimakan. Nama ini diambil dari ciri khas kulit buahnya yang keras dan berlekuk-lekuk tajam sehingga menyerupai duri. Sebutan populernya adalah "raja dari segala buah" (King of Fruit). Durian adalah buah yang kontroversial, meskipun banyak orang yang menyukainya, tetapi sebagiannya kurang menyukai dengan aromanya.',
        },
        {
          id: 9,
          gambar: require('../assets/img/Lengkeng.jpg'),
          judul: 'Lengkeng',
          deskripsi:
            'Lengkeng (juga disebut kelengkeng, matakucing, longan, Dimocarpus longan, suku lerak-lerakan atau Sapindaceae) adalah tanaman buah-buahan yang berasal dari daratan Asia Tenggara. Pohon lengkeng dapat mencapai tinggi 40 m dan diameter batangnya hingga sekitar 1 m. Berdaun majemuk, dengan 2-4(-6) pasang anak daun, sebagian besar berbulu rapat pada bagian aksialnya. Tangkai daun 1–20 cm, tangkai anak daun 0,5-3,5 cm. Anak daun bulat memanjang, panjang lk. 1-5 kali lebarnya, bervariasi 3-45 × 1,5–20 cm, mengertas sampai menjangat, dengan bulu-bulu kempa terutama di sebalah bawah di dekat pertulangan daun.',
        },
        {
          id: 10,
          gambar: require('../assets/img/Pir.jpg'),
          judul: 'Pir',
          deskripsi:
            'Pir (bahasa Inggris:pear) adalah sebutan untuk pohon dari genus Pyrus dan buah yang dihasilkan. Beberapa spesies pohon pir menghasilkan buah yang enak dimakan karena mengandung banyak air, masir dan manis. Pear adalah nama dalam bahasa Inggris. Pir adalah pohon yang berasal dari daerah beriklim tropis di Eropa Barat, Asia dan Afrika Utara. Pohon berketinggian sedang, bisa mencapai 10-17 meter tapi sebagian spesies merupakan pohon yang pendek yang memiliki daun yang rimbun.',
        },
      ],
      dataTampil: [
        {
          id: 1,
          gambar: require('../assets/img/Apel.jpg'),
          judul: 'Apel',
          deskripsi:
            'Apel merupakan jenis buah-buahan, atau buah yang dihasilkan dari pohon buah apel. Buah apel biasanya berwarna merah kulitnya jika masak dan (siap dimakan), namun bisa juga kulitnya berwarna hijau atau kuning. Kulit buahnya agak lembek dan daging buahnya keras. Buah apel memiliki beberapa biji di dalamnya.',
        },
        {
          id: 2,
          gambar: require('../assets/img/Jeruk.jpg'),
          judul: 'Jeruk',
          deskripsi:
            'Jeruk (bahasa Inggris: orange) adalah buah dari berbagai spesies citrus dalam famili Rutaceae (lihat daftar tanaman yang dikenal sebagai jeruk); terutama mengacu pada Citrus x sinensis, yang juga disebut jeruk manis, untuk membedakannya dari Citrus x aurantium terkait, yang disebut jeruk pahit. Jeruk manis bereproduksi secara aseksual (apomiksis melalui nucellar embryony); varietas jeruk manis muncul melalui mutasi.',
        },
        {
          id: 3,
          gambar: require('../assets/img/Mangga.jpg'),
          judul: 'Mangga',
          deskripsi:
            'Mangga atau mempelam adalah nama sejenis buah, demikian pula nama pohonnya. Mangga termasuk ke dalam genus Mangifera, yang terdiri dari 35 - 40 anggota dari famili Anacardiaceae. Nama "mangga" berasal dari bahasa Tamil, mankay, yang berarti man "pohon mangga" + kay "buah". Kata ini dibawa ke Eropa oleh orang-orang Portugis dan diserap menjadi manga (bahasa Portugis), mango (bahasa Spanyol dan Inggris) dan lainnya.',
        },
        {
          id: 4,
          gambar: require('../assets/img/Alpukat.jpg'),
          judul: 'Alpukat',
          deskripsi:
            'Alpukat atau avokad (Persea americana) adalah tumbuhan penghasil buah meja dengan nama sama. Tumbuhan ini berasal dari Meksiko dan Amerika Tengah dan kini banyak dibudidayakan di Amerika Selatan dan Amerika Tengah sebagai tanaman perkebunan monokultur dan sebagai tanaman pekarangan di daerah-daerah tropika lainnya di dunia.',
        },
        {
          id: 5,
          gambar: require('../assets/img/Nanas.jpg'),
          judul: 'Nanas',
          deskripsi:
            'Nanas (Ananas comosus) adalah tumbuhan tropis dengan buah yang dapat dimakan dan tumbuhan yang paling penting secara ekonomi dalam famili Bromeliaceae. Nanas adalah tumbuhan asli Amerika Selatan, dan telah dibudidayakan disana selama berabad-abad. Pengenalan nanas ke Eropa pada abad ke-17 menjadikannya ikon budaya kemewahan yang signifikan. Sejak tahun 1820-an, nanas telah ditanam secara komersial di rumah kaca dan banyak perkebunan tropis. Selain itu, nanas merupakan buah tropis terpenting ketiga dalam produksi dunia. Pada abad ke-20, Hawaii adalah penghasil nanas yang dominan, terutama untuk AS; namun, pada tahun 2016, Kosta Rika, Brasil, dan Filipina menyumbang hampir sepertiga dari produksi nanas dunia.',
        },
        {
          id: 6,
          gambar: require('../assets/img/Anggur.jpg'),
          judul: 'Anggur',
          deskripsi:
            'Anggur merupakan tanaman buah berupa perdu merambat yang termasuk ke dalam keluarga Vitaceae. Buah ini biasanya digunakan untuk membuat jus anggur, jelly, minuman anggur, minyak biji anggur dan kismis, atau dimakan langsung. Buah ini juga dikenal karena mengandung banyak senyawa polifenol dan resveratol yang berperan aktif dalam berbagai metabolisme tubuh, serta mampu mencegah terbentuknya sel kanker dan berbagai penyakit lainnya. Aktivitas ini juga terkait dengan adanya senyawa metabolit sekunder di dalam buah anggur yang berperan sebagai senyawa antioksidan yang mampu menangkal radikal bebas.',
        },
        {
          id: 7,
          gambar: require('../assets/img/Sirsak.jpeg'),
          judul: 'Sirsak',
          deskripsi:
            'Sirsak, nangka belanda, atau durian belanda (Annona muricata L.) adalah tumbuhan berbunga yang berasal dari Karibia, Amerika Tengah dan Amerika Selatan. Di berbagai daerah Indonesia dikenal sebagai nangka sebrang, nangka landa (Jawa), nangka walanda, sirsak (Sunda), nangka buris, nangkèlan, nangka ènglan (Madura), srikaya jawa (Bali), boh lôna (Aceh), durio ulondro (Nias), durian betawi (Minangkabau),durian belanda (Malaysia), serta jambu landa (di Lampung, "Nangko Belando" (Palembang). Penyebutan "belanda" dan variasinya menunjukkan bahwa sirsak (dari bahasa Belanda: zuurzak, berarti "kantung asam") didatangkan oleh pemerintah kolonial Hindia Belanda ke Nusantara, yaitu pada abad ke-19, meskipun bukan berasal dari Eropa.',
        },
        {
          id: 8,
          gambar: require('../assets/img/Durian.jpg'),
          judul: 'Durian',
          deskripsi:
            'Durian adalah nama tumbuhan tropis yang berasal dari wilayah Asia Tenggara, sekaligus nama buahnya yang bisa dimakan. Nama ini diambil dari ciri khas kulit buahnya yang keras dan berlekuk-lekuk tajam sehingga menyerupai duri. Sebutan populernya adalah "raja dari segala buah" (King of Fruit). Durian adalah buah yang kontroversial, meskipun banyak orang yang menyukainya, tetapi sebagiannya kurang menyukai dengan aromanya.',
        },
        {
          id: 9,
          gambar: require('../assets/img/Lengkeng.jpg'),
          judul: 'Lengkeng',
          deskripsi:
            'Lengkeng (juga disebut kelengkeng, matakucing, longan, Dimocarpus longan, suku lerak-lerakan atau Sapindaceae) adalah tanaman buah-buahan yang berasal dari daratan Asia Tenggara. Pohon lengkeng dapat mencapai tinggi 40 m dan diameter batangnya hingga sekitar 1 m. Berdaun majemuk, dengan 2-4(-6) pasang anak daun, sebagian besar berbulu rapat pada bagian aksialnya. Tangkai daun 1–20 cm, tangkai anak daun 0,5-3,5 cm. Anak daun bulat memanjang, panjang lk. 1-5 kali lebarnya, bervariasi 3-45 × 1,5–20 cm, mengertas sampai menjangat, dengan bulu-bulu kempa terutama di sebalah bawah di dekat pertulangan daun.',
        },
        {
          id: 10,
          gambar: require('../assets/img/Pir.jpg'),
          judul: 'Pir',
          deskripsi:
            'Pir (bahasa Inggris:pear) adalah sebutan untuk pohon dari genus Pyrus dan buah yang dihasilkan. Beberapa spesies pohon pir menghasilkan buah yang enak dimakan karena mengandung banyak air, masir dan manis. Pear adalah nama dalam bahasa Inggris. Pir adalah pohon yang berasal dari daerah beriklim tropis di Eropa Barat, Asia dan Afrika Utara. Pohon berketinggian sedang, bisa mencapai 10-17 meter tapi sebagian spesies merupakan pohon yang pendek yang memiliki daun yang rimbun.',
        },
      ],
      pencarian: '',
    };
  }

  pencarian = () => {
    let data = this.state.data;

    data = data.filter(item =>
      item.judul.toLowerCase().includes(this.state.pencarian.toLowerCase()),
    );

    this.setState({dataTampil: data});
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor="#1976d2"></StatusBar>
        <View
          style={{
            backgroundColor: '#2196f3',
            paddingVertical: 20,
            elevation: 3,
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 1, alignItems: 'center', marginLeft: 40}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Home
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('About')}>
            <Icon
              style={{marginRight: 10}}
              name="info-circle"
              size={25}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>

        <TextInput
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 50,
            paddingLeft: 15,
          }}
          placeholder="Cari disini"
          value={this.state.pencarian}
          onChangeText={text =>
            this.setState({pencarian: text}, () => this.pencarian())
          }></TextInput>

        <FlatList
          data={this.state.dataTampil.sort((a, b) =>
            a.judul > b.judul ? 1 : b.judul > a.judul ? -1 : 0,
          )}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Detail', {
                  referensi: item.referensi,
                  gambar: item.gambar,
                  judul: item.judul,
                  deskripsi: item.deskripsi,
                })
              }
              style={{
                marginVertical: 10,
                marginHorizontal: 20,
                backgroundColor: '#2196f3',
                padding: 10,
                borderRadius: 5,
                elevation: 3,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginVertical: 5,
                }}>
                {item.judul}
              </Text>
              <ReadMore
                numberOfLines={3}
                seeMoreText={''}
                style={{color: 'white'}}>
                {item.deskripsi}
              </ReadMore>
            </TouchableOpacity>
          )}></FlatList>
      </View>
    );
  }
}

export default Home;
