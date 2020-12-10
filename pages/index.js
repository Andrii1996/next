import Link from 'next/link';

export default function Index() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item"><Link href="/about"><a> About </a></Link></li>
            <li className="header__item"><Link href="/post/1"><a> Post </a></Link></li>
          </ul>
        </nav>
      </header>
  <style jsx>{`
    .header {
      border: 1px solid black;
    }

    .header__list {
      display: flex;
      justify-content: space-around;
    }

    a {
      text-decoration: none;
    }
  `}</style>
    </>
  )
}