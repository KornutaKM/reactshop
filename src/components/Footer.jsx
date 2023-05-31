import React from 'react'

const Footer = () => {
  return (
    <footer className='page-footer footer #5c6bc0 indigo darken-3'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright
          <a
            href='https://kornutakm.github.io/reactshop/'
            target='_blank'
            rel='noreferrer'
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
