import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Button, Image } from 'react-native';

const bikes = [
  {
    id: '1',
    name: 'Xe đạp thể thao',
    type: 'Mountain',
    price: '500$',
    image: 'https://example.com/image1.jpg', // URL hình ảnh xe đạp thể thao
  },
  {
    id: '2',
    name: 'Xe đạp đường phố',
    type: 'Road',
    price: '300$',
    image: 'https://example.com/image2.jpg', // URL hình ảnh xe đạp đường phố
  },
  {
    id: '3',
    name: 'Xe đạp địa hình',
    type: 'Hybrid',
    price: '450$',
    image: 'https://example.com/image3.jpg', // URL hình ảnh xe đạp địa hình
  },
  {
    id: '4',
    name: 'Xe đạp gấp',
    type: 'Folding',
    price: '600$',
    image: 'https://example.com/image4.jpg', // URL hình ảnh xe đạp gấp
  },
];

const BikeApp = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (bike) => {
    setSelectedBike(bike);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedBike(null);
    setModalVisible(false);
  };

  const renderBike = ({ item }) => (
    <TouchableOpacity style={styles.bikeItem} onPress={() => openModal(item)}>
      <Image source={{ uri: item.image }} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text>Loại: {item.type}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh Sách Xe Đạp</Text>
      <FlatList
        data={bikes}
        renderItem={renderBike}
        keyExtractor={(item) => item.id}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedBike && (
              <>
                <Image source={{ uri: selectedBike.image }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedBike.name}</Text>
                <Text>Loại: {selectedBike.type}</Text>
                <Text>Giá: {selectedBike.price}</Text>
                <Button title="Đóng" onPress={closeModal} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  bikeItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bikeImage: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 250,
    height: 150,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default BikeApp;