import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function Feed() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/begin.jpeg')}
        style={styles.imageBackground}
      />
      <TouchableOpacity
        style={styles.overlay}
        onPress={() => {
          // Handle the click event for "Palavra do dia" here
        }}
      >
        <Text style={styles.overlayText}>Palavra do dia</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.newView}
            onPress={() => {
              // Handle the click event here, e.g., navigate to "Célula2" with instant animation
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/Sobre.jpg')}
                style={styles.sobre}
              />
              <Text style={styles.newViewText}>Sobre a igreja</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.newView}
            onPress={() => {
              // Handle the click event here, e.g., navigate to "Sobre a igreja" with smart animate
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/Celula.jpg')}
                style={styles.sobre}
              />
              <Text style={styles.newViewText}>Celula</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.newView}
            onPress={() => {
              // Handle the click event here, e.g., navigate to "Célula" with instant animation
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/Ministerios.jpg')}
                style={styles.ministerios_imagem}
              />
              <Text style={styles.newViewTextMinisteriosimagem}>Ministerios</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.newView}
            onPress={() => {
              // Handle the click event here, e.g., navigate to "agenda" with smart animate
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../assets/Agenda.jpg')}
                style={styles.sobre}
              />
              <Text style={styles.newViewText}>Agenda</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        {/* Conteúdo da segunda View aqui */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 2,
  },
  imageBackground: {
    width: 390,
    height: 254,
    flexShrink: 0,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 254,
    left: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: '#000',
    fontSize: 15,
   // fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '300',
  },
  buttonContainer: {
    width: 364,
    height: 389,
    flexShrink: 0,
  },
  newViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newView: {
    width: 133,
    height: 149,
    flexShrink: 10,
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    backgroundColor: '#FAFAFA',
  },
  newViewText: {
    color: '#000',
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: -60,
  },
  newViewTextMinisteriosimagem: {
    color: '#000',
    fontFamily: 'Montserrat',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: -45,
  },
  content: {
    alignSelf: 'center',
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10, // Espaço entre as duas linhas de botões
  },
  sobre: {
    width: 58,
    height: 53,
    flexShrink: 0,
    marginBottom: 15,
  },
  ministerios_imagem: {
    width: 60,
    height: 68,
    flexShrink: 0,
    marginBottom: 15,
  },
  overlayButton: {
    position: 'absolute',
    top: 254,
    left: 0,
    width: '100%',
    padding: 10,
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
