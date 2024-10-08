import { useEffect, useState } from 'react';

function Content() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setRecord(json);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>shop</h1>
      <div style={styles.grid}>
        {record.length > 0 &&
          record.map((item) => {
            return (
              <div key={item.id} style={styles.card}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={styles.image}
                />
                <div style={styles.details}>
                  <h2 style={styles.title}>{item.title}</h2>
                  <p style={styles.price}>${item.price.toFixed(2)}</p>
                  <button style={styles.button}>Add to Cart</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    margin: '20px 0',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'contain',
    marginBottom: '10px',
  },
  details: {
    textAlign: 'left',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  price: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Content;
