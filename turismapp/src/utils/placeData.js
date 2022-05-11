const placeData = [
  {
    id: '1',
    image: require('../assest/img/a1.jpg'),
    nombre: 'Santa María Huatulco',
    localizacion: 'Oaxaca',
    municipio: 'Pochutla',
    region: 'Sierra Negra',
    tipoTurismo: 'CN',
    correo: 'santamariahuatulco@gmail.com',
    numero: '1234567898',
    emergencias: '2391745392',
    detalles:
      'El municipio de Santa María Huatulco es uno de los 570 municipios que conforman al estado mexicano de Oaxaca. Pertenece al distrito de Pochutla, dentro de la región costa.',
  },
];
export default placeData;

const dataCategory = [
  {
    id: '1',
    icon: 'map-signs',
    title: 'Viajes',
    isAcive: true,
  },
  {
    id: '2',
    icon: 'photo',
    title: 'Lugares',
    isAcive: false,
  },
  {
    id: '3',
    icon: 'youtube',
    title: 'YouTube',
    isAcive: false,
  },
  {
    id: '4',
    icon: 'leanpub',
    title: 'Noticias',
    isAcive: false,
  },
  {
    id: '5',
    icon: 'instagram',
    title: 'Instagram',
    isAcive: false,
  },
  {
    id: '6',
    icon: 'twitter',
    title: 'Twitter',
    isAcive: false,
  },
  {
    id: '7',
    icon: 'facebook-official',
    title: 'Facebook',
    isAcive: false,
  },
];

{
  /*
        <View style={{alignItems: 'center'}}>
          <CardAnuncio />
        </View>
        <View>
          <View style={styles.sectionHear}>
            <Text style={styles.titleCategoria}>Categoria</Text>
            <Text style={{color: COLOR_SECONDARY}}>Ver todo</Text>
          </View>
          <FlatList
            data={dataCategory}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity key={item.id}>
                <CircleCategoria
                  title={item.title}
                  icon={item.icon}
                  isActive={item.isAcive}
                />
              </TouchableOpacity>
            )}
          />
        </View>*/
}
