import Card from '@/components/Card'
import React from 'react'



export const listData = [
    {
      id: 1,
      title: "A Great Apartment Next to the Beach!",
      img: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 2,
      bathroom: 1,
      price: 1000,
      address: "456 Park Avenue, London",
      latitude: 51.5074,
      longitude: -0.1278,
    },
    {
      id: 2,
      title: "An Awesome Apartment Near the Park! Almost too good to be true!",
      img: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 3,
      bathroom: 2,
      price: 1500,
      address: "789 Oxford Street, London",
      latitude: 52.4862,
      longitude: -1.8904,
    },
    {
      id: 3,
      title: "A New Apartment in the City!",
      img: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 1,
      bathroom: 1,
      price: 800,
      address: "101 Baker Street, London",
      latitude: 53.4808,
      longitude: -2.2426,
    },
    {
      id: 4,
      title: "Great Location! Great Price! Great Apartment!",
      img: "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 2,
      bathroom: 1,
      price: 1000,
      address: "234 Kingsway, London,",
      latitude: 53.8008,
      longitude: -1.5491,
    },
    {
      id: 5,
      title: "Apartment 5",
      img: "https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bedroom: 3,
      bathroom: 2,
      price: 1500,
      address: "567 Victoria Road, London",
      latitude: 53.4084,
      longitude: -2.9916,
    },
 ]
const ListPage = () => {
  return (
    <div className='md:mx-10 lg:mx-24  mt-5    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 mx-4'>
        {
            listData.map(item=>(
                <Card item={item} key={item.id} />
            ))
        }
    </div>
  )
}

export default ListPage