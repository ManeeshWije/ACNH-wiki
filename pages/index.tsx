import Head from 'next/head';
import Navigation from '../components/Navigation';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';

export default function Home() {
  const [birthdayAnimal, setBirthdayAnimal] = useState(Object);
  const [birthdayAnimalName, setBirthdayAnimalName] = useState('');

  useEffect(() => {
    const url = 'https://acnhapi.com/v1/villagers';
    let curr = new Date();
    let month = curr.getMonth() + 1;
    let day = curr.getDate();
    let dateStr = `${day}/${month}`;
    const fetchData = async () => {
      const response: any = await fetch(url);
      const data: any = await response.json();
      for (let d in data) {
        if (data[d].birthday === dateStr) {
          setBirthdayAnimal(data[d]);
          setBirthdayAnimalName(data[d].name['name-USen']);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>acnh wiki</title>
        <meta name='description' content='Animal Crossing New Horizons Wiki' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col justify-center items-center content-center py-8'>
        <p className='text-8xl text-teal-400'>acnh wiki</p>
        <div className='py-12'></div>
        <Navigation />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-teal-400'>Today's Birthday</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src={birthdayAnimal.image_uri} />
          <Card.Body>
            <Card.Title>{birthdayAnimalName}</Card.Title>
            <Card.Text>Personality: {birthdayAnimal.personality} </Card.Text>
            <Card.Text>Species: {birthdayAnimal.species}</Card.Text>
            <Card.Text>Hobby: {birthdayAnimal.hobby}</Card.Text>
            <Card.Text>Gender: {birthdayAnimal.gender}</Card.Text>
            <Card.Text>Saying: "{birthdayAnimal.saying}"</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='flex justify-center items-center'>
        <video
          className='top-0 absolute -z-10 object-cover brightness-25 overflow-hidden'
          autoPlay
          loop
          muted
          src={'/demo.mp4'}
        ></video>
      </div>
    </>
  );
}
