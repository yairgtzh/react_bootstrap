import React from 'react'
import Card from './Card'
import image1 from '../assets/js2.jpg'
import image2 from '../assets/java2.jpg'
import image3 from '../assets/python1.jpg'

const cards = [
  {
    id:1,
    title: 'JavaScript',
    image: image1,
    instructor: 'Humberto Dorantes',
    url: 'https://www.udemy.com/course/the-complete-javascript-course/?matchtype=b&msclkid=63208c1044621cacd117ea26c76abe93&utm_campaign=BG-LongTail_la.EN_cc.ROW_Experiment_2&utm_content=deal4584&utm_medium=udemyads&utm_source=bing&utm_term=_._ag_1326013382483180_._ad__._kw_JavaScript+course_._de_c_._dm__._pl__._ti_kwd-82876834264514_._li_142564_._pd__._'
  },
  {
    id:2,
    title: 'Java',
    image: image2,
    instructor: 'Samuel Lopez',
    url: 'https://www.udemy.com/course/master-completo-java-de-cero-a-experto/?couponCode=2021PM25'
  },
  {
    id:3,
    title: 'Python',
    image: image3,
    instructor: 'Angela Rios',
    url: 'https://www.udemy.com/course/python-total/?couponCode=2021PM25'
  }
]

export default function Cards() {
  console.log(cards)
  return (
    <div className='container d-flex justify-content-center aling-item-center h-100'>
      <div className='row'>
      {
        cards.map(c => (
            <div className='col-md-4' key={cards.id}>
              <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
              url={c.url}
              />
              </div>
          )
        )
      }
      </div>
    </div>
  )
}
