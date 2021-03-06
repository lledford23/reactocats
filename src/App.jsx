import React, { Component } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Octocat } from './Octocat'

class App extends Component {
  render() {
    const octocats = [
      {
        number: 150,
        name: 'Octoqueer',
        image: 'https://octodex.github.com//images/Octoqueer.png',
        link: 'https://octodex.github.com//octoqueer/',
        authorLink: 'https://github.com/cameronfoxly',
        authorImage: 'https://github.com/cameronfoxly.png',
      },
      {
        name: 'Terracottocat',
        link: 'https://octodex.github.com//terracottocat/',
        image: 'https://octodex.github.com//images/Terracottocat_Single.png',
        number: '149',
        authorLink: 'https://github.com/chubbmo',
        authorImage: 'https://github.com/chubbmo.png',
        authorName: 'chubbmo',
      },
      {
        name: 'Octogatos',
        link: 'https://octodex.github.com//octogatos/',
        image: 'https://octodex.github.com//images/Octogatos.png',
        number: '148',
        authorLink: 'https://github.com/cameronfoxly',
        authorImage: 'https://github.com/cameronfoxly.png',
        authorName: 'cameronfoxly',
      },
    ]

    const octocatComponents = octocats.map(octocat => (
      <Octocat
        name={octocat.name}
        link={octocat.link}
        image={octocat.image}
        number={octocat.number}
        authorLink={octocat.authorLink}
        authorImage={octocat.authorImage}
        authorName={octocat.authorName}
      />
    ))
    return (
      <>
        <Header />
        <main>{octocatComponents}</main>
        <Footer />
      </>
    )
  }
}

export default App
